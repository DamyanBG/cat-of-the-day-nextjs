import axios from "axios"

import { HOST_URL } from "@/utils/urls"
import DefaultCatPhoto from "@/public/images/default-cat-of-the-week.jpg"
import { GetCatOfTheDayResponse } from "@/types/api/responses"

export const getCatOfTheDay = async () => {
    let photoUrl
    try {
        const response = await axios.get<GetCatOfTheDayResponse>(`${HOST_URL}/cat-of-the-day-photo`)
        photoUrl = response.data.cat_of_the_day
    } catch (error) {
        photoUrl = DefaultCatPhoto.src
    }
    return photoUrl
}