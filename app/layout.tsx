import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";

import { UserProvider } from "@/context/UserProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cat Of The Week",
    keywords: ["cat", "adorable", "voting", "win prize", "week", "the best", "pet"],
    robots: "index, follow",
    metadataBase: new URL("https://cat-of-the-week.fun"),
    verification: {
        google: "GLv5jLiTopLaD9tQEEGGf8RrcBO73YIPgBjLG0qJHWs"
    },
    description:
        "Vote for the most adorable and charming cat of the week in our Cat of the Week application! Celebrate feline beauty and personality by participating in weekly polls and supporting your favorite fluffy companions. Join us in the heartwarming journey of crowning the best cat, and let the cuteness overload begin!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4884280499405624" />
            <body className={inter.className}>
                <UserProvider>
                    <Header />
                    {children}
                    <Footer />
                </UserProvider>
            </body>
        </html>
    );
}
