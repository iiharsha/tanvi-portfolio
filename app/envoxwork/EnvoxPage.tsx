import Image from "next/image";
import images from "@/assets/images.json";
import React from "react";
import Link from "next/link";

const envoxheroimage = images.envox.heroimage;
const envoxheroimagemobile = images.envox.heroimagemobile;

export default function EnvoxPage() {
  return (
    <main className="w-full">
      <section>
        <div className="sm:relative w-full h-[60vh] sm:h-[80vh] hidden sm:block">
          <Image
            src={envoxheroimage}
            alt="petals and promises image"
            fill
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </div>
        <div className="block sm:hidden">
          <Image
            src={envoxheroimagemobile}
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
      </section>
      <div
        className="max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mx-auto xl:mt-0
      sm:max-w-[60em] sm:min-w-[10em] sm::mx-auto"
      >
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-5xl w-full mx-auto">
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool m-2">Type</h2>
            <p>Internship</p>
          </div>
          <div className="flex flex-col border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <h2 className="text-[30px] font-normal font-zcool m-2">Tools</h2>
            <p>Figma, Canva, Adobe Illustrator</p>
          </div>
          <div className="flex flex-col border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <h2 className="text-[30px] font-normal font-zcool m-2">Timeline</h2>
            <p>May 2 - August 2, 2024</p>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4 ml-6">
          <div>
            <h1 className="text-[30px] font-normal font-zcool ml-2">My Work</h1>
            <p className="text-[20px] ml-2">
              Welcome to my project page! Here, you&apos;ll find the context and
              background of my latest work at Envox Media, where I had the
              opportunity to apply and enhance my skills as a UI/UX Designer.
              Below, I share detailed insights into my projects, showcasing my
              contributions and the impact of my designs.
            </p>
            <button
              className="m-4 bg-beige text-brown hover:bg-hovercolor border border-brown rounded-full p-4 shadow-xl hover:text-[18px] focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2 transition-all duration-300 ease-in-out"
              aria-label="View Figma Prototype"
            >
              <Link
                href="https://www.figma.com/proto/hcBmhqCOrmw4dRg5xg0vV2/home-page?node-id=2-2&t=MtfPBwUAYJceMe5B-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block"
              >
                Check it Out!
              </Link>
            </button>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4 ml-6">
          <div>
            <h1 className="text-[30px] font-normal font-zcool ml-2">
              User Research
            </h1>
            <h1 className="text-[30px] font-normal font-zcool ml-2 mb-2">
              Summary
            </h1>
            <p className="text-[20px] ml-2">
              Our user research involved a comprehensive approach, including
              qualitative methods such as interviews and surveys, coupled with
              quantitative data analysis. Initially, we assumed certain pain
              points and preferences for our target personas based on their
              demographics and psychographics. However, through our research, we
              gained valuable insights that challenged these assumptions. We
              discovered nuanced pain points such as limited understanding of
              digital marketing, time constraints,competition and lead
              generation challenges, and tech overwhelm.These insights prompted
              us to reevaluate our design strategies, emphasizing user-friendly
              interfaces, streamlined workflows, targeted marketing
              strategies,and simplified technology to better address the diverse
              needs of our users.
            </p>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4 ml-6">
          <div>
            <h1 className="text-[30px] font-normal font-zcool ml-2 mb-2">
              Pain Points
            </h1>

            <ol className="list-decimal text-[20px] ml-6">
              <li className="mb-2">
                <strong className="text-brown">
                  Limited Understanding of Digital Marketing:
                </strong>{" "}
                Design user-friendly and educational elements to empower users
                like Alex to navigate digital marketing complexities
                effectively.
              </li>
              <li className="mb-2">
                <strong className="text-brown">Time Constraints:</strong>{" "}
                Implement streamlined workflows and automation features to help
                users like Sarah save time in their digital marketing efforts.
              </li>
              <li className="mb-2">
                <strong className="text-brown">
                  Competition and Lead Generation:
                </strong>{" "}
                Design targeted and data-driven marketing strategies to help
                users like Ryan stand out in a crowded market and attract
                high-quality leads efficiently.
              </li>
              <li className="mb-2">
                <strong className="text-brown">Tech Overwhelm:</strong> Simplify
                complex technology and offer guided onboarding experiences to
                alleviate user anxiety and improve usability for users like
                Alex.
              </li>
            </ol>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">User Personas</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[40px] mt-10 ml-4">
            <div className="flex-1 max-w-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/envox-user-persona1.webp"
                alt="user persona 1"
                width={1748}
                height={1240}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/envox-user-persona2.webp"
                alt="user persona 2"
                width={1748}
                height={1240}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/envox-user-persona3.webp"
                alt="user persona 3"
                width={1748}
                height={1240}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4 ml-6">
          <h2 className="text-[30px] font-normal font-zcool">Wireframes</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/wireframe1.webp"
                alt="wireframe 1"
                width={499}
                height={743}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/wireframe2.webp"
                alt="wireframe 2"
                width={334}
                height={598}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/wireframe3.webp"
                alt="wireframe 3"
                width={415}
                height={692}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/wireframe4.webp"
                alt="wireframe 4"
                width={476}
                height={714}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
              <Image
                src="/wireframe5.webp"
                alt="wireframe 5"
                width={411}
                height={687}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <div className="my-8 border-t border-brown"></div>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">
            Competitor Audit
          </h2>
          <button
            className="m-4 bg-beige text-brown hover:bg-hovercolor border border-brown rounded-full p-4 shadow-xl hover:text-[18px] focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2 transition-all duration-300 ease-in-out"
            aria-label="Check it out"
          >
            <Link
              href="https://docs.google.com/spreadsheets/d/1akK4aqlcHsP0_6vSQpfVVoNOmBKzs8cvDXQlsWWMvhs/edit?usp=sharing&resourcekey=0-uo35i9PnKke6CZ0VNJgHcQ"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block"
            >
              Check it Out!
            </Link>
          </button>
        </section>
      </div>
    </main>
  );
}
