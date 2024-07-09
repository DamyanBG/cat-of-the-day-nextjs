import axios, { AxiosResponse } from "axios";

import { HOST_URL } from "@/utils/urls";
import defaultCatPhoto from "@/public/images/default-cat.jpg";
import {
    CatPostBodyValues,
    CatResponseValues,
    CatVote,
    GetCatVoteResponse,
} from "@/types/cat";

type CatOfTheWeekResponse = {
    cat_of_the_day: string;
    image_url: string;
};

export const getCatOfTheWeek = async (): Promise<string> => {
    let photoUrl: string;
    try {
        const response: AxiosResponse<CatOfTheWeekResponse> = await axios.get(
            `${HOST_URL}/cats/cat-of-the-week`
        );
        photoUrl = response.data.image_url;
    } catch (error) {
        photoUrl = defaultCatPhoto.src;
    }
    return photoUrl;
};

export const postCat = async (
    catPostBody: CatPostBodyValues,
    token: string | undefined
): Promise<AxiosResponse<CatResponseValues>> => {
    try {
        const response = await axios.post(`${HOST_URL}/cats/create`, catPostBody, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const getCatForVote = async (token: string | undefined) => {
    const response: AxiosResponse<GetCatVoteResponse> = await axios.get(
        `${HOST_URL}/cats/cat-for-vote`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const { data } = response;
    console.log(data);
    return data;
};

export const postCatVote = async (
    voteInfo: CatVote,
    token: string | undefined
) => {
    const response = await axios.post(`${HOST_URL}/vote`, voteInfo, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response.data);
};
