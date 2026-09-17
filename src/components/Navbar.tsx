"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";

const navItems = ["Products", "Features", "Resources", "Company", "Plan"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAFCFD]">
      <nav className="mx-auto flex min-h-17.5 max-w-10/12 flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:flex-nowrap md:px-10 lg:px-16 xl:px-22">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/logo.png"
            alt="ZeuZ"
            className="h-auto w-24 sm:w-28 md:w-30 lg:w-32.5"
          />
        </Link>

        {/* Hamburger Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#18181B] hover:bg-gray-100 focus:outline-none md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        
        <div className="hidden items-center gap-4 sm:gap-6 md:flex md:gap-7 lg:gap-8.5">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="flex shrink-0 items-center gap-1.75 font-(--font-space-grotesk) text-sm leading-6.75 text-[#18181B] sm:text-base md:text-[17px] lg:text-[18px]"
            >
              {item}

              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="#18181B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="rounded-[7px] border border-[#7C3AED] px-2.5 py-2 text-xs font-bold leading-5 text-[#7C3AED] sm:px-3 sm:py-2 sm:text-sm md:px-3.5 md:py-2.5 md:text-base lg:px-3.75 lg:text-[18px] lg:leading-6.75"
          >
            Request 30 days free trial
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="w-full pt-4 md:hidden">
            <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between font-(--font-space-grotesk) text-base text-[#18181B]"
                >
                  {item}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#18181B"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-[7px] border border-[#7C3AED] px-3.5 py-2.5 text-center text-sm font-bold text-[#7C3AED]"
                >
                  Request 30 days free trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}