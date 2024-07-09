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
    userConditionKey = "token",
}: UserConditionalLinkProps) => {
    const { user, setUser } = useContext(UserContext);

    const linkHref = user[userConditionKey]
        ? truthyHref 
        : falsyHref;

    const linkText = user[userConditionKey]
        ? truthyText 
        : falsyText;

    const handleLogOut = () => {
        if (truthyText === "Log Out") {
            setUser({})
            localStorage.removeItem("user")
        }
    }

    return (
        <Link className="hover:underline" href={linkHref} onClick={handleLogOut}>
            {linkText}
        </Link>
    );
};

export default UserConditionalLink;
