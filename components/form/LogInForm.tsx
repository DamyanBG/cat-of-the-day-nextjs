import { useFormikContext } from "formik";

import { FormProps } from "@/types/components";
import { UserLogIn } from "@/types/user";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LogInForm = ({ isSubmitting }: FormProps) => {
    const { values, handleChange, handleSubmit } =
        useFormikContext<UserLogIn>();

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
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
            <Button className="w-full" type="submit" disabled={isSubmitting}>
                Log In
            </Button>
        </form>
    );
};

export default LogInForm;
