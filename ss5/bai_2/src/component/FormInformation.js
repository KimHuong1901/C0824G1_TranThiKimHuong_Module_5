import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function FormInformation() {
    const [information, setInformation] = useState({
        name: "",
        passport: "",
        dob: "",
        gender: "",
        nationality: "",
        company: "",
        department: "",
        insurance: "",
        city: "",
        district: "",
        ward: "",
        phone: "",
        email: "",
        travel: "",
        symptom: [],
        contact: [],
    });

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const validateFormInformation = {
        name: Yup.string().required("Required"),
        passport: Yup.string().required("Required"),
        dob: Yup.string().min(1900, "Required and must be greater than 1900"),
        nationality: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        district: Yup.string().required("Required"),
        ward: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string()
            .required("Required")
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
                "Invalid email address"
            ),
    };

    const saveInformation = async (information) => {
        try {
            console.log("Saving information...", information);
            enqueueSnackbar("Điền thông tin thành công", { variant: "success" });
            navigate("/information");
        } catch (error) {
            enqueueSnackbar(
                "Cập nhật thông tin thất bại, vui lòng kiểm tra lại",
                { variant: "error" }
            );
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Tờ khai y tế</h2>
            <Formik
                initialValues={information}
                onSubmit={saveInformation}
                validationSchema={Yup.object(validateFormInformation)}>
                <Form className="form-grid">
                    <div className="form-column">
                        <p></p>
                        <p>Full Name</p>
                        <Field name="name" placeholder="Enter your name"/>
                        <ErrorMessage name="name" component="p" className="error"/>

                        <p>Passport</p>
                        <Field name="passport" placeholder="Enter your passport"/>
                        <ErrorMessage name="passport" component="p" className="error"/>

                        <p>Day of birth</p>
                        <Field name="dob">
                            {({ field }) => (
                                <input
                                    {...field}
                                    type="date"
                                    placeholder="Enter your day of birth"
                                    className="date-input"
                                />
                            )}
                        </Field>
                        <ErrorMessage name="dob" component="p" className="error"/>

                        <p>Gender</p>
                        <Field as="select" name="gender">
                            <option value="" label="Choose gender"/>
                            <option value="male" label="Male"/>
                            <option value="female" label="Female"/>
                        </Field>

                        <p>Nationality</p>
                        <Field name="nationality" placeholder="Enter your nationality"/>
                        <ErrorMessage name="nationality" component="p" className="error"/>

                        <p>Company</p>
                        <Field name="company" placeholder="Enter your company"/>

                        <p>Department</p>
                        <Field name="department" placeholder="Enter your department"/>
                    </div>

                    <div className="form-column">
                        <h3 className="address-title">Address at VietNam</h3>
                        <div className="inline-fields">
                            <div>
                                <p>City</p>
                                <Field name="city" placeholder="Enter your city"/>
                                <ErrorMessage name="city" component="p" className="error"/>
                            </div>
                            <div>
                                <p>District</p>
                                <Field name="district" placeholder="Enter your district"/>
                                <ErrorMessage name="district" component="p" className="error"/>
                            </div>
                        </div>

                        <p>Ward</p>
                        <Field name="ward" placeholder="Enter your ward"/>
                        <ErrorMessage name="ward" component="p" className="error"/>

                        <p>Phone</p>
                        <Field name="phone" placeholder="Enter your phone"/>
                        <ErrorMessage name="phone" component="p" className="error"/>

                        <p>Email</p>
                        <Field name="email" placeholder="Enter your email"/>
                        <ErrorMessage name="email" component="p" className="error"/>

                        <p>
                            Trong vòng 14 ngày qua, Anh/chị có đến quốc gia/vùng lãnh thổ nào?
                        </p>
                        <Field name="travel" as="textarea"/>

                        <p>
                            Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện triệu chứng nào không?
                        </p>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="symptom" value="Sốt"/>
                                Sốt
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="Ho"/>
                                Ho
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="Khó thở"/>
                                Khó thở
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="Viêm phổi"/>
                                Viêm phổi
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="Đau họng"/>
                                Đau họng
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="Mệt mỏi"/>
                                Mệt mỏi
                            </label>
                        </div>
                        <p>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</p>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="symptom" value="mắc bệnh Covid-19"/>
                                Người bệnh hoặc nghi ngờ mắc bệnh Covid-19
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="có bệnh Covid-19"/>
                                Người từ nước có bệnh Covid-19
                            </label>
                            <label>
                                <Field type="checkbox" name="symptom" value="có biểu hiện"/>
                                Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                            </label>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>

    );
}

export default FormInformation;
