import { GetCatForVoteResponse } from "@/types/api/responses";
import { CatVote } from "@/types/data/cat";
import { HOST_URL } from "@/utils/urls";
import axios from "axios";

export const getCatForVote = async (token: string | undefined) => {
    const response = await axios.get<GetCatForVoteResponse>(`${HOST_URL}/vote`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const { data } = response;
    return data;
};


export const postVote = async (token: string | undefined, voteInfo: CatVote) => {
    const response = await axios.post(`${HOST_URL}/vote`, voteInfo, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response)
}