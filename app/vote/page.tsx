"use client";

import { MouseEventHandler, useContext, useEffect, useState } from "react";

import { getCatForVote, postVote } from "@/api/voteApi";
import { UserContext } from "@/context/UserProvider";
import {
    CatForVote,
    CatVote as CatVoteBody,
    Vote,
    VoteEnum,
} from "@/types/data/cat";
import NeedRegistration from "@/components/NeedRegistration";

const initialState: CatForVote = {
    pk: 0,
    photo_url: "",
};

export default function Vote() {
    const { user } = useContext(UserContext);
    const [catForVote, setCatForVote] = useState<CatForVote>(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getAndSetCatForVote = async () => {
        const gotCatForVote = await getCatForVote(user.token);
        setCatForVote(gotCatForVote);
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

    const handleOnLike: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Like);
    };

    const handleOnDislike: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Dislike);
    };

    const handleOnPass: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Pass);
    };

    if (!user.token) return <NeedRegistration />

    return (
        <main>
            <section className="vote-section">
                {catForVote.photo_url && (
                    <img src={catForVote.photo_url} alt="Cat for vote" />
                )}
                <article>
                    <center>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={handleOnLike}
                        >
                            Like
                        </button>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={handleOnPass}
                        >
                            Pass
                        </button>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={handleOnDislike}
                        >
                            Dislike
                        </button>
                    </center>
                </article>
            </section>
        </main>
    );
}
