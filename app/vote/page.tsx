"use client";

import { useContext, useEffect, useState } from "react";

import VoteSection from "@/components/VoteSection";
import { UserContext } from "@/context/UserProvider";
import { CatForVote, CatVote, Vote } from "@/types/cat";
import { getCatForVote, postCatVote } from "@/api/catApi";
import NoMoreCats from "@/components/NoMoreCats";
import MustLogIn from "@/components/MustLogIn";

const initialState: CatForVote = {
    id: "",
    photo_url: "",
};

export default function VotePage() {
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

    const handleVote = async (vote: Vote) => {
        setIsLoading(true);
        const voteBody: CatVote = {
            cat_id: catForVote.id,
            vote: vote,
        };
        await postCatVote(voteBody, user.token,);
        await loadCatForVote();
        setIsLoading(false);
    };

    if (!user.token) {
        return <MustLogIn title="Vote" text="You must be logged in to vote for cats." />
    }

    if (areNoMoreCats) {
        return <NoMoreCats />
    }

    return <VoteSection catImgSrc={catForVote.photo_url} onVote={handleVote} />;
}
