"use client"

import { useContext, useEffect, useState } from "react";

import MyCatComponent from "@/components/MyCatComponent";
import { UserContext } from "@/context/UserProvider";
import { getMyCat } from "@/api/catApi";
import { MyCatType } from "@/types/cat";

const initialCatState: MyCatType = {
    image_url: "",
    name: "",
    breed: "",
    bithDate: "",
    microchip: 0,
    votes: 0,
    color: "",
}

export default function MyCat() {
    const { user } = useContext(UserContext)
    const [myCat, setMyCat] = useState<MyCatType>(initialCatState)

    useEffect(() => {
        if (!user.token) return
        const loadMyCat = async () => {
            const loadedCat = await getMyCat(user.token)
            setMyCat(loadedCat)
        }

        loadMyCat()

    }, [user.token])

    return (
        <MyCatComponent myCat={myCat} />
    )
}