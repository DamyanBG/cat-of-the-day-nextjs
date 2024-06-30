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
    id: number;
    photo_url: string;
};

export interface GetCatVoteResponse extends CatForVote {
    message?: string;
}

export type CatVote = {
    id: number;
    vote: Vote;
};

export enum VoteEnum {
    Like = "like",
    Dislike = "dislike",
    Pass = "pass",
}

export type Vote = VoteEnum.Like | VoteEnum.Pass | VoteEnum.Dislike;
