/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wezrfNLd8RK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-[#1e40af] px-4 py-3 text-white shadow-md sm:px-6 lg:px-8">
            <Link className="text-lg font-bold" href="#">
                Cat Of The Week
            </Link>
            <nav className="flex items-center space-x-4">
                <Link className="hover:text-[#93c5fd]" href="#">
                    Vote
                </Link>
                <Link className="hover:text-[#93c5fd]" href="#">
                    Info
                </Link>
                <Link className="hover:text-[#93c5fd]" href="#">
                    Register
                </Link>
                <Link className="hover:text-[#93c5fd]" href="#">
                    Log In
                </Link>
            </nav>
        </header>
    );
}
