import Link from "next/link";

import AuthNav from "./AuthNav";
import PageNav from "./PageNav";

const Header = () => {
  return (
    <header>
      <article className="site-name">
        <Link href="/">Cat of the day</Link>
      </article>
      <PageNav />
      <AuthNav />
    </header>
  );
};

export default Header;
