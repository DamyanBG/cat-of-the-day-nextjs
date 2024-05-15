import axios, { AxiosResponse } from "axios";

import { HOST_URL } from "@/utils/urls";
import { UserLogIn, UserPost, UserResponse } from "@/types/user";

export const postUser = async (
    user: UserPost
): Promise<AxiosResponse<UserResponse>> => {
    try {
        const response = await axios.post(`${HOST_URL}/user/register`, user);
        return response;
    } catch (error) {
        throw error;
    }
};

export const postLogInUser = async (
    logInBody: UserLogIn
): Promise<AxiosResponse<UserResponse>> => {
    try {
        const response = await axios.post(
            `${HOST_URL}/user/login`,
            logInBody
        );
        return response;
    } catch (error) {
        throw error;
    }
};
