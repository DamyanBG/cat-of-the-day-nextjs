/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fEef77TIGnw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"

export default function WinnersHistory() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold text-[rgb(30,144,255)] mb-2">Cat of The Week Winners</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore the history of cats that have won the prestigious 'Cat of The Week' award.
        </p>
      </header>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[rgb(30,144,255)]/10 text-[rgb(30,144,255)]">
              <th className="px-4 py-3 text-left font-medium">Cat</th>
              <th className="px-4 py-3 text-left font-medium">Date Won</th>
              <th className="px-4 py-3 text-left font-medium">Color</th>
              <th className="px-4 py-3 text-left font-medium">Breed</th>
              <th className="px-4 py-3 text-left font-medium">DOB</th>
              <th className="px-4 py-3 text-left font-medium">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
              <td className="px-4 py-3 flex items-center gap-4">
                <img
                  alt="Cat"
                  className="rounded-lg"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
                <div>
                  <h3 className="font-medium text-[rgb(30,144,255)]">Whiskers</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Maine Coon</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">May 1, 2023</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Black and White</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Maine Coon</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">January 1, 2020</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Male</td>
            </tr>
            <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
              <td className="px-4 py-3 flex items-center gap-4">
                <img
                  alt="Cat"
                  className="rounded-lg"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
                <div>
                  <h3 className="font-medium text-[rgb(30,144,255)]">Mittens</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Siamese</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">April 15, 2023</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Seal Point</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Siamese</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">June 1, 2018</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Female</td>
            </tr>
            <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
              <td className="px-4 py-3 flex items-center gap-4">
                <img
                  alt="Cat"
                  className="rounded-lg"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
                <div>
                  <h3 className="font-medium text-[rgb(30,144,255)]">Oreo</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Domestic Shorthair</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">March 30, 2023</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Black and White</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Domestic Shorthair</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">September 15, 2019</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Male</td>
            </tr>
            <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
              <td className="px-4 py-3 flex items-center gap-4">
                <img
                  alt="Cat"
                  className="rounded-lg"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
                <div>
                  <h3 className="font-medium text-[rgb(30,144,255)]">Luna</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Russian Blue</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">February 20, 2023</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Blue</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Russian Blue</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">November 1, 2017</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Female</td>
            </tr>
            <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
              <td className="px-4 py-3 flex items-center gap-4">
                <img
                  alt="Cat"
                  className="rounded-lg"
                  height={120}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                  }}
                  width={120}
                />
                <div>
                  <h3 className="font-medium text-[rgb(30,144,255)]">Simba</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Persian</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">January 10, 2023</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Orange</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Persian</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">April 5, 2016</td>
              <td className="px-4 py-3 text-gray-500 dark:text-gray-400">Male</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="text-[rgb(30,144,255)]" href="#">
                <ChevronLeftIcon className="w-4 h-4" />
              </PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-[rgb(30,144,255)]" href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-[rgb(30,144,255)]" href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-[rgb(30,144,255)]" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="text-[rgb(30,144,255)]" href="#">
                <ChevronRightIcon className="w-4 h-4" />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}



// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/359snlAt9L8
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { PaginationPrevious, PaginationItem, PaginationLink, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"

// export default function Component() {
//   return (
//     <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
//       <header className="mb-8 md:mb-12">
//         <h1 className="text-3xl font-bold text-[rgb(30,144,255)] mb-2">Cat of The Week Winners</h1>
//         <p className="text-gray-500 dark:text-gray-400">
//           Explore the history of cats that have won the prestigious 'Cat of The Week' award.
//         </p>
//       </header>
//       <div className="border rounded-lg overflow-hidden">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-[rgb(30,144,255)]/10 text-[rgb(30,144,255)]">
//               <th className="px-4 py-3 text-left font-medium">Cat</th>
//               <th className="px-4 py-3 text-left font-medium">
//                 Date Won
//                 <CalendarDaysIcon className="h-4 w-4 ml-2" />
//               </th>
//               <th className="px-4 py-3 text-left font-medium">
//                 Color
//                 <PaletteIcon className="h-4 w-4 ml-2" />
//               </th>
//               <th className="px-4 py-3 text-left font-medium">
//                 Breed
//                 <PawPrintIcon className="h-4 w-4 ml-2" />
//               </th>
//               <th className="px-4 py-3 text-left font-medium">
//                 DOB
//                 <CalendarDaysIcon className="h-4 w-4 ml-2" />
//               </th>
//               <th className="px-4 py-3 text-left font-medium">
//                 Gender
//                 <UserIcon className="h-4 w-4 ml-2" />
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
//               <td className="px-4 py-3 flex items-center gap-4">
//                 <img
//                   alt="Cat"
//                   className="rounded-lg"
//                   height={120}
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "120/120",
//                     objectFit: "cover",
//                   }}
//                   width={120}
//                 />
//                 <div>
//                   <h3 className="font-medium text-[rgb(30,144,255)]">Whiskers</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Maine Coon</p>
//                 </div>
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 May 1, 2023
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PaletteIcon className="h-4 w-4" />
//                 Black and White
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PawPrintIcon className="h-4 w-4" />
//                 Maine Coon
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 January 1, 2020
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <UserIcon className="h-4 w-4" />
//                 Male
//               </td>
//             </tr>
//             <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
//               <td className="px-4 py-3 flex items-center gap-4">
//                 <img
//                   alt="Cat"
//                   className="rounded-lg"
//                   height={120}
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "120/120",
//                     objectFit: "cover",
//                   }}
//                   width={120}
//                 />
//                 <div>
//                   <h3 className="font-medium text-[rgb(30,144,255)]">Mittens</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Siamese</p>
//                 </div>
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 April 15, 2023
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PaletteIcon className="h-4 w-4" />
//                 Seal Point
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PawPrintIcon className="h-4 w-4" />
//                 Siamese
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 June 1, 2018
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <UserIcon className="h-4 w-4" />
//                 Female
//               </td>
//             </tr>
//             <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
//               <td className="px-4 py-3 flex items-center gap-4">
//                 <img
//                   alt="Cat"
//                   className="rounded-lg"
//                   height={120}
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "120/120",
//                     objectFit: "cover",
//                   }}
//                   width={120}
//                 />
//                 <div>
//                   <h3 className="font-medium text-[rgb(30,144,255)]">Oreo</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Domestic Shorthair</p>
//                 </div>
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 March 30, 2023
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PaletteIcon className="h-4 w-4" />
//                 Black and White
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PawPrintIcon className="h-4 w-4" />
//                 Domestic Shorthair
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 September 15, 2019
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <UserIcon className="h-4 w-4" />
//                 Male
//               </td>
//             </tr>
//             <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
//               <td className="px-4 py-3 flex items-center gap-4">
//                 <img
//                   alt="Cat"
//                   className="rounded-lg"
//                   height={120}
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "120/120",
//                     objectFit: "cover",
//                   }}
//                   width={120}
//                 />
//                 <div>
//                   <h3 className="font-medium text-[rgb(30,144,255)]">Luna</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Russian Blue</p>
//                 </div>
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 February 20, 2023
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PaletteIcon className="h-4 w-4" />
//                 Blue
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PawPrintIcon className="h-4 w-4" />
//                 Russian Blue
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 November 1, 2017
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <UserIcon className="h-4 w-4" />
//                 Female
//               </td>
//             </tr>
//             <tr className="border-b hover:bg-[rgb(30,144,255)]/5 transition-colors">
//               <td className="px-4 py-3 flex items-center gap-4">
//                 <img
//                   alt="Cat"
//                   className="rounded-lg"
//                   height={120}
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "120/120",
//                     objectFit: "cover",
//                   }}
//                   width={120}
//                 />
//                 <div>
//                   <h3 className="font-medium text-[rgb(30,144,255)]">Simba</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Persian</p>
//                 </div>
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 January 10, 2023
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PaletteIcon className="h-4 w-4" />
//                 Orange
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <PawPrintIcon className="h-4 w-4" />
//                 Persian
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <CalendarDaysIcon className="h-4 w-4" />
//                 April 5, 2016
//               </td>
//               <td className="px-4 py-3 text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                 <UserIcon className="h-4 w-4" />
//                 Male
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-8 flex justify-center">
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious className="text-[rgb(30,144,255)]" href="#">
//                 <ChevronLeftIcon className="w-4 h-4" />
//               </PaginationPrevious>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink className="text-[rgb(30,144,255)]" href="#">
//                 1
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink className="text-[rgb(30,144,255)]" href="#" isActive>
//                 2
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink className="text-[rgb(30,144,255)]" href="#">
//                 3
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext className="text-[rgb(30,144,255)]" href="#">
//                 <ChevronRightIcon className="w-4 h-4" />
//               </PaginationNext>
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </main>
//   )
// }

// function CalendarDaysIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//       <path d="M8 14h.01" />
//       <path d="M12 14h.01" />
//       <path d="M16 14h.01" />
//       <path d="M8 18h.01" />
//       <path d="M12 18h.01" />
//       <path d="M16 18h.01" />
//     </svg>
//   )
// }


// function ChevronLeftIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m15 18-6-6 6-6" />
//     </svg>
//   )
// }


// function ChevronRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   )
// }


// function PaletteIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
//       <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
//       <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
//       <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
//       <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
//     </svg>
//   )
// }


// function PawPrintIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="4" r="2" />
//       <circle cx="18" cy="8" r="2" />
//       <circle cx="20" cy="16" r="2" />
//       <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
//     </svg>
//   )
// }


// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }