"use client"

import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "@/context/UserProvider";

const PageNav = () => {
    const { user } = useContext(UserContext)

    return (
        <nav>
            <Link href="/vote">Vote</Link>
            {user.has_uploaded_cat ? (
                <Link href="/cat-review">Review your cat</Link>
            ): (
                <Link href="/upload-cat">Upload cat</Link>
            )}
            <Link href="/rules">Rules</Link>
        </nav>
    );
};

export default PageNav;
