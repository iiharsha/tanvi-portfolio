import images from "@/assets/images.json";
import Image from "next/image";

export default function Personas() {
  return (
    <div>
      <section className="p-4">
        <h2 className="text-[30px] font-normal font-zcool">User Personas</h2>
        <div className="flex flex-col md:flex-col justify-center items-center space-y-2 md:space-y-[40px] md:space-x-0 mt-10">
          <div className="flex-1 max-w-full shadow-xl">
            <Image
              src={images.petals.userpersona1}
              alt="user persona 1"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
          <div className="flex-1 max-w-full shadow-2xl">
            <Image
              src={images.petals.userpersona2}
              alt="user persona 2"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
          <div className="flex-1 max-w-full shadow-2xl">
            <Image
              src={images.petals.userpersona3}
              alt="user persona 3"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
