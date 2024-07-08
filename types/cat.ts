export type AddCatValues = {
    name: string;
    color: string;
    breed: string;
    birth_date: string;
    microchip: string;
};

export type CatPostBodyValues = AddCatValues & {
    photo_id: string;
};

export type CatResponseValues = CatPostBodyValues & {
    id: string;
};

export type CatForVote = {
    id: string;
    photo_url: string;
};

export interface GetCatVoteResponse extends CatForVote {
    message?: string;
}

export type CatVote = {
    cat_id: string;
    vote: Vote;
};

export enum VoteEnum {
    Like = "like",
    Dislike = "dislike",
    Pass = "pass",
}

export type Vote = VoteEnum.Like | VoteEnum.Pass | VoteEnum.Dislike;
