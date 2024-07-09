/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vFYnR0P0Bbk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import UserConditionalLink from "./ConditionalLink";

const Links = () => (
    <>
        <UserConditionalLink
            falsyHref="/add-cat"
            falsyText="Add Cat"
            truthyHref="/my-cat"
            truthyText="My Cat"
            userConditionKey="has_uploaded_cat"
        />
        <Link className="hover:underline" href="/vote">
            Vote
        </Link>
        <Link className="hover:underline" href="/about">
            About
        </Link>
        <UserConditionalLink
            falsyHref="/register"
            falsyText="Register"
            truthyHref="/profile"
            truthyText="Profile"
        />
        <UserConditionalLink
            falsyHref="/login"
            falsyText="Log In"
            truthyHref="/"
            truthyText="Log Out"
        />
    </>
);

export default function Component() {
    return (
        <header className="bg-[rgb(30,64,175)] text-white px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
            <Link className="flex items-center gap-2" href="/">
                <span className="text-lg font-semibold">Cat Of The Week</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Links />
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        className="md:hidden text-[rgb(30,64,175)]"
                        size="icon"
                        variant="outline"
                    >
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-4 p-4">
                        <Links />
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
