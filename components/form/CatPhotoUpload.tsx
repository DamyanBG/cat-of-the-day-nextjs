import { useRef } from "react";

import { CatPhotoUploadProps } from "@/types/components";

export default function CatPhotoUpload({ onUpload }: CatPhotoUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onUpload(file);
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(e)
        const file = e.dataTransfer.files[0];
        onUpload(file)
    };

    const handleDragEnter = (e) => {
        // console.log(e)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className="flex flex-col items-center justify-center gap-4 rounded-lg border border-[#93c5fd] bg-[#eff6ff] p-6 shadow-sm dark:border-[#1e40af] dark:bg-[#1e40af]/10 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onClick={handleUploadClick}
            onDragOver={handleDragOver}
        >
            <h2 className="text-xl font-semibold text-[#1e40af]">
                Upload Photo
            </h2>
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#93c5fd] p-6 text-gray-500 dark:border-[#1e40af] dark:text-gray-400">
                <CloudUploadIcon className="h-12 w-12" />
                <p>
                    Drag and drop your cat's photo here, or click to select a
                    file.
                </p>
                <input ref={fileInputRef} className="hidden" type="file" onChange={handleFileChange} />
            </div>
        </div>
    );
}

function CloudUploadIcon(props) {
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
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
        </svg>
    );
}
