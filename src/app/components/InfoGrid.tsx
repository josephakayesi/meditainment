import React from "react";
import Image from "next/image";

import harmonyIcon from "../../../public/icons/harmony.svg";
import tranquilityIcon from "../../../public/icons/tranquility.svg";
import balanceIcon from "../../../public/icons/balance.svg";

import { bricolageGrotesque, uncutSans } from "../ui/fonts";

function InfoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-[20px]">
      <div className="col-span-1 md:col-span-1 lg:col-span-2 w-full bg-[url(https://res.cloudinary.com/tutcan/image/upload/v1706476067/meditainment/bg-harmony.webp)] bg-cover rounded-[3px] p-[2rem] md:p-[4.5rem] h-[34rem] text-[#FCF5E5]">
        <div className="flex flex-col ">
          <Image
            className="my-4 md:my-8"
            src={harmonyIcon}
            width={40}
            height={40}
            priority={true}
            alt="tranquility icon"
          />
          <h2
            className={`text-[3rem] ${bricolageGrotesque.variable} font-sans font-medium`}
          >
            Harmony
          </h2>
          <p className={`max-w-[21.56rem] ${uncutSans.variable} font-mono`}>
            Meditation and entertainment, creating a harmonious experience for
            mental well-being and leisure.
          </p>
        </div>
      </div>
      <div className="w-full bg-[url(https://res.cloudinary.com/tutcan/image/upload/v1706476674/meditainment/bg-balance.webp)] bg-cover rounded-[3px]  p-[2rem] md:p-[4.5rem] h-[34rem] text-[#FCF5E5]">
        <div className="flex flex-col ">
          <Image
            className="my-4 md:my-8"
            src={balanceIcon}
            width={40}
            height={40}
            alt="balance icon"
          />
          <h2
            className={`text-[3rem] ${bricolageGrotesque.variable} font-sans font-medium`}
          >
            Balance
          </h2>
          <p className={`max-w-[21.56rem] ${uncutSans.variable} font-mono`}>
            Blends mindful relaxation and entertainment, providing a platform
            for unwinding, rejuvenation, and self-discovery.
          </p>
        </div>
      </div>
      <div className="w-full bg-[url(https://res.cloudinary.com/tutcan/image/upload/v1706476674/meditainment/bg-tranquility.webp)] bg-cover bg-no-repeat rounded-[3px]  p-[2rem] md:p-[4.5rem] h-[34rem] text-[#FCF5E5]">
        <div className="flex flex-col ">
          <Image
            className="my-4 md:my-8"
            src={tranquilityIcon}
            width={40}
            height={40}
            alt="balance icon"
          />
          <h2
            className={`text-[3rem] ${bricolageGrotesque.variable} font-sans font-medium`}
          >
            Tranquility
          </h2>
          <p className={`max-w-[21.56rem] ${uncutSans.variable} font-mono`}>
            Offers a serene escapade, merging meditation and entertainment into
            a mindful space for inner self-thriving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoGrid;
