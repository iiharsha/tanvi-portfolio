"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {/* Spacer to prevent layout shift when navbar is fixed */}
      <div className="h-0" />
      <nav className="bg-transparent fixed top-0 left-0 right-0 z-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex">
              <Link href="/">
                <Image
                  src="/ktr-final.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="h-auto w-[150px] top-[-25px] left-[8px] absolute"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-4 mt-10 ml-auto">
              <Link
                href="/"
                className="bg-beige text-brown hover:bg-hovercolor border border-brown hover:text-xl rounded-full p-4"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="bg-beige text-brown hover:bg-hovercolor border border-brown hover:text-xl rounded-full p-4"
              >
                About
              </Link>
              <Link
                href="/tanvi-final-resume.pdf"
                className="bg-beige text-brown hover:bg-hovercolor border border-brown hover:text-xl rounded-full p-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center mt-12">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-brown hover:text-xl hover:border hover:border-brown"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-[30px] w-[30px]"
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
                    className="h-[30px] w-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div className="md:hidden bg-beige">
            <div className="px-2 pt-6 pb-3 space-y-1 sm:px-3 font-semibold text-zcool">
              <Link
                href="/"
                className="text-brown block hover:bg-hovercolor hover:text-xl rounded-lg p-2"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-brown block hover:bg-hovercolor hover:text-xl rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-brown block hover:bg-hovercolor hover:text-xl rounded-lg p-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
