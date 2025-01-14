import { IoSearch } from "react-icons/io5";
import { images } from "../../../constants/images";

export const Hero = () => {
  const { HeroImage } = images;

  return (
    <section className="grid lg:grid-cols-2 container mx-auto p-5 gap-10">
      <div className="mt-10">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting article
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          pariatur, sequi repellendus molestiae iste obcaecati atque aspernatur
          expedita voluptatum quos.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 relative">
          <div className="relative">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              placeholder="Search article"
              type="text"
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="mt-4 text-dark-light font-semibold italic">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={HeroImage} alt="users are reading articles" />
      </div>
    </section>
  );
};
