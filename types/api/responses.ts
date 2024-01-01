import { CatForVote } from "../data/cat";

export type GetCatForVoteResponse = {
    cat_for_vote?: CatForVote,
    message?: string
}

export type GetCatOfTheDayResponse = {
    cat_of_the_day: string,
    message?: string
}