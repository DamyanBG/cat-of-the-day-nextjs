import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-[#f3f4f6] py-12 dark:bg-[#1f2937]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <img
                            alt="Cat of the Week"
                            className="mx-auto rounded-lg shadow-lg"
                            height={400}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "cover",
                            }}
                            width={600}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <h1 className="text-3xl font-bold text-[#1f2937] dark:text-white">
                            Welcome to Cat Of The Week!
                        </h1>
                        <p className="text-lg text-[#4b5563] dark:text-[#9ca3af]">
                            Discover the cutest cat of the week and vote for
                            your favorite.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                className="inline-flex items-center rounded-md bg-[#1e40af] px-4 py-2 text-white hover:bg-[#1c4ab8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:bg-[#f3f4f6] dark:text-[#1f2937] dark:hover:bg-[#e5e7eb] dark:focus:ring-[#6b7280] dark:focus:ring-offset-[#1f2937]"
                                href="#"
                            >
                                Vote Now
                            </Link>
                            <Link
                                className="inline-flex items-center rounded-md border border-[#d1d5db] bg-white px-4 py-2 text-[#1f2937] hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:border-[#4b5563] dark:bg-[#1f2937] dark:text-[#f3f4f6] dark:hover:bg-[#374151] dark:focus:ring-[#6b7280]"
                                href="#"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
