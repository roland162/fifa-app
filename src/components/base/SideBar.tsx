'use client';

import Link from "next/link"

export const SideBar = () => {
    return (
        <div className="bg-gradient-to-b from-violet-500 to-fuchsia-500 text-white w-80">
          <nav className="flex flex-col gap-4 p-4 mt-10">
            <Link
              href="#"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              prefetch={false}
            >
              🏠 Home
            </Link>
            <Link
              href="#"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              prefetch={false}
            >
              🏆 Championships
            </Link>
            <Link
              href="#"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              prefetch={false}
            >
             ⚽ Standalone Matches
            </Link>
            <Link
              href="/team-generator"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              prefetch={false}
            >
              🏃 Team Generator

            </Link>
          </nav>
        </div>
      )
}