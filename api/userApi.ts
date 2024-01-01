import { HOST_URL } from "@/utils/urls"
import axios from "axios"

export const getSelfUserInfo = async (token: string | undefined) => {
    const response = await axios.get(`${HOST_URL}/user-info`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const userInfo = response.data
    return userInfo
}