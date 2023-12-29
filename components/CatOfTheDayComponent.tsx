"use client";

import { useState, useEffect } from "react";

import { HOST_URL } from "@/utils/urls";

const CatOfTheDayComponent = () => {
    const [photoUrl, setPhotoUrl] = useState();

    const getCatOfTheDayPhoto = () => {
        fetch(`${HOST_URL}/cat-of-the-day-photo`)
            .then((resp) => resp.json())
            .then((json) => setPhotoUrl(json));
    };

    useEffect(getCatOfTheDayPhoto, []);

    return (
        <article>
            <h2>Cat of the day!</h2>
            <article className="image-container"><img src={photoUrl} alt="Cat of the day!" /></article>
        </article>
    );
};

export default CatOfTheDayComponent;
