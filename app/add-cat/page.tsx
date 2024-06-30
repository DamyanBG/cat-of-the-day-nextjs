"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import CatForm from "@/components/form/CatForm";
import { AddCatValues, CatPostBodyValues } from "@/types/cat";
import CatFormWrapper from "@/components/form/CatFormWrapper";
import CatPhotoUpload from "@/components/form/CatPhotoUpload";
import { UserContext } from "@/context/UserProvider";
import { postCat } from "@/api/catApi";
import { ImageInfoValues } from "@/types/imageTypes";
import { postImage } from "@/api/imageApi";
import MustLogIn from "@/components/MustLogIn";

const initialFormValues: AddCatValues = {
    name: "",
    color: "",
    breed: "",
    birth_date: "",
    microchip: "",
};

const initialImageValues: ImageInfoValues = {
    id: "0",
    image_url: "",
};

export default function AddCat() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [imageInfo, setImageInfo] = useState(initialImageValues);
    const { user } = useContext(UserContext);
    const router = useRouter();

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
            router.push("/")
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (values: AddCatValues) => {
        if (!imageInfo.image_url) return;
        createCat(values);
    };

    const handleUpload = (file: File) => {
        setIsUploading(true);
        const reader = new FileReader();
        reader.onloadend = async () => {
            const photoData = reader.result;
            try {
                const response = await postImage(photoData, user.token);
                console.log(response.data);
                setImageInfo(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsUploading(false);
            }
        };
        reader.readAsDataURL(file);
    };

    const photoSectionEl = imageInfo.image_url ? (
        <div>
            <img
                alt="Cat of the Week"
                className="mx-auto rounded-lg shadow-lg"
                height={400}
                src={imageInfo.image_url}
                style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                }}
                width={600}
            />
        </div>
    ) : (
        <CatPhotoUpload isUploading={isUploading} onUpload={handleUpload} />
    );

    if (!user.token) {
        return <MustLogIn title="Add Cat" text="You must be logged in to add cat." />
    }

    return (
        <CatFormWrapper
            photoSectionEl={photoSectionEl}
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
