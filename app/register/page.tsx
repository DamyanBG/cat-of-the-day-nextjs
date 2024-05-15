"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Field, Form, Formik } from "formik";

import RegisterForm from "@/components/form/RegisterForm";
import { UserRegister } from "@/types/user";
import { HOST_URL } from "@/utils/urls";

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
        postUser(values);
    };


    return <RegisterForm />;
}
