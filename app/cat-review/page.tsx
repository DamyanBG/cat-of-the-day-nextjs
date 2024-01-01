"use client";

import { UserContext } from "@/context/UserProvider";
import { HOST_URL } from "@/utils/urls";
import { useContext, useEffect, useState } from "react";

interface CatInfo {
    photo_url: string;
    name: string;
    breed: string;
    microchip_id: string;
    passport_id: string;
    create_on: string;
}

const catInfoInitialState = {
    photo_url: "",
    name: "",
    breed: "",
    microchip_id: "",
    passport_id: "",
    create_on: "",
};

export default function CatReview() {
    const [catInfo, setCatInfo] = useState<CatInfo>(catInfoInitialState);
    const { user } = useContext(UserContext);

    const fetchCatInfo = () => {
        if (!user.token) return;
        fetch(`${HOST_URL}/cat`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((json) => {
                console.log(json);
                setCatInfo(json);
            });
    };

    useEffect(fetchCatInfo, [user.token]);

    return (
        <main>
            <section className="review-section">
                <h2>Review</h2>
                <section>
                    <article>
                        <img src={catInfo.photo_url} alt="" />
                    </article>
                    <section>
                        <p>Name: {catInfo.name}</p>
                        <p>Breed: {catInfo.breed}</p>
                        <p>Microchip: {catInfo.microchip_id}</p>
                        <p>Passport ID: {catInfo.passport_id}</p>
                        <p>Added on: {catInfo.create_on}</p>
                    </section>
                </section>
            </section>
        </main>
    );
}
