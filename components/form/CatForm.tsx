/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OYpllki8ARH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormikContext } from "formik";
import { AddCatValues } from "@/types/cat";
import { FormProps } from "@/types/components";

export default function CatForm({ isSubmitting }: FormProps) {
    const { values, handleChange, handleSubmit } = useFormikContext<AddCatValues>();

    return (
        <div className="flex flex-col items-start justify-start gap-6 rounded-lg border border-[#93c5fd] bg-[#eff6ff] p-6 shadow-sm dark:border-[#1e40af] dark:bg-[#1e40af]/10">
            <h2 className="text-xl font-semibold text-[#1e40af]">
                Cat Information
            </h2>
            <form className="grid w-full gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter your cat's name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="color">Color</Label>
                        <Input
                            id="color"
                            placeholder="Enter your cat's color"
                            name="color"
                            value={values.color}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="breed">Breed</Label>
                        <Input
                            id="breed"
                            placeholder="Enter your cat's breed"
                            name="breed"
                            value={values.breed}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="birthdate">Birth Date</Label>
                        <Input
                            id="birthdate"
                            type="date"
                            name="birth_date"
                            value={values.birth_date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="microchip">Microchip Number</Label>
                    <Input
                        id="microchip"
                        placeholder="Enter your cat's microchip number"
                        name="microchip"
                        value={values.microchip}
                        onChange={handleChange}
                    />
                </div>
                <Button
                    className="mt-4 w-full bg-[#1e40af] text-white hover:bg-[#1d4ed8] focus:ring-[#93c5fd]"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
