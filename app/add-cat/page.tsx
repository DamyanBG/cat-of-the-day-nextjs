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
import { postImage } from "@/api/imageApi";

const initialFormValues: AddCatValues = {
    name: "",
    color: "",
    breed: "",
    birth_date: "",
    microchip: "",
};

const initialImageValues: ImageInfoValues = {
    id: "",
    url: "",
};

export default function AddCat() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageInfo, setImageInfo] = useState(initialImageValues);
    const { user } = useContext(UserContext);

    const createCat = async (catValues: AddCatValues) => {
        setIsSubmitting(true);
        const catPostBody: CatPostBodyValues = {
            name: catValues.name,
            breed: catValues.breed,
            birth_date: catValues.birth_date,
            color: catValues.color,
            microchip: catValues.microchip,
            photo_id: imageInfo.id,
        };
        try {
            const response = await postCat(catPostBody, user.token);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (values: AddCatValues) => {
        if (!imageInfo.id) return;
        createCat(values);
    };

    const handleUpload = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
            const photoData = reader.result;
            try {
                const response = await postImage(photoData, user.token);
                console.log(response.data);
                setImageInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <CatFormWrapper
            photoDropZoneEl={<CatPhotoUpload onUpload={handleUpload} />}
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
