/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CanUflEQH1k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function About() {
  return (
    <main className="px-4 py-12 md:px-6 lg:py-16 bg-[#f0f8ff] dark:bg-[#1e293b] min-h-[77vh]">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#4169e1] dark:text-[#add8e6]">
            About Cat of the Week
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Welcome to the "Cat of the Week" project! This is a community-driven initiative that celebrates the unique
            and adorable felines in our lives. Our goal is to showcase the beauty, personality, and individuality of
            cats through weekly photo submissions from our participants.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            By participating, you'll have the chance to share your beloved cat with the world and potentially see them
            featured as the "Cat of the Week." This is a fun and engaging way to connect with other cat lovers, while
            also highlighting the special qualities of our feline friends.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#4169e1] dark:text-[#add8e6]">Rules</h2>
          <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-start">
              <div className="mr-3 flex-shrink-0">
                <CatIcon className="h-5 w-5 text-[#4169e1] dark:text-[#add8e6]" />
              </div>
              <div>Cats must be photographed in their natural habitat</div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex-shrink-0">
                <CatIcon className="h-5 w-5 text-[#4169e1] dark:text-[#add8e6]" />
              </div>
              <div>Photos should be taken within the current week</div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex-shrink-0">
                <CatIcon className="h-5 w-5 text-[#4169e1] dark:text-[#add8e6]" />
              </div>
              <div>Only one cat per submission</div>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex-shrink-0">
                <CatIcon className="h-5 w-5 text-[#4169e1] dark:text-[#add8e6]" />
              </div>
              <div>Submissions must include the cat's name and a brief description</div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

function CatIcon(props) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}