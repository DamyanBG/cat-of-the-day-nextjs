"use client";

import { Formik } from "formik";

import CatForm from "@/components/form/CatForm";
import { AddCatValues, CatPostBodyValues } from "@/types/cat";
import CatFormWrapper from "@/components/form/CatFormWrapper";
import CatPhotoUpload from "@/components/form/CatPhotoUpload";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserProvider";
import { postCat } from "@/api/catApi";
import { ImageInfoValues } from "@/types/imageTypes";

const initialFormValues: AddCatValues = {
    name: "",
    color: "",
    breed: "",
    birth_date: "",
    microchip: "",
};

const initialImageValues: ImageInfoValues = {
    id: "",
    src: ""
}

export default function AddCat() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [imageInfo, setImageInfo] = useState(initialImageValues)
    const { user } = useContext(UserContext)


    const createCat = async (catValues: AddCatValues) => {
        setIsSubmitting(true)
        const catPostBody: CatPostBodyValues = {
            name: catValues.name,
            breed: catValues.breed,
            birth_date: catValues.birth_date,
            color: catValues.color,
            microchip: catValues.microchip,
            photo_id: imageInfo.id
        }
        try {
            const response = await postCat(catPostBody, user.token)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }
 
    const handleSubmit = (values: AddCatValues) => {
        if (!imageInfo.id) return
        createCat(values)
    };

    return (
        <CatFormWrapper
            photoDropZoneEl={<CatPhotoUpload />}
            formEl={
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={handleSubmit}
                >
                    <CatForm isSubmitting={isSubmitting} />
                </Formik>
            }
        />
    );
}
