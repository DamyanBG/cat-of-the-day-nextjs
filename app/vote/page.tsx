"use client";

import { useContext, useEffect, useState } from "react";

import VoteSection from "@/components/VoteSection";
import { UserContext } from "@/context/UserProvider";
import { CatForVote } from "@/types/cat";
import { getCatForVote } from "@/api/catApi";

const initialState: CatForVote = {
    pk: 0,
    photo_url: "",
};

export default function Vote() {
    const { user } = useContext(UserContext);
    const [catForVote, setCatForVote] = useState<CatForVote>(initialState);
    const [areNoMoreCats, setAreNoMoreCats] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadCatForVote = async () => {
        const data = await getCatForVote(user.token)
        if (data.message) {
            setAreNoMoreCats(true);
            return;
        }
        setCatForVote(data);
    }

    useEffect(() => {
        if (user.token) {
            loadCatForVote();
        }
    }, [user.token]);

    const handleOnPostVote = async (vote: Vote) => {
        setIsLoading(true);
        const voteBody: CatVoteBody = {
            pk: catForVote.pk,
            vote: vote,
        };
        await postVote(user.token, voteBody);
        await loadCatForVote();
        setIsLoading(false);
    };

    return <VoteSection />;
}
