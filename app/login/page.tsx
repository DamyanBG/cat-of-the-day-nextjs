"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "@/context/UserProvider";
import { Credentials } from "@/types/data/user";
import { userLoginSchema } from "@/utils/schemas";
import { HOST_URL } from "@/utils/urls";

const initialCredentialsState: Credentials = {
    password: "",
    email: "",
};

export default function LogIn() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const login = (values: Credentials) => {
        setIsSubmitting(true);
        fetch(`${HOST_URL}/user/login`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                console.log(resp);
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

    const handleOnSubmit = (values: Credentials) => {
        login(values);
    };

    return (
        <main>
            <section className="login-form-section">
                <Formik
                    initialValues={initialCredentialsState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userLoginSchema}
                >
                    {({ values, errors, touched }) => (
                        <Form>
                            <h2>Log In</h2>

                            <article className="form-group">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <Field data-testid="email" name="email" />

                                <label className={values.email && "move-up"}>
                                    Email{" "}
                                    {errors.email && touched.email && (
                                        <span className="form-error">
                                            <ErrorMessage name="email" />
                                        </span>
                                    )}
                                </label>
                            </article>

                            <article className="form-group">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                                <Field
                                    data-testid="password"
                                    name="password"
                                    type="password"
                                />
                                <label className={values.password && "move-up"}>
                                    Password{" "}
                                    {errors.password && touched.password && (
                                        <span className="form-error">
                                            <ErrorMessage name="password" />
                                        </span>
                                    )}
                                </label>
                            </article>

                            <article className="forgot">
                                <Link href="/forgot-password">
                                    Forgot Password
                                </Link>
                            </article>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                data-testid="submit-button"
                            >
                                Log In
                            </button>

                            <article className="register-link">
                                <p>
                                    Don&apos;t have an account?{" "}
                                    <Link href="/register">Register</Link>
                                </p>
                            </article>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
