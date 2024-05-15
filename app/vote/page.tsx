"use client";

import { useContext, useEffect, useState } from "react";

import VoteSection from "@/components/VoteSection";
import { UserContext } from "@/context/UserProvider";
import { CatForVote } from "@/types/cat";

const initialState: CatForVote = {
    pk: 0,
    photo_url: "",
};

export default function Vote() {
    const { user } = useContext(UserContext);
    const [catForVote, setCatForVote] = useState<CatForVote>(initialState);

    const loadCatForVote = async () => {
        
    }

    useEffect(() => {
        if (user.token) {
            loadCatForVote();
        }
    }, [user.token]);

    return <VoteSection />;
}
