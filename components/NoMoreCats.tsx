/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KewR3Dd4dVH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function NoMoreCats() {
  return (
    <section className="bg-white text-[rgb(30,144,255)] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">No More Cats Available</h2>
          <p className="text-lg md:text-xl">
            Thank you for your interest in our Cats of the Week program. Unfortunately, we have no more cats available
            for voting at this time. However, you can review the past Cats of the Week and learn more about our furry
            friends.
          </p>
          <Link
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[rgb(30,144,255)] text-white font-medium transition-colors hover:bg-[rgb(65,105,225)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgb(30,144,255)]"
            href="#"
          >
            View Past Cats
          </Link>
        </div>
      </div>
    </section>
  )
}