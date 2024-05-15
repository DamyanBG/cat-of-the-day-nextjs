import axios, { AxiosResponse } from "axios";

import { HOST_URL } from "@/utils/urls";
import defaultCatPhoto from "@/public/images/default-cat.jpg"

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
