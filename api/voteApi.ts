import { CatForVote, CatVote } from "@/types/data/cat";
import { HOST_URL } from "@/utils/urls";
import axios from "axios";

export const getCatForVote = async (token: string | undefined) => {
    const response = await axios.get<CatForVote>(`${HOST_URL}/vote`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const catForVote = response.data;
    console.log(catForVote);
    return catForVote;
};


export const postVote = async (token: string | undefined, voteInfo: CatVote) => {
    const response = await axios.post(`${HOST_URL}/vote`, voteInfo, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response)
}