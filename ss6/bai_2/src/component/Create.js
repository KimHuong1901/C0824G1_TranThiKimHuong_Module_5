import {useState} from "react";
import * as bookService from "../service/BookService.js";
import {useNavigate} from "react-router-dom";
import {enqueueSnackbar} from "notistack";
import {Field, Form, Formik} from "formik";

function BookCreate(){
    const [book, setBook] = useState({
        id:"",
        title:"",
        quantity:""
    });
    const navigate = useNavigate();
    const saveBook = async (values) => {
        try {
            const isSaved = await bookService.saveBook(values);
            if (isSaved) {
                enqueueSnackbar("Add Book Successfully", { variant: "success" });
              navigate("/books");
            } else {
                enqueueSnackbar("Add Book Failed", { variant: "error" });
            }
        } catch (error) {
            console.error(error);
            enqueueSnackbar("Error when add book", { variant: "error" });
        }
    };
    return(
        <div>
            <Formik initialValues={book} onSubmit={saveBook}>
                <Form>
                    <Field name="title"></Field>
                    <Field name="quantity"></Field>
                    <button type="submit">Add New</button>
                </Form>
            </Formik>
        </div>
    )
}
export default BookCreate;