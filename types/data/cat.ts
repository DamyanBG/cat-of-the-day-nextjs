export type CatForVote = {
    pk: number;
    photo_url: string;
};

export type CatVote = {
    pk: number;
    vote: Vote;
};

export enum VoteEnum {
    Like = "like",
    Dislike = "dislike",
    Pass = "pass",
}

export type Vote = VoteEnum.Like | VoteEnum.Pass | VoteEnum.Dislike;

export interface CatInfo {
    name: string;
    passport_id: string;
    microchip_id: string;
    photo: string;
    breed: string;
}
