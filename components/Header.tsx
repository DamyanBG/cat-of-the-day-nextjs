'use client'

import Link from "next/link";

import AuthNav from "./AuthNav";
import PageNav from "./PageNav";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const navClassName = isActive ? "active" : ""

  const handleHamburgerClick = () => {
    setIsActive(!isActive)
  }

  const handleCloseMenu = () => {
    setIsActive(false)
  }

  return (
    <header>
      <article className="site-name">
        <Link href="/">Cat of the week</Link>
      </article>
      <article className="hamburger" onClick={handleHamburgerClick}>
          <article className="line" />
          <article className="line" />
          <article className="line" />
      </article>
      <section className={navClassName} onClick={handleCloseMenu}>
        <PageNav />
        <AuthNav />
      </section>
    </header>
  );
};

export default Header;
