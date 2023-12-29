"use client";

import { UserContext } from "@/context/UserProvider";
import Link from "next/link";
import { useContext } from "react";

const UserAuthenticatedNav = () => (
    <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/logout">Log Out</Link>
    </nav>
);

const UserNotAuthenticatedNav = () => (
    <nav>
        <Link href="/register">Register</Link>
        <Link href="/login">Log In</Link>
    </nav>
);

const AuthNav = () => {
    const { user } = useContext(UserContext);
    const isUserAuthenticated = !!user.token;

    return isUserAuthenticated ? (
        <UserAuthenticatedNav />
    ) : (
        <UserNotAuthenticatedNav />
    );
};

export default AuthNav;
