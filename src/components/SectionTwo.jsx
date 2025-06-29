import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export function SectionTwo({ pricingPlans }) {
  const [currentPlan, setCurrentPlan] = useState(pricingPlans[0]);

  function handleNextPlan() {
    setCurrentPlan(pricingPlans[1]);
  }
  function handlePreviousPlan() {
    setCurrentPlan(pricingPlans[0]);
  }
  return (
    <>
      {pricingPlans.map((planDetail) => {
        planDetail.price;
      })}
      <section className="bg-Cyan p-6 md:p-10 space-y-4">
        <h2 className="text-2xl text-white font-semibold">
          {currentPlan.title}
        </h2>
        <h2 className="text-white text-4xl font-bold">
          ${currentPlan.price}{" "}
          <span className="text-xl text-white/70 font-thin">
            {currentPlan.priceDetails}
          </span>
        </h2>
        <p className="text-white/80 text-xl font-normal">
          {currentPlan.description}
        </p>
        <button className="bg-Bright-Yellow p-4 rounded-md w-full font-bold text-2xl text-white/80">
          {currentPlan.buttonText}
        </button>
        <div className="flex justify-around">
          <button
            className=" scale-100 active:scale-125"
            onClick={handlePreviousPlan}
          >
            <FiChevronLeft className="fill-red-500 size-10" />
          </button>
          <button
            className=" scale-100 active:scale-125"
            onClick={handleNextPlan}
          >
            <FiChevronRight className="fill-red-500 size-10" />
          </button>
        </div>
      </section>
    </>
  );
}
