import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import { Video } from "./Video";
import Interview from "./Interviews";
import Piechart from "./Piechart";
import UserJourneyTable from "./TablePetals";

const petalsheroimage = images.petals.heroimage;
const petalslogo = images.petals.logo;

export default function Petals() {
  return (
    <main>
      <div className="md:relative w-full h-[60vh] md:h-[80vh] hidden md:block">
        <Image
          src={petalsheroimage}
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-5xl w-full ml-2">
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool m-2">Type</h2>
            <p>Personal Project</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool m-2">Tools</h2>
            <p>Figma, Canva,Adobe Illustrator</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool m-2">Timeline</h2>
            <p>August 20 - October 1, 2024</p>
          </div>
        </section>

        <section className="p-2">
          <h2 className="text-[30px] font-normal font-zcool ml-2">
            Logo & Design
          </h2>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-4">
            <div className="flex-1 max-w-full shadow-2xl ml-4">
              <Image
                src={petalslogo}
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
          <h2 className="text-[30px] font-normal mt-9 font-zcool ml-4">
            Problem Statement
          </h2>
          <p className="pt-4 px-4 text-[20px]">
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
          <h2 className="text-[30px] font-normal font-zcool ml-4">Goals</h2>
          <ul className="list-disc list-inside text-[18px] pt-2 px-4">
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
        <section className="flex items-center justify-center px-2 m-2 right-[-10rem]">
          <Video />
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool ml-2">Research</h2>
          <p className="font-zcool text-[20px] ml-2">
            I ran a Google survey to narrow down our research and see
            people&apos;s behavior and preferences when they buy flowers. A
            total of 50 volunteers from the US and India, aged between 16 and
            40, responded. With this, according to the survey result we were
            able to focus on some of the floral-related problems. For example,
            before a purchase, people said they would want to know about flower
            meanings.
          </p>
          <h2 className="text-[30px] font-normal font-zcool ml-2 mb-2">
            Survey
          </h2>
          <Piechart />
        </section>
        <section>
          <h2 className="text-[30px] font-normal font-zcool ml-2">Interview</h2>
          <p className="font-zcool text-[20px] ml-2">
            We interviewed four people. They were two 20-year-old college
            students, one 30-year-old mother, and one 25-year-old working
            professional.
          </p>
          <Interview />
        </section>
        <section>
          <h2 className="text-[30px] font-normal font-zcool m-4">
            User Journey
          </h2>
          <UserJourneyTable />
        </section>
      </div>
    </main>
  );
}
