import axios, { AxiosResponse } from "axios";

import { ImageInfoValues } from "@/types/imageTypes";
import { HOST_URL } from "@/utils/urls";

export const postImage = async (
    photoData: string,
    token: string | undefined
): Promise<AxiosResponse<ImageInfoValues>> => {
    const photoPostBody = {
        photo_base64: photoData,
    };
    try {
        const response = await axios.post(`${HOST_URL}/images/upload`, photoPostBody, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};
