/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OYpllki8ARH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CatForm() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 px-4 py-8 md:px-6 lg:py-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-[#1e40af] sm:text-4xl md:text-5xl">Add Your Cat</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-xl">
          Upload a photo and fill out the form to add your cat to our database.
        </p>
      </header>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-[#93c5fd] bg-[#eff6ff] p-6 shadow-sm dark:border-[#1e40af] dark:bg-[#1e40af]/10">
          <h2 className="text-xl font-semibold text-[#1e40af]">Upload Photo</h2>
          <div className="flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#93c5fd] p-6 text-gray-500 dark:border-[#1e40af] dark:text-gray-400">
            <CloudUploadIcon className="h-12 w-12" />
            <p>Drag and drop your cat's photo here, or click to select a file.</p>
            <input className="hidden" type="file" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 rounded-lg border border-[#93c5fd] bg-[#eff6ff] p-6 shadow-sm dark:border-[#1e40af] dark:bg-[#1e40af]/10">
          <h2 className="text-xl font-semibold text-[#1e40af]">Cat Information</h2>
          <form className="grid w-full gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your cat's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Enter your cat's color" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="breed">Breed</Label>
                <Input id="breed" placeholder="Enter your cat's breed" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Birth Date</Label>
                <Input id="birthdate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="microchip">Microchip Number</Label>
              <Input id="microchip" placeholder="Enter your cat's microchip number" />
            </div>
            <Button
              className="mt-4 w-full bg-[#1e40af] text-white hover:bg-[#1d4ed8] focus:ring-[#93c5fd]"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
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
  )
}