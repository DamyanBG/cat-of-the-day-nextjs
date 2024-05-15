/**
 * v0 by Vercel.
 * @see https://v0.dev/t/33HOxCY3sj0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";
import { VoteEnum } from "@/types/cat";
import { VoteSectionProps } from "@/types/components";

export default function VoteSection({ catImgSrc, onVote }: VoteSectionProps) {
    const handleOnLike: MouseEventHandler = () => {
        onVote(VoteEnum.Like);
    };

    const handleOnDislike: MouseEventHandler = () => {
        onVote(VoteEnum.Dislike);
    };

    const handleOnPass: MouseEventHandler = () => {
        onVote(VoteEnum.Pass);
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-[#f0f8ff] dark:bg-[#1e90ff]">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#1e90ff] dark:text-gray-50">
                        Voting Page
                    </h1>
                    <p className="mt-2 text-[#6495ed] dark:text-gray-400">
                        Vote for your favorite cat by clicking the buttons below
                        the image.
                    </p>
                </div>
                <div className="bg-white dark:bg-[#4169e1] rounded-lg shadow-md overflow-hidden">
                    <img
                        alt="Cat of the Week"
                        className="w-full h-auto object-cover"
                        height="600"
                        src={catImgSrc}
                        style={{
                            aspectRatio: "800/600",
                            objectFit: "cover",
                        }}
                        width="800"
                    />
                    <div className="px-6 py-4 flex justify-center space-x-4">
                        <Button
                            className="flex-1 border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white"
                            variant="outline"
                            onClick={handleOnLike}
                        >
                            Like
                        </Button>
                        <Button
                            className="flex-1 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-white"
                            variant="outline"
                            onClick={handleOnPass}
                        >
                            Pass
                        </Button>
                        <Button
                            className="flex-1 border-[#ff6347] text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
                            variant="outline"
                            onClick={handleOnDislike}
                        >
                            Dislike
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
