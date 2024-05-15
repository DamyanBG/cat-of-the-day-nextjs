export type UserPost = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export type UserRegister = UserPost & {
    confirmPassword: string;
}

export type UserResponse = UserPost & {
    token: string;
    id: string;
}