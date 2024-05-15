"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import FormWrapper from "@/components/form/FormWrapper";
import { UserContext } from "@/context/UserProvider";
import LogInForm from "@/components/form/LogInForm";
import { UserLogIn } from "@/types/user";
import { postLogInUser } from "@/api/userApi";

const initialFormValues: UserLogIn = {
    email: "",
    password: "",
}

export default function LogIn() {
    const { setUser } = useContext(UserContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const logIn = async (postBody: UserLogIn) => {
        setIsSubmitting(true);
        try {
            const response = await postLogInUser(postBody)
            const data = response.data
            if (data.token) {
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                router.push("/");
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleSubmit = (values: UserLogIn) => {
        logIn(values)
    }

    return (
        <FormWrapper title="Log In" text="Please log in to begin your Cat of the Day experience.">
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
            >
                <LogInForm isSubmitting={isSubmitting} />
            </Formik>
        </FormWrapper>
    )
}