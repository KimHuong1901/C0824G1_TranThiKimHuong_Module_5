import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import * as bookService from "../service/BookService.js";
import {Table, Button, Container, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

function BookList() {
    const { enqueueSnackbar } = useSnackbar();
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        try {
            let val = await bookService.getAllBooks();
            setBooks(val);
            if (val.length === 0) {
                enqueueSnackbar("List is empty", { variant: "warning" });
            }
        } catch (error) {
            console.error(error);
            enqueueSnackbar("Error dowload list", { variant: "error" });
        }
    };
    const handleDelete = async (bookId) => {
        const isConfirmed = window.confirm("Are you want to delete this book?");
        if (isConfirmed) {
            const isDeleted = await bookService.deleteBook(bookId);
            if (isDeleted) {
                enqueueSnackbar("Delete successfully", { variant: "success" });
                getAll();
            } else {
                enqueueSnackbar("Delete failed", { variant: "error" });
            }
        }
    };
    return (
        <>
            <div className="text-end my-3">
                <Button variant="success" onClick={() => navigate("/book/create")}>
                    Add
                </Button>
            </div>
            <h1 className="text-center my-4">Library</h1>
            <Table striped bordered hover responsive className="text-center">
                <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.length > 0 ? (
                            books.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => handleDelete(book.id)}>
                                            Delete
                                        </Button>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            onClick={() => navigate(`/book/${book.id}/update`)}>
                                            Update
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No books available.
                                </td>
                            </tr>
                        )}
                        </tbody>
            </Table>
        </>
    );
}

export default BookList;
