"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { clsx } from "clsx";

import logo from "@public/icons/logo.svg";
import menuIcon from "@public/icons/menu.svg";
import closeIcon from "@public/icons/close.svg";

import { bricolageGrotesque, uncutSans } from "./fonts";

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header>
      <nav
        className={`bg-[#FCF5E5] p-5 md:flex flex justify-between md:items-center md:justify-between  ${bricolageGrotesque.variable} font-sans font-medium`}
      >
        <div>
          <Image src={logo} width={24} height={24} alt="meditainment logo" />
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Image src={closeIcon} width={24} height={24} alt="close icon" />
          ) : (
            <Image src={menuIcon} width={24} height={24} alt="menu icon" />
          )}
        </div>

        <ul
          className={clsx(
            "md:flex md:items-center  md:z-auto md:static absolute bg-[#FCF5E5] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500",
            !menuOpen && "opacity-0 top-[-400px] z-[-1]",
            menuOpen && "top-[80px] border-y shadow border-[#020202]"
          )}
        >
          <Link className="hover:text-gray-500 duration-500" href={"#"}>
            <li className="mx-4 my-6 md:my-0">Sessions</li>
          </Link>
          <Link className="hover:text-gray-500" href={"#"}>
            <li className="mx-4 my-6 md:my-0">About Us</li>
          </Link>
          <Link className="hover:text-gray-500" href={"#"}>
            <li className="mx-4 my-6 md:my-0">Pricing</li>
          </Link>
          <button
            className={`text-white ${bricolageGrotesque.variable} font-sans font-medium rounded-full px-6 py-2 mx-4 bg-[#020202] hover:bg-[#FCF5E5] border-[#020202] border hover:text-[#020202]`}
          >
            Sign in
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
