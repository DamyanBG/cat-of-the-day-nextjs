"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import RegisterForm from "@/components/form/RegisterForm";
import { UserPost, UserRegister } from "@/types/user";
import { UserContext } from "@/context/UserProvider";
import FormWrapper from "@/components/form/FormWrapper";
import { postUser } from "@/api/userApi";

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

    const createUser = async (values: UserRegister) => {
        setIsSubmitting(true);
        const postBody: UserPost = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
        }
        try {
            const response = await postUser(postBody)
            const data = response.data
            console.log(data)
            if (data.token) {
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                router.push("/");
            } else if (data.id) {
                router.push("/login")
            } else {
                throw Error("Bad request!")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    };

    const handleOnSubmit = (values: UserRegister) => {
        console.log(values)
        createUser(values);
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
