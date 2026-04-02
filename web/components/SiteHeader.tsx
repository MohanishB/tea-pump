// export default function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//         <div>
//           <div className="text-lg font-semibold">Tea Pump</div>
//           <div className="text-sm text-slate-600">Brew • Boost • Go</div>
//         </div>

//         <nav className="flex items-center gap-4">
//           <a className="text-sm text-slate-700 hover:text-slate-900" href="/menu">
//             Menu
//           </a>
//           <a className="text-sm text-slate-700 hover:text-slate-900" href="/locations">
//             Locations
//           </a>
//           <a className="text-sm text-slate-700 hover:text-slate-900" href="/about">
//             About
//           </a>z
//           <a className="text-sm text-slate-700 hover:text-slate-900" href="/contact">
//            Contact
//            </a>
//           <a
//             className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
//             href="/order"
//           >
//             Order Online
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

 

//=============================================================//
//=============================================================//
//=============================================================//

// import Link from "next/link";
// import Image from "next/image";

// export default function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//         {/* Logo + brand (click to home) */}
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src="/tea_pump_img.png"
//             alt="Tea Pump"
//             width={1024}
//             height={1024}
//             priority
//             className="h-40 w-40 object-contain"
//           />
//           {/* <div className="leading-tight">
//             <div className="text-lg font-semibold">Tea Pump</div>
//             <div className="text-sm text-slate-600">Brew • Boost • Go</div>
//           </div> */}
//         </Link>

//         {/* Nav */}
//         <nav className="flex items-center gap-4">
//           <Link className="text-sm text-slate-700 hover:text-slate-900" href="/menu">
//             Menu
//           </Link>
//           <Link className="text-sm text-slate-700 hover:text-slate-900" href="/locations">
//             Locations
//           </Link>
//           <Link className="text-sm text-slate-700 hover:text-slate-900" href="/about">
//             About
//           </Link>
//           <Link className="text-sm text-slate-700 hover:text-slate-900" href="/contact">
//             Contact
//           </Link>
//           <Link
//             className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
//             href="/order"
//           >
//             Order Online
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

//=============================================================//
//=============================================================//
//=============================================================//

import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-4">
          <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/10 shadow-sm">
            <Image
              src="/tea_pump_img.png"
              alt="Tea Pump"
              width={600}
              height={600}
              priority
              className="h-20 w-20 object-cover scale-[1.55]"
            />
          </div>

          {/* <div className="leading-tight">
            <div className="text-lg font-semibold">Tea Pump</div>
            <div className="text-sm text-slate-600">Brew • Boost • Go</div>
          </div> */}
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-5">
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/menu">
            Menu
          </Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/locations">
            Locations
          </Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/about">
            About
          </Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/contact">
            Contact
          </Link>
          <Link
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
            href="/order"
          >
            Order Online
          </Link>
        </nav>
      </div>
    </header>
  );
}
