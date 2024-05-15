"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Field, Form, Formik } from "formik";

import RegisterForm from "@/components/form/RegisterForm";
import { UserRegister } from "@/types/user";
import { HOST_URL } from "@/utils/urls";
import { UserContext } from "@/context/UserProvider";
import FormWrapper from "@/components/form/FormWrapper";

const initialRegisterState: UserRegister = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function Register() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const postUser = (values: UserRegister) => {
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

    const handleOnSubmit = (values: UserRegister) => {
        console.log(values)
        postUser(values);
    };


    return (
        <FormWrapper title="Register" text="Create an account to get started with Cat of the Day.">
            <Formik
                initialValues={initialRegisterState}
                // validate={}
                onSubmit={handleOnSubmit}
            >
                <RegisterForm isSubmitting={isSubmitting} />
            </Formik>
        </FormWrapper>
    );
}
