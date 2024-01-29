"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@public/icons/logo.svg";
import menuIcon from "@public/icons/menu.svg";
import closeIcon from "@public/icons/close.svg";

import { bricolageGrotesque, uncutSans } from "./fonts";

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const onToggleMenu = (e) => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <header
      className={`bg-transparent px-4 md:px-24 my-4 ${bricolageGrotesque.variable} font-sans font-medium`}
    >
      <nav className="flex justify-between items-center">
        <div>
          <Image src={logo} width={24} height={24} alt="meditainment logo" />
        </div>
        <div className="absolute md:static bg-[#FCF5E5] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link className="hover:text-gray-500" href={"#"}>
                Sessions
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href={"#"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href={"#"}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className={`text-white ${bricolageGrotesque.variable} font-sans font-medium rounded-full p-2 bg-transparent border-[#020202] text-[#020202] border-2 hover:bg-[#020202] hover:text-[#FCF5E5]`}
          >
            Sign in
          </button>

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
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
