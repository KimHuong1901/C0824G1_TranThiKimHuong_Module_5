import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import * as bookService from "../service/BookService.js";
import { enqueueSnackbar } from "notistack";

function UpdateBook() {
    const navigate = useNavigate();
    const location = useLocation();
    const { book } = location.state || {};
    const [initialValues, setInitialValues] = useState({
        id: book?.id || "",
        title: book?.title || "",
        quantity: book?.quantity || ""
    });

    const handleSubmit = async (values) => {
        const isUpdated = await bookService.updateBook(values);
        if (isUpdated) {
            enqueueSnackbar("Update Book Successfully", { variant: "success" });
            navigate("/book");
        } else {
            enqueueSnackbar("Update Book Failed", { variant: "error" });
        }
    };

    return (
        <div>
            <h1>Edit Book</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="form-control"
                        />
                    </div>
                    <Button type="submit" variant="primary">Save Changes</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default UpdateBook;