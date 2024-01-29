import Image from "next/image";
import Link from "next/link";

import { bricolageGrotesque, uncutSans } from "./components/lib/fonts";

import heartIcon from "./assets/icons/heart.svg";
import instagramIcon from "./assets/icons/instagram.svg";
import xIcon from "./assets/icons/x.svg";

// Components
import Hero from "./components/Hero";
import InfoGrid from "./components/InfoGrid";
import Footer from "./components/Footer";
import NewsletterCard from "./components/ui/NewsletterCard";

export default function Home() {
  return (
    <main className="w-screen">
      <section className="p-4 md:p-24">
        <Hero />
        <InfoGrid />
      </section>
      <section>
        <Footer>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-8">
            <NewsletterCard />
            <ul
              className={`text-[3rem] ${bricolageGrotesque.variable} font-sans font-normal text-[#FCF5E5] `}
            >
              <li>Questions?</li>
              <li>FAQ</li>
            </ul>
            <ul
              className={`text-[1.5rem] ${bricolageGrotesque.variable} font-sans font-normal text-[#FCF5E5] `}
            >
              <li>Made for you</li>
              <li>
                <Image
                  src={heartIcon}
                  width={24}
                  height={24}
                  alt="heart icon"
                />
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-24 pb-2 gap-8">
            <ul className="flex gap-2">
              <li>
                <Link href="https://instagram.com/josephakayesi">
                  <Image
                    src={instagramIcon}
                    width={16}
                    height={16}
                    alt="instagram icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/josephakayesi">
                  <Image src={xIcon} width={16} height={16} alt="x icon" />
                </Link>
              </li>
            </ul>
            <p
              className={`text-[0.75rem] text-[#FAF4F1] ${uncutSans.variable} font-mono font-normal`}
            >
              All Rights Reserved
            </p>
          </div>
        </Footer>
      </section>
    </main>
  );
}
