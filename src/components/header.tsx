"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className={`absolute top-0 z-50 w-full ${isHomePage ? "bg-transparent" : ""}`}>
      <div
        className={`mx-auto ${isHomePage ? "max-w-6xl px-4 md:px-8" : "max-w-6xl rounded-full bg-gray-50 px-4 py-2 mt-4"}`}
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Only visible on home page or on mobile */}
          {(isHomePage || !isHomePage) && (
            <Link href="/" className={`flex items-center ${!isHomePage ? "md:invisible" : ""}`}>
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Silk Road Runners Logo" fill className="object-contain" />
              </div>
            </Link>
          )}

          {/* Center Logo - Only visible on non-home pages on desktop */}
          <div
            className={`${isHomePage ? "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform hidden md:block"}`}
          >
            {/* <Image
              src="/footerlogo.png"
              alt="SILK ROAD RUNNERS."
              width={200}
              height={40}
              className="object-contain"
            /> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[#D9A84E] ${
                      isActive(link.href) ? "text-[#D9A84E]" : isHomePage ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
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
              className={isHomePage ? "text-white" : "text-gray-700"}
            >
              {isMenuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-sm font-medium transition-colors hover:text-[#D9A84E] ${
                      isActive(link.href) ? "text-[#D9A84E]" : isHomePage ? "text-white" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
