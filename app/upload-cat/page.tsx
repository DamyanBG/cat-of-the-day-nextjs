"use client";

import NeedRegistration from "@/components/NeedRegistration";
import { UserContext } from "@/context/UserProvider";
import { CatInfo } from "@/types/data/cat";
import { addCatSchema } from "@/utils/schemas";
import { HOST_URL } from "@/utils/urls";
import { Form, Formik, FormikErrors } from "formik";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const initialCatInfoState: CatInfo = {
    name: "",
    passport_id: "",
    microchip_id: "",
    photo: "",
    breed: "",
};

export default function UploadCat() {
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const { user, setUser } = useContext(UserContext);
    const router = useRouter();

    const isUserAuthenticated = !!user.token;

    const postCat = (catInfo: CatInfo) => {
        setIsUploading(true);
        fetch(`${HOST_URL}/cat`, {
            method: "POST",
            body: JSON.stringify(catInfo),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error();
                }
                return resp.json();
            })
            .then(() => {
                const newUserState = {
                    ...user,
                    has_uploaded_cat: true,
                };
                setUser(newUserState);
                localStorage.setItem("user", JSON.stringify(newUserState));
                router.push("/cat-review");
            })
            .catch(() => alert("Problem occured during uploading the photo!"))
            .finally(() => setIsUploading(false));
    };

    const handleOnUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean
        ) => Promise<void | FormikErrors<CatInfo>>
    ) => {
        if (e.target.name === "photo") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFieldValue("photo", reader.result as string);
            };
            if (e.target.files) {
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    };

    const handleOnSubmit = (formValues: CatInfo) => {
        postCat(formValues);
    };

    if (!isUserAuthenticated) {
        return <NeedRegistration />;
    }

    return (
        <main>
            <section className="register-form-section">
                <Formik
                    initialValues={initialCatInfoState}
                    onSubmit={handleOnSubmit}
                    validationSchema={addCatSchema}
                >
                    {(formik) => (
                        <Form>
                            <h2>Add a New Cat</h2>

                            <article className="content">
                                <article className="input-box">
                                    <label htmlFor="name">Cat Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter cat name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        autoComplete="none"
                                    />
                                    {formik.errors.name &&
                                        formik.touched.name && (
                                            <p className="form-error">
                                                {formik.errors.name}
                                            </p>
                                        )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="breed">Cat Breed</label>
                                    <input
                                        type="text"
                                        name="breed"
                                        id="breed"
                                        placeholder="Enter cat breed"
                                        value={formik.values.breed}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.breed &&
                                        formik.touched.name && (
                                            <p className="form-error">
                                                {formik.errors.breed}
                                            </p>
                                        )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="passport_id">
                                        Cat Passport ID
                                    </label>
                                    <input
                                        type="text"
                                        name="passport_id"
                                        id="passport_id"
                                        placeholder="Enter cat passport id"
                                        value={formik.values.passport_id}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.passport_id &&
                                        formik.touched.passport_id && (
                                            <p className="form-error">
                                                {formik.errors.passport_id}
                                            </p>
                                        )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="microchip_id">
                                        Microchip ID
                                    </label>
                                    <input
                                        type="text"
                                        name="microchip_id"
                                        id="microchip_id"
                                        placeholder="Enter cat microchip id"
                                        value={formik.values.microchip_id}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.microchip_id &&
                                        formik.touched.microchip_id && (
                                            <p className="form-error">
                                                {formik.errors.microchip_id}
                                            </p>
                                        )}
                                </article>

                                <article className="input-box">
                                    <label htmlFor="photo">Photo</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        id="photo"
                                        placeholder="Choose a photo"
                                        onChange={(e) =>
                                            handleOnUpload(
                                                e,
                                                formik.setFieldValue
                                            )
                                        }
                                    />
                                    {formik.errors.photo &&
                                        formik.touched.photo && (
                                            <p className="form-error">
                                                {formik.errors.photo}
                                            </p>
                                        )}
                                </article>
                            </article>

                            <article className="button-container">
                                <button type="submit" disabled={isUploading}>
                                    Add cat
                                </button>
                            </article>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
