"use client"

import { MouseEventHandler, useState } from "react";

import { VoteButtonsProps } from "@/types/components";
import { VoteEnum } from "@/types/data/cat";

const VoteButtons = ({ areDisabled, handleOnPostVote }: VoteButtonsProps) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const buttonClassName = isHover ? "hover-btn-effect" : ""

    const handleOnLike: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Like);
    };

    const handleOnDislike: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Dislike);
    };

    const handleOnPass: MouseEventHandler = () => {
        handleOnPostVote(VoteEnum.Pass);
    };

    const handleOnHoverStart = () => {
        setIsHover(true)
    }

    const handleOnHoverOut = () => {
        setIsHover(false)
    }

    return (
        <article className="vote-buttons-container">
            <center>
                <button
                    type="button"
                    className={buttonClassName}
                    disabled={areDisabled}
                    onClick={handleOnLike}
                    onMouseEnter={handleOnHoverStart}
                    onMouseLeave={handleOnHoverOut}
                >
                    Like
                </button>
                <button
                    type="button"
                    className={buttonClassName}
                    disabled={areDisabled}
                    onClick={handleOnPass}
                    onMouseEnter={handleOnHoverStart}
                    onMouseLeave={handleOnHoverOut}
                >
                    Pass
                </button>
                <button
                    type="button"
                    className={buttonClassName}
                    disabled={areDisabled}
                    onClick={handleOnDislike}
                    onMouseEnter={handleOnHoverStart}
                    onMouseLeave={handleOnHoverOut}
                >
                    Dislike
                </button>
            </center>
        </article>
    );
};

export default VoteButtons;
