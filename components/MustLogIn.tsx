/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BueKDwrGR8c
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

import { MustLogInProps } from "@/types/components"

export default function MustLogIn({ title, text }: MustLogInProps) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-[rgb(30,144,255)]">{title}</h1>
        <p className="mt-4 text-lg text-[rgb(30,144,255)]/80">{text}</p>
        <Link
          className="mt-6 inline-flex items-center rounded-md bg-[rgb(30,144,255)] px-6 py-3 text-white transition-colors hover:bg-[rgb(0,90,140)] focus:outline-none focus:ring-2 focus:ring-[rgb(30,144,255)] focus:ring-offset-2"
          href="/login"
        >
          Log In
        </Link>
      </div>
    </section>
  )
}