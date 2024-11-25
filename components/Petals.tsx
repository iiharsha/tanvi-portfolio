import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import { Video } from "./Video";

const secOne = images.petals.heroimage;
const secTwo = images.petals.logo;
const secThree = images.recens.recenspackage1;
const secFour = images.recens.recenspackage2;
const secFive = images.recens.recensthankyou1;
const secSix = images.recens.recensthankyou2;
const secSeven = images.recens.recenstag;
const secEight = images.recens.recenstag2;

export default function Petals() {
  return (
    <main>
      <div className="md:relative w-full h-[60vh] md:h-[80vh] hidden md:block">
        <Image
          src={secOne}
          alt="petals and promises image"
          fill
          objectFit="cover"
          objectPosition="center"
          quality={90}
          priority
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={images.petals.heroimagebile}
          width={420}
          height={420}
          alt="petals and promises image"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          quality={90}
          priority
        />
      </div>
      <div
        className="max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mx-auto xl:mt-0
        sm:max-w-[60em] sm:min-w-[10em] sm::mx-auto"
      >
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full">
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Type</h2>
            <p>Personal Project</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Tools</h2>
            <p>Figma, Canva,Adobe Illustrator</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Timeline</h2>
            <p>August 20 - October 1, 2024</p>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">Logo & Design</h2>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secTwo}
                alt="recens logo"
                width={1000}
                height={754}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
          <h3 className="text-center text-[21px] font-normal font-zcool">
            Logo Type : Dynamic Logo
          </h3>
          <h2 className="text-[30px] font-normal mt-9 font-zcool">
            Problem Statement
          </h2>
          <p className="p-4 text-[20px]">
            Many existing flower delivery applications restrict users to
            predefined designs, offering limited opportunities for
            customization. This lack of flexibility can be particularly daunting
            for first-time buyers, who are often fully overwhelmed by the
            selection process and need clarification on choosing flowers
            appropriate for specific occasions. Additionally, these apps
            typically need to provide information on flowers&apos; symbolic
            meaning or cultural significance, leading to potential
            dissatisfaction and risk of selecting inappropriate arrangements.
          </p>
          <h2 className="text-[30px] font-normal font-zcool">Goals</h2>
          <ul className="list-disc list-inside text-[18px]">
            <li>
              Develop an innovative floral customization app that allows users
              to design bouquets with complete creative freedom.
            </li>
            <li>
              Give users insights into various flowers&apos; symbolic meanings
              and cultural significance.
            </li>
            <li>
              Empower users, particularly first-time buyers, to create
              meaningful and personalized floral arrangements that reflect their
              preferences and occasion’s requirements.
            </li>
          </ul>
        </section>
        <section className="flex items-center justify-center">
          <Video />
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">Research</h2>
          <p className="font-zcool text-[20px]">
            I conducted a Google survey to focus our research and find out what
            consumers liked to buy when they bought flowers. Our survey received
            responses from 50 US and Indian volunteers aged 16 to 40. Based on
            the survey results, we were CI to concentrate on certain
            floral-related challenges. For instance, before making a purchase,
            people said they would like to learn about flower meanings.
          </p>
          <h2 className="text-[30px] font-normal font-zcool">Survey</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[150px] mt-10">
            <div className="flex-1 max-w-md shadow-lg">
              <Image
                src={secThree}
                alt="recens logo"
                width={800}
                height={800}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src={secFour}
                alt="recens logo"
                width={800}
                height={800}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">
            Thank-You Cards
          </h2>
          <p className="font-zcool text-[20px]">
            My Desgin for Recens&apos; thank you cards embodies gratitude with
            style. It blends minimalism with a personal touch, ensuring each
            recipient feels uniquely appreciated.
          </p>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secFive}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secSix}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">
            Tags & Stickers
          </h2>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secSeven}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secEight}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
