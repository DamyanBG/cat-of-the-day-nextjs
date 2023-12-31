"use client";

import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Form, Field } from "react-final-form";

interface RegisterInfo {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const initialRegisterState: RegisterInfo = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
};

const EMAIL_REGEX: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

const validateNames = (value: string) =>
    value.length > 2 && value.length < 256
        ? null
        : "The name have to be between 3 and 255 chars!";
const validateEmail = (value: string) =>
    EMAIL_REGEX.test(value) ? null : "Please, enter valid email!";
const validatePassword = (value: string) =>
    PASSWORD_REGEX.test(value)
        ? null
        : "Password must be at least 6 characters long and include at least 1 capital letter and 1 digit!";

export default function Register() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();

    const postUser = (values: RegisterInfo) => {
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
            });
    };

    const handleOnSubmit = (values: RegisterInfo) => {
        postUser(values);
    };

    return (
        <main>
            <section className="register-form-section">
                <Form
                    onSubmit={handleOnSubmit}
                    initialValues={initialRegisterState}
                    render={({ handleSubmit, submitting, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Registration Form</h2>
                            <article className="content">
                                <article className="input-box">
                                    <label htmlFor="">First Name</label>
                                    <Field
                                        data-testid="first_name"
                                        name="first_name"
                                        component="input"
                                        type="text"
                                        placeholder="Enter First Name"
                                        validate={validateNames}
                                    />
                                </article>
                                <article className="input-box">
                                    <label htmlFor="">Last Name</label>
                                    <Field
                                        data-testid="last_name"
                                        name="last_name"
                                        component="input"
                                        type="text"
                                        placeholder="Enter Last Name"
                                        validate={validateNames}
                                    />
                                </article>
                                <article className="input-box">
                                    <label htmlFor="">Email</label>
                                    <Field
                                        data-testid="email"
                                        name="email"
                                        component="input"
                                        type="email"
                                        placeholder="Enter Email"
                                        validate={validateNames}
                                    />
                                </article>
                                <article className="input-box">
                                    <label htmlFor="">Password</label>
                                    <Field
                                        data-testid="email"
                                        name="password"
                                        component="input"
                                        type="password"
                                        placeholder="Enter Password"
                                        validate={validateNames}
                                    />
                                </article>
                            </article>

                            <article className="alert">
                                <p>
                                    By clicking Register, you agree our <Link href="terms">Terms and Conditions.</Link>
                                </p>
                            </article>
                           
                            <article className="button-container">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    data-testid="submit-button"
                                >
                                    Register
                                </button> 
                            </article>
                        </form>
                    )}
                />
            </section>
        </main>
    );
}
