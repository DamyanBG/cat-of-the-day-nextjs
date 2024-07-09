/**
 * v0 by Vercel.
 * @see https://v0.dev/t/usUGdEQPysn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { MyCatProps } from "@/types/components"

export default function MyCatComponent({
  myCat
}: MyCatProps) {
  return (
    <main className="bg-[#eff6ff] dark:bg-[#2c3e50] py-8 md:py-12 min-h-[77vh]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={myCat.image_url}
              alt="Cat"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-[#1e40af] dark:text-[#b3c5e0]">
                  <PawPrintIcon className="w-5 h-5 fill-[#93c5fd]" />
                  <h2 className="text-2xl font-semibold">{myCat.name}</h2>
                </div>
                <div className="flex items-center gap-2 text-[#6b7280]">
                  <CatIcon className="w-5 h-5 fill-[#93c5fd]" />
                  <span>{myCat.breed}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-2 text-[#6b7280]">
                <CalendarIcon className="w-5 h-5 fill-[#93c5fd]" />
                <span>Birth Date: {myCat.bithDate}</span>
              </div>
              <div className="flex items-center gap-2 text-[#6b7280]">
                <PinIcon className="w-5 h-5 fill-[#93c5fd]" />
                <span>Microchip: {myCat.microchip}</span>
              </div>
              <div className="flex items-center gap-2 text-[#6b7280]">
                <EyeIcon className="w-5 h-5 fill-[#93c5fd]" />
                <span>Votes: {myCat.votes}</span>
              </div>
              <div className="flex items-center gap-2 text-[#6b7280]">
                <CodeIcon className="w-5 h-5 fill-[#93c5fd]" />
                <span>Color: {myCat.color}</span>
              </div>
              <Button variant="outline" className="w-fit bg-[#1e40af] text-white hover:bg-[#1e3a8a]">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
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


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function PawPrintIcon(props) {
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
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}


function PinIcon(props) {
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
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}