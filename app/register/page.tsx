"use client";

import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Form, Field } from "react-final-form";

interface RegisterInfo {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    as_participant?: boolean;
}

const initialRegisterState: RegisterInfo = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    as_participant: false,
};

const PARTICIPANT_PATH = "/uploader/register";
const VOTER_PATH = "/voter/register";

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
        const path = values.as_participant ? PARTICIPANT_PATH : VOTER_PATH;
        delete values.as_participant;
        fetch(`${HOST_URL}${path}`, {
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
            <section className="form-section">
                <Form
                    onSubmit={handleOnSubmit}
                    initialValues={initialRegisterState}
                    render={({ handleSubmit, submitting, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <label>First Name</label>
                            <article>
                                <Field
                                    data-testid="first_name"
                                    name="first_name"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                    validate={validateNames}
                                />
                                {errors?.first_name && touched?.first_name && (
                                    <p className="text-danger">
                                        {errors?.first_name}
                                    </p>
                                )}
                            </article>

                            <label>Last Name</label>
                            <article>
                                <Field
                                    data-testid="last_name"
                                    name="last_name"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                    validate={validateNames}
                                />
                                {errors?.last_name && touched?.last_name && (
                                    <p className="text-danger">
                                        {errors?.last_name}
                                    </p>
                                )}
                            </article>

                            <label>Email</label>
                            <article>
                                <Field
                                    data-testid="email"
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Enter email"
                                    validate={validateEmail}
                                />
                                {errors?.email && touched?.email && (
                                    <p className="text-danger">
                                        {errors?.email}
                                    </p>
                                )}
                            </article>

                            <label>Password</label>
                            <article>
                                <Field
                                    data-testid="password"
                                    name="password"
                                    component="input"
                                    type="password"
                                    placeholder="Enter password"
                                    validate={validatePassword}
                                />
                                {errors?.password && touched?.password && (
                                    <p className="text-danger">
                                        {errors?.password}
                                    </p>
                                )}
                            </article>

                            <label>Register as participant</label>
                            <article>
                                <Field
                                    name="as_participant"
                                    component="input"
                                    type="checkbox"
                                />
                            </article>

                            <button
                                type="submit"
                                disabled={submitting}
                                data-testid="submit-button"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                />
            </section>
        </main>
    );
}
