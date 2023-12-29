"use client"

import Link from "next/link";
import { useContext } from "react";

import { CatExistsContext } from "@/context/CatExistProvider";

const PageNav = () => {
    const { catExists } = useContext(CatExistsContext)

    return (
        <nav>
            <Link href="/vote">Vote</Link>
            {catExists ? (
                <Link href="/cat-review">Review your cat</Link>
            ): (
                <Link href="/upload-cat">Upload cat</Link>
            )}
            <Link href="/rules">Rules</Link>
        </nav>
    );
};

export default PageNav;
