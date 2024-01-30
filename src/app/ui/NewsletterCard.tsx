"use client";

import React, { FormEvent, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Image from "next/image";

import { bricolageGrotesque, uncutSans } from "@/app/ui/fonts";

import giftIcon from "../../../public//icons/gift.svg";
import arrowRight from "../../../public/icons/arrow-right.svg";

const mockNewsletterSubscription = (): Promise<{
  success: boolean;
  message: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { success: true, message: "Thank you for subscribing!" };
      resolve(response);
    }, 2000);
  });
};

const submitButtonLoading = () => {
  return (
    <button type="submit" className="bg-[#02020240] rounded-full p-8" disabled>
      <div className="flex md:w-[1.5rem] md:h-[1.5rem] w-[1.5rem] h-full items-center justify-center text-center">
        <Image src={arrowRight} width={14} height={14} alt={"arrow right"} />
      </div>
    </button>
  );
};
function NewsletterCard() {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitLoading(true);

    try {
      const response = await mockNewsletterSubscription();
      enqueueSnackbar(response.message, {
        variant: response.success ? "success" : "error",
        hideIconVariant: false,
      });
    } catch (error) {
      setSubmitLoading(false);
    } finally {
      setSubmitLoading(false);
    }
  }

  return (
    <div className="flex flex-col bg-[#FCF5E5] p-[2rem] gap-8 rounded-sm w-full md:w-full lg:w-[28.5rem]">
      <SnackbarProvider
        classes={{
          containerRoot: `${uncutSans.variable} font-mono font-normal`,
        }}
      />

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
          type="email"
          required
          name="name"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className={`p-8 rounded-full border border-[#020202] w-full lg:w-[18.75rem] ${uncutSans.variable} text-[1rem] font-mono font-normal invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500`}
          placeholder="Enter your email"
        />
        {submitLoading ? (
          submitButtonLoading()
        ) : (
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
        )}
      </form>
    </div>
  );
}

export default NewsletterCard;
