import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import Video from "./Video";
import Pie from "./Piechart";
import Interview from "./Interviews";
import UserJourneyTable from "./TablePetals";
import Personas from "./UserPersonas";

const petalsheroimage = images.petals.heroimage;
const petalslogo = images.petals.logo;

export default function Petals() {
  return (
    <main className="w-full">
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
          src={images.petals.heroimagemobile}
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full mx-auto items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-[30px] font-normal font-zcool">Type</h2>
            <p>Personal Project</p>
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <h2 className="text-[30px] font-normal font-zcool">Tools</h2>
            <p>Figma, Canva,Adobe Illustrator</p>
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <h2 className="text-[30px] font-normal font-zcool">Timeline</h2>
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
          <h2 className="text-[30px] font-normal font-zcool ml-4 mt-4">
            Goals
          </h2>
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
        <h2 className="text-[30px] font-normal font-zcool ml-2 p-4">
          Solution
        </h2>
        <section className="flex items-center justify-center px-2 m-2">
          <div className="w-full mas-w-md md:max-w-lg lg:max-w-xl ml-4">
            <Video />
          </div>
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
          <h2 className="text-[30px] font-normal font-zcool ml-2 mb-4 mt-4">
            Survey
          </h2>
          <div className="flex items-center justify-center ml-4">
            <Pie />
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool ml-2 mt-4 mb-4">
            Interview
          </h2>
          <p className="font-zcool text-[20px] ml-2">
            We interviewed four people. They were two 20-year-old college
            students, one 30-year-old mother, and one 25-year-old working
            professional.
          </p>
          <Interview />
        </section>
        <section className="overflow-x-auto">
          <h2 className="text-[30px] font-normal font-zcool ml-2 mt-4 mb-4">
            User Journey
          </h2>
          <UserJourneyTable />
        </section>
        <section>
          <Personas />
        </section>
        <section>
          <h2 className="text-[30px] font-normal font-zcool ml-2 mt-4 mb-4">
            Reflection
          </h2>
          <p className="font-zcool text-[20px] ml-2">
            For this floral customization app, I focused on creating a
            user-centered design that balances personalization and simplicity. I
            created detailed user personas spanning a wide range of ages, which
            helped me recognize that users have diverse problems related to
            buying flowers, including knowing how to select an appropriate
            bouquet for a given occasion and translating flower symbolism. When
            designing and testing usability, finally, I finally wanted to refine
            the app in an iterative way to make it a balance between creative
            freedom and clear guidance. Via iteration and usability testing, I
            dialed in the app to strike a balance between creative freedom and
            explicit instructions. It taught me about the significance of
            emotional design and it&apos;s even more true in a place people are
            often emotionally connected with — flowers are personal and how
            giving them a great, accessible experience creates a fun experience
            and adds a lot of value to the experience. This project further
            developed my problem-solving and design skills, as well as a more
            nuanced appreciation for what goes into designing intuitive,
            engaging, and emotionally resonant experiences.
          </p>
        </section>
      </div>
    </main>
  );
}
