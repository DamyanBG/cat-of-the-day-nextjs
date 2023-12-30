"use client"

import { CatExistsContext } from "@/context/CatExistProvider";
import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface CatInfo {
    name: string;
    passport_id: string;
    microchip_id: string;
    photo: string;
    breed: string;
}

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

    const { user } = useContext(UserContext);
    const { setCatExists } = useContext(CatExistsContext);
    const router = useRouter()

    const isUserAuthenticated = !!user.token

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
            .then((json) => {
                console.log(json);
                setCatExists(true);
                localStorage.setItem("catExist", "true");
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
        return (
            <main>
                <div>You have to be logged in to use this functionality!</div>
            </main>
        )
    }

    return (
        <main>
            <section>
                <form onSubmit={handleOnSubmit}>
                    <h3>Add a New Cat</h3>

                    <article>
                        <label>Cat Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter cat name"
                            value={catInfo.name}
                            onChange={handleOnChange}
                            />
                    </article>

                    <article>
                        <label>Cat Breed</label>
                        <input
                            type="text"
                            name="breed"
                            placeholder="Enter cat breed"
                            value={catInfo.breed}
                            onChange={handleOnChange}
                        />
                    </article>

                    <article>
                        <label>Cat Passport ID</label>
                        <input
                            type="text"
                            name="passport_id"
                            placeholder="Enter cat passport id"
                            value={catInfo.passport_id}
                            onChange={handleOnChange}
                        />
                    </article>

                    <article>
                        <label>Microchip ID</label>
                        <input
                            type="text"
                            name="microchip_id"
                            placeholder="Enter cat microchip id"
                            value={catInfo.microchip_id}
                            onChange={handleOnChange}
                        />
                    </article>

                    <article>
                        <label>Photo</label>
                        <input
                            type="file"
                            name="photo"
                            placeholder="Choose a photo"
                            onChange={handleOnChange}
                        />
                    </article>

                    <button
                        type="submit"
                        disabled={isUploading}
                    >
                        Add cat
                    </button>
                </form>
            </section>
        </main>
    )
}