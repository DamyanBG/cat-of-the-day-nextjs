"use client"

import { Formik } from "formik";

import CatForm from "@/components/form/CatForm";
import { AddCatValues } from "@/types/cat";

const initialFormValues: AddCatValues ={
    name: "",
    color: "",
    breed: "",
    birth_date: "",
    microchip: "",
}

export default function AddCat() {
    const handleSubmit = (values: AddCatValues) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={handleSubmit}
        >
            <CatForm />
        </Formik>
    );
}
