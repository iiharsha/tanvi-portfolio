import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";

const recensboard = images.recens.heroimage;

export default function Recens() {
  return (
    <main>
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={recensboard}
          alt="San Francisco Art Book Fair"
          layout="fill"
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
        {/* Hero Image */}
        {/* Text Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full">
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Type</h2>
            <p>Brand Work</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Tools</h2>
            <p>Figma, Canva, Illustrator</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-normal font-zcool">Timeline</h2>
            <p>1st November - 7st November 2024</p>
          </div>
        </section>
        <p className="p-4 text-[20px]">
          In this section, I have illustrated how creativity and strategic
          design led us to our logo, thank-you cards, tags, and stickers. I
          enjoy discovering Recens&apos;s essence as much as I enjoyed creating
          it.
        </p>

        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">Logo & Tagline</h2>
          <p className="font-zcool text-[20px]">
            The Recens logo utilizes Tenor Sans to convey a sense of modern
            sophistication, while the tagline &quot;One of a Kind&quot; is
            elegantly presented in Monterchi Sans, highlighting the brand&apos;s
            uniqueness and artistic flair. These typefaces were selected to
            enhance the visual appeal and ensure that every aspect of Recens’
            identity resonates with our core values of elegance and
            individuality.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[150px] mt-10">
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src="/1.png"
                alt="recens logo"
                width={400}
                height={400}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src="/2.png"
                alt="recens logo"
                width={400}
                height={400}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">
            Package Designing
          </h2>
          <p className="font-zcool text-[20px]">
            Crafting understated elegance, my design for budget friendly Recens
            corrugated boxes combines minimalism with functional luxury,
            emphasizing a clean, sophisticated aesthetic.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[150px] mt-10">
            <div className="flex-1 max-w-md shadow-lg">
              <Image
                src="/recenspackagewireframe.png"
                alt="recens logo"
                width={800}
                height={800}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src="/packagedesign2.png"
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
                src="/thankyoucard1.jpeg"
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src="/thankyoucard2.jpeg"
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
                src="/tagspic1.jpeg"
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src="/thankyousticker.jpg"
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
