"use client"

import React, { useContext } from "react";
import Link from "next/link";

import { UserContext } from "@/context/UserProvider";
import { CatExistsContext } from "@/context/CatExistProvider";

const Header = () => {
  const { user } = useContext(UserContext);
  const { catExists } = useContext(CatExistsContext)

  return (
    <header>
      <article className="site-name">
        <Link href="/">Cat of the day</Link>
      </article>
      <nav>
        <Link href="/vote">Vote</Link>
        <Link href="/upload-cat">Upload cat</Link>
        <Link href="/rules">Rules</Link>
      </nav>
      <nav>
        <Link href="/register">Register</Link>
      </nav>

    </header>
  );
};

export default Header;
