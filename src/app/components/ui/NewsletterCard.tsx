"use client";

import React, { FormEvent } from "react";
import Image from "next/image";

import { bricolageGrotesque, uncutSans } from "./../lib/fonts";

import giftIcon from "../../assets/icons/gift.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

function NewsletterCard() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);
  }
  return (
    <div className="flex flex-col bg-[#FCF5E5] p-[2rem] gap-8 rounded-sm w-full md:w-full lg:w-[28.5rem]">
      <Image src={giftIcon} width={24} height={24} alt="gift icon" />
      <div className="space-y-4">
        <div
          className={`md:w-[18.75rem] text-[1.5rem] ${bricolageGrotesque.variable} font-sans font-medium`}
        >
          Join our newsletter
        </div>
        <div
          className={`lg:w-[18.75rem] text-[1rem] ${uncutSans.variable} font-mono font-normal`}
        >
          Subscribe to our newsletter for weekly meditation insights and best
          practices
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex gap-[0.25rem] justify-between w-full"
      >
        <input
          type="text"
          name="name"
          className={`p-8 rounded-full border border-[#020202] w-full lg:w-[18.75rem] ${uncutSans.variable} text-[1rem] font-mono font-normal`}
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-[#020202] rounded-full p-8">
          <div className="flex md:w-[1.5rem] md:h-[1.5rem] w-[1.5rem] h-full items-center justify-center text-center">
            <Image
              src={arrowRight}
              width={14}
              height={14}
              alt={"arrow right"}
            />
          </div>
        </button>
      </form>
    </div>
  );
}

export default NewsletterCard;
