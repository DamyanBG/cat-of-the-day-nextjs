"use client";

import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Field, Form } from "react-final-form";

const EMAIL_REGEX: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

const validateEmail = (value: string) =>
    EMAIL_REGEX.test(value) ? null : "Please, enter valid email!";
const validatePassword = (value: string) =>
    PASSWORD_REGEX.test(value)
        ? null
        : "Password must be at least 6 characters long and include at least 1 capital letter and 1 digit!";

interface Credentials {
    email: string;
    password: string;
}

const initialCredentialsState: Credentials = {
    password: "",
    email: "",
};

export default function LogIn() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();

    const login = (values: Credentials) => {
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
            });
    };

    const handleOnSubmit = (values: Credentials) => {
        login(values);
    };

    return (
        <main>
            <section className="login-form-section">
                <Form
                    onSubmit={handleOnSubmit}
                    initialValues={initialCredentialsState}
                    render={({
                        handleSubmit,
                        submitting,
                        errors,
                        touched,
                        values,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Log In</h2>

                            <article className="form-group">
                                <span className="icon">&#x2709;</span>
                                <Field
                                    data-testid="email"
                                    name="email"
                                    component="input"
                                    type="email"
                                    validate={validateEmail}
                                />
                                {/* {errors?.email && touched?.email && (
                                    <p className="text-danger">
                                        {errors?.email}
                                    </p>
                                )} */}
                                <label className={values.email && "move-up"}>
                                    Email
                                </label>
                            </article>

                            <article className="form-group">
                                <span className="icon">&#xa7;</span>
                                <Field
                                    data-testid="password"
                                    name="password"
                                    component="input"
                                    type="password"
                                    validate={validatePassword}
                                />
                                {/* {errors?.password && touched?.password && (
                                    <p className="text-danger">
                                        {errors?.password}
                                    </p>
                                )} */}
                                <label className={values.password && "move-up"}>
                                    Password
                                </label>
                            </article>

                            <article className="forgot">
                                <Link href="/forgot-password">
                                    Forgot Password
                                </Link>
                            </article>

                            <button
                                type="submit"
                                disabled={submitting}
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
                        </form>
                    )}
                />
            </section>
        </main>
    );
}
