/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6yw5gEoAeov
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
    return (
        <main className="container mx-auto my-12 px-4 md:px-6">
            <div className="mx-auto max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Create an account to get started with Cat of the Day.
                    </p>
                </div>
                <div className="rounded-lg border border-[#1e40af] bg-[#f1f5f9] p-6 shadow-lg dark:border-[#1e40af] dark:bg-[#0f172a]">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input
                                    id="first-name"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input
                                    id="last-name"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="example@email.com"
                                required
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirm-password"
                                required
                                type="password"
                            />
                        </div>
                        <div className="flex items-start space-x-2">
                            <Checkbox id="terms" />
                            <Label
                                className="text-sm text-gray-500 dark:text-gray-400"
                                htmlFor="terms"
                            >
                                By clicking Register, you agree to our
                                <Link
                                    className="font-medium text-[#1e40af] hover:underline"
                                    href="#"
                                >
                                    Terms and Conditions
                                </Link>
                            </Label>
                        </div>
                        <Button className="w-full" type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}

function CatIcon(props) {
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
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
            <path d="M8 14v.5" />
            <path d="M16 14v.5" />
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
        </svg>
    );
}
