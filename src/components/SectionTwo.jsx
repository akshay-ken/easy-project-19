import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export function SectionTwo() {
  return (
    <>
      <section className="bg-Cyan p-6 md:p-10 space-y-4">
        <h2 className="text-2xl text-white font-semibold">
          Monthly Subscription
        </h2>
        <h2 className="text-white text-4xl font-bold">
          $29 <span className="text-xl text-white/70 font-thin">per month</span>
        </h2>
        <p className="text-white/80 text-xl font-normal">
          Full access for less than $1 a day
        </p>
        <button className="bg-Bright-Yellow p-4 rounded-md w-full font-bold text-2xl text-white/80">
          Sign Up
        </button>
        <div className="flex justify-around">
          <button className=" scale-100 active:scale-125">
            <FiChevronLeft className="fill-red-500 size-10" />
          </button>
          <button className=" scale-100 active:scale-125">
            <FiChevronRight className="fill-red-500 size-10" />
          </button>
        </div>
      </section>
    </>
  );
}
