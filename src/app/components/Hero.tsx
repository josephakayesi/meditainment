import React from "react";

import { bricolageGrotesque, uncutSans } from "./lib/fonts";

function Hero() {
  return (
    <div className="flex flex-col text-center items-center">
      <h1
        className={`text-[4rem] leading-[4rem] md:text-[6rem] md:leading-[6rem] ${bricolageGrotesque.variable} font-sans font-extrabold w-full md:w-[900px] m-12`}
      >
        Discover Bliss in Every Breath
      </h1>
      <p
        className={`text-[1.15rem] md:leading-[6rem]--font-uncut-sans ${uncutSans.variable} font-mono font-normal w-full md:w-[522px]`}
      >
        Immerse Yourself in the Serene Symphony of Meditainment for Ultimate
        Relaxation and Entertainment
      </p>
      <button
        className={`bg-black text-white ${uncutSans.variable} font-mono rounded-full p-4 my-24`}
      >
        Book a Session
      </button>
    </div>
  );
}

export default Hero;
