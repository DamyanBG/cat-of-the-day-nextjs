"use client";

import NeedRegistration from "@/components/NeedRegistration";
import { UserContext } from "@/context/UserProvider";
import { CatInfo } from "@/types/data/cat";
import { HOST_URL } from "@/utils/urls";
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
    const [catInfo, setCatInfo] = useState<CatInfo>(initialCatInfoState);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const { user, setUser } = useContext(UserContext);
    const router = useRouter();

    const isUserAuthenticated = !!user.token;

    const postCat = () => {
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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "photo") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCatInfo({
                    ...catInfo,
                    [e.target.name]: reader.result as string,
                });
            };
            if (e.target.files) {
                reader.readAsDataURL(e.target.files[0]);
            }
        } else {
            setCatInfo({
                ...catInfo,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postCat();
    };

    if (!isUserAuthenticated) {
        return <NeedRegistration />;
    }

    return (
        <main>
            <section className="register-form-section">
                <form onSubmit={handleOnSubmit}>
                    <h2>Add a New Cat</h2>

                    <article className="content">
                        <article className="input-box">
                            <label htmlFor="name">Cat Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter cat name"
                                value={catInfo.name}
                                onChange={handleOnChange}
                                autoComplete="none"
                            />
                        </article>

                        <article className="input-box">
                            <label htmlFor="breed">Cat Breed</label>
                            <input
                                type="text"
                                name="breed"
                                id="breed"
                                placeholder="Enter cat breed"
                                value={catInfo.breed}
                                onChange={handleOnChange}
                            />
                        </article>

                        <article className="input-box">
                            <label htmlFor="passport_id">Cat Passport ID</label>
                            <input
                                type="text"
                                name="passport_id"
                                id="passport_id"
                                placeholder="Enter cat passport id"
                                value={catInfo.passport_id}
                                onChange={handleOnChange}
                            />
                        </article>

                        <article className="input-box">
                            <label htmlFor="microchip_id">Microchip ID</label>
                            <input
                                type="text"
                                name="microchip_id"
                                id="microchip_id"
                                placeholder="Enter cat microchip id"
                                value={catInfo.microchip_id}
                                onChange={handleOnChange}
                            />
                        </article>

                        <article className="input-box">
                            <label htmlFor="photo">Photo</label>
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                placeholder="Choose a photo"
                                onChange={handleOnChange}
                            />
                        </article>
                    </article>

                    <article className="button-container">
                        <button type="submit" disabled={isUploading}>
                            Add cat
                        </button>
                    </article>
                </form>
            </section>
        </main>
    );
}
