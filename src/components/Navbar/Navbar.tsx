"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBarAboutus from "@/components/Navbar/NavBarAboutus";
import NavBarRL from "@/components/Navbar/NavBarRL";
import NavBarSwaps from "@/components/Navbar/NavBarSwaps";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="flex text-lg font-semibold">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            className="p-2"
            alt="ChainAI"
            priority
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden block text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${menuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}
      >
        <ul className="text-xl text-center items-center gap-x-3 pt-4 lg:text-lg lg:flex lg:pt-0">
          <NavBarSwaps />
          <NavBarRL />
          <NavBarAboutus />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
