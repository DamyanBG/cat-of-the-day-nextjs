import { Vote } from "./data/cat";

export interface VoteButtonsProps {
    areDisabled: boolean,
    handleOnPostVote: (vote: Vote) => Promise<void>
}