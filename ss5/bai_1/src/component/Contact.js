import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contactService from "../service/ContactService";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {TupleSchema} from "yup";
import {useState} from "react";
function ContactForm() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const validateContactForm = {
        name: Yup.string()
            .required("Tên không được để trống"),
        email: Yup.string()
            .required("Email không được để trống")
            .matches(/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+$/,
                "Email không hợp lệ. Vui lòng nhập đúng định dạng."),
        phone: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(
                /^[0-9]{10}$/,
                "Số điện thoại chỉ được chứa 10 chữ số và không chứa ký tự khác"
            )
    }
    const saveContact = async (contact) => {
        try {
            await contactService.saveContact(contact);
          enqueueSnackbar("Thêm mới thành công!", { variant: "success" });
            navigate("/contact");
        } catch (error) {
            enqueueSnackbar("Không thể thêm mới", { variant: "error" });
        }
    };

    return (
        <div>
            <h2>Contact Form</h2>
            <Formik
                initialValues={contact} onSubmit={saveContact} validationSchema={Yup.object(validateContactForm)}>
                <Form>
                    <p>Name</p>
                    <Field name="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component="p" className="error"></ErrorMessage>
                    <p>Email</p>
                    <Field name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="p" className="error"></ErrorMessage>
                    <p>Phone</p>
                    <Field name="phone" placeholder="Enter your phone number" />
                    <ErrorMessage name="phone" component="p" className="error"></ErrorMessage>
                    <p>Message</p>
                    <Field name="message" placeholder="Enter your message" as="textarea" />
                    <ErrorMessage name="message" component="p" className="error"></ErrorMessage>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </Form>
            </Formik>
        </div>
    );
}
export default ContactForm;
