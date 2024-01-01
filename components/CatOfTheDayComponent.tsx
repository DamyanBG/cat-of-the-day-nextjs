"use client";

import { useState, useEffect } from "react";

import { HOST_URL } from "@/utils/urls";
import DefaultCatPhoto from "@/public/images/default-cat-of-the-week.jpg"

const CatOfTheWeekComponent = () => {
    const [photoUrl, setPhotoUrl] = useState();

    const getCatOfTheDayPhoto = () => {
        fetch(`${HOST_URL}/cat-of-the-day-photo`)
            .then((resp) => resp.json())
            .then((json) => {
                const newPhotoUrl = json.message ? DefaultCatPhoto.src : json
                setPhotoUrl(newPhotoUrl)
            });
    };

    useEffect(getCatOfTheDayPhoto, []);

    return (
        
        <img src={photoUrl} alt="Cat of the week!" />

        // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg" alt="Cat of the day!" />
    );
};

export default CatOfTheWeekComponent;
