import axios, { AxiosResponse } from 'axios';

import { HOST_URL } from '@/utils/urls';
import { UserPost, UserResponse } from '@/types/user';

export const postUser = async (user: UserPost): Promise<AxiosResponse<UserResponse>> => {
    try {
        const response = await axios.post(`${HOST_URL}`, user)
        return response
    } catch (error) {
        console.error('Error posting user:', error)
        throw error
    }
}
