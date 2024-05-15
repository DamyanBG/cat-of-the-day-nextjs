import axios, { AxiosResponse } from "axios";

import { HOST_URL } from "@/utils/urls";
import defaultCatPhoto from "@/public/images/default-cat.jpg"
import { CatPostBodyValues, CatResponseValues } from "@/types/cat";

type CatOfTheWeekResponse = {
    cat_of_the_day: string
}

export const getCatOfTheWeek = async (): Promise<string> => {
    let photoUrl: string
    try {
        const response: AxiosResponse<CatOfTheWeekResponse> = await axios.get(`${HOST_URL}/cat-of-the-week-photo`)
        photoUrl = response.data.cat_of_the_day
    } catch (error) {
        photoUrl = defaultCatPhoto.src
    }
    return photoUrl
}

export const postCat = async (catPostBody: CatPostBodyValues, token: string | undefined): Promise<AxiosResponse<CatResponseValues>> => {
    try {
        const response = await axios.post(
            `${HOST_URL}/user/login`,
            catPostBody, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response
    } catch (error) {
        throw error
    }
}