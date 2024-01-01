import { CatForVote } from "../data/cat";

export interface GetCatForVoteResponse extends CatForVote {
    message?: string
}

export type GetCatOfTheDayResponse = {
    cat_of_the_day: string,
    message?: string
}