"use client";

import { useContext, useEffect, useRef, useState } from "react";

import { getCatForVote, postVote } from "@/api/voteApi";
import { UserContext } from "@/context/UserProvider";
// Refactor these types
import {
    CatForVote,
    CatVote as CatVoteBody,
    Vote,
} from "@/types/data/cat";
import NeedRegistration from "@/components/NeedRegistration";
import NoMoreCats from "@/components/NoMoreCats";
import VoteButtons from "@/components/VoteButtons";

const initialState: CatForVote = {
    pk: 0,
    photo_url: "",
};

export default function Vote() {
    const { user } = useContext(UserContext);
    const [catForVote, setCatForVote] = useState<CatForVote>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [areNoMoreCats, setAreNoMoreCats] = useState<boolean>(false)
    const catPhotoRef = useRef<HTMLImageElement | null>(null)

    const getAndSetCatForVote = async () => {
        const data = await getCatForVote(user.token);
        if (data.message) {
            setAreNoMoreCats(true)
            return
        }
        setCatForVote(data);
        catPhotoRef?.current?.scrollIntoView()
    };

    useEffect(() => {
        if (user.token) {
            getAndSetCatForVote();
        }
    }, [user.token]);

    const handleOnPostVote = async (vote: Vote) => {
        setIsLoading(true);
        const voteBody: CatVoteBody = {
            pk: catForVote.pk,
            vote: vote,
        };
        await postVote(user.token, voteBody);
        await getAndSetCatForVote();
        setIsLoading(false);
    };

    if (!user.token) return <NeedRegistration />

    if (areNoMoreCats) return <NoMoreCats />

    return (
        <main>
            <section className="vote-section">
                {catForVote.photo_url && (
                    <img ref={catPhotoRef} src={catForVote.photo_url} alt="Cat for vote" />
                )}
                <VoteButtons areDisabled={isLoading} handleOnPostVote={handleOnPostVote} />
            </section>
        </main>
    );
}
