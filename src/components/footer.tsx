import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div>
            <Image
              src="/footerlogo.png"
              alt="SILK ROAD RUNNERS."
              width={200}
              height={60}
              className="object-contain"
            />
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-[#D9A84E]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-700 hover:text-[#D9A84E]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="text-gray-700 hover:text-[#D9A84E]">
                  Highlights
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-[#D9A84E]">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-[#D9A84E] py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row md:px-8">
          <p>2025 Silk Rode Runners | All rights are reserved</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" aria-label="Telegram">
              <svg
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
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
