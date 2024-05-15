/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6yw5gEoAeov
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { useFormikContext } from "formik";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { UserRegister } from "@/types/user";
import { FormProps } from "@/types/components";

export default function RegisterForm({ isSubmitting }: FormProps) {
    const { values, handleChange, handleSubmit } = useFormikContext<UserRegister>();

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                        id="first-name"
                        name="first_name"
                        placeholder="John"
                        onChange={handleChange}
                        value={values.first_name}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                        id="last-name"
                        name="last_name"
                        placeholder="Doe"
                        onChange={handleChange}
                        value={values.last_name}
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="example@email.com"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    required
                />
            </div>
            <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <Label
                    className="text-sm text-gray-500 dark:text-gray-400"
                    htmlFor="terms"
                >
                    By clicking Register, you agree to our{" "}
                    <Link
                        className="font-medium text-[#1e40af] hover:underline"
                        href="#"
                    >
                        Terms and Conditions
                    </Link>
                </Label>
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
                Register
            </Button>
        </form>
    );
}
