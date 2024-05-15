"use client";

import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "@/context/UserProvider";
import { UserConditionalLinkProps } from "@/types/components";

const UserConditionalLink = ({
    falsyHref,
    falsyText,
    truthyHref,
    truthyText,
}: UserConditionalLinkProps) => {
    const { user } = useContext(UserContext);

    const linkHref = user.token 
        ? truthyHref 
        : falsyHref;

    const linkText = user.token 
        ? truthyText 
        : falsyText;

    return (
        <Link className="hover:underline" href={linkHref}>
            {linkText}
        </Link>
    );
};

export default UserConditionalLink;
