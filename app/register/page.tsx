"use client";

import { UserContext } from "@/context/UserProvider";
import { RegisterFormValues } from "@/types/data/user";
import { userRegisterSchema } from "@/utils/schemas";
import { HOST_URL } from "@/utils/urls";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const initialRegisterState: RegisterFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
};

export default function Register() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const postUser = (values: RegisterFormValues) => {
        setIsSubmitting(true);
        fetch(`${HOST_URL}/user/register`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.status !== 201) {
                    alert("error!");
                }
                return resp.json();
            })
            .then((json) => {
                console.log(json);
                if (json.token) {
                    localStorage.setItem("user", JSON.stringify(json));
                    setUser(json);
                    router.push("/");
                }
            })
            .finally(() => setIsSubmitting(false));
    };

    const handleOnSubmit = (values: RegisterFormValues) => {
        postUser(values);
    };

    return (
        <main>
            <section className="register-form-section">
                <Formik
                    initialValues={initialRegisterState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userRegisterSchema}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <h2>Registration Form</h2>
                            <article className="content">
                                <article className="input-box">
                                    <label htmlFor="">First Name</label>
                                    <Field
                                        name="first_name"
                                        placeholder="Enter First Name"
                                    />
                                    {(errors.first_name && touched.first_name) && (
                                        <p className="form-error">{errors.first_name}</p>
                                    )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="">Last Name</label>
                                    <Field
                                        name="last_name"
                                        placeholder="Enter Last Name"
                                    />
                                    {(errors.last_name && touched.last_name) && (
                                        <p className="form-error">{errors.last_name}</p>
                                    )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="">Email</label>
                                    <Field
                                        name="email"
                                        placeholder="Enter Email"
                                    />
                                    {(errors.email && touched.email) && (
                                        <p className="form-error">{errors.email}</p>
                                    )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="">Password</label>
                                    <Field
                                        name="password"
                                        placeholder="Enter Password"
                                        type="password"
                                    />
                                    {(errors.password && touched.password) && (
                                        <p className="form-error">{errors.password}</p>
                                    )}
                                </article>
                            </article>

                            <article className="alert">
                                <p>
                                    By clicking Register, you agree our{" "}
                                    <Link href="terms">
                                        Terms and Conditions.
                                    </Link>
                                </p>
                            </article>

                            <article className="button-container">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    data-testid="submit-button"
                                >
                                    Register
                                </button>
                            </article>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
