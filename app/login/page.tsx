"use client"

import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
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

const PARTICIPANT_PATH = "/uploader/login";
const VOTER_PATH = "/voter/login";

interface Credentials {
    email: string;
    password: string;
    as_participant?: boolean;
  }
  
  const initialCredentialsState: Credentials = {
    password: "",
    email: "",
  };
  

export default function LogIn() {
    const { setUser } = useContext(UserContext);
    const router = useRouter()

    const login = (values: Credentials) => {
        const path = values.as_participant ? PARTICIPANT_PATH : VOTER_PATH
        delete values.as_participant;
        fetch(`${HOST_URL}${path}`, {
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
            <section className="form-section">
                <Form
                    onSubmit={handleOnSubmit}
                    initialValues={initialCredentialsState}
                    render={({ handleSubmit, submitting, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
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

                            <label>Login as participant</label>
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
    )
}