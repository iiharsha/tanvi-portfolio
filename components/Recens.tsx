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
            <p>November – December 2022</p>
          </div>
        </section>
        <p className="p-4">
          The Recens logo utilizes Tenor Sans to convey a sense of modern
          sophistication, while the tagline &quot;One of a Kind&quot; is
          elegantly presented in Monterchi Sans, highlighting the brand&apos;s
          uniqueness and artistic flair. These typefaces were selected to
          enhance the visual appeal and ensure that every aspect of Recens’
          identity resonates with our core values of elegance and individuality.
        </p>

        <section className="p-4">
          <h2 className="text-[30px] font-normal font-zcool">Typography</h2>
          <p className="font-zcool text-center">
            In this section, I have illustrated how creativity and strategic
            design led us to our logo, thank-you cards, tags, and stickers. I
            enjoy discovering Recens&apos;s essence as much as I enjoyed
            creating it.
          </p>
        </section>
      </div>
    </main>
  );
}
