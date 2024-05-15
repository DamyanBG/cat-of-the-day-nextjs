import { CatFormWrapperProps } from "@/types/components";

const CatFormWrapper = ({ photoSectionEl, formEl }: CatFormWrapperProps) => (
    <main className="flex flex-col items-center justify-center gap-8 px-4 py-8 md:px-6 lg:py-12">
        <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-[#1e40af] sm:text-4xl md:text-5xl">
                Add Your Cat
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-xl">
                Upload a photo and fill out the form to add your cat to our
                database.
            </p>
        </header>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {photoSectionEl}
            {formEl}
        </div>
    </main>
);

export default CatFormWrapper;
