import { PlanSection } from "./components/PlanSection";
import { SectionOne } from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import { SectionTwo } from "./components/SectionTwo";

const pricingPlans = [
  {
    id: 1,
    title: "Monthly Subscription",
    price: 29,
    priceDetails: "per month",
    description: "Full access for less than $1 a day",
    buttonText: "Sign Up",
    styles: {
      bg: "bg-Cyan",
      textColor: "text-white",
    },
    isBestValue: true, // Let's make this the best value plan
  },
  {
    id: 2,
    title: "Enterprise Solution",
    price: 199,
    priceDetails: "per month",
    description: "Dedicated support and team tools",
    buttonText: "Contact Us",
    styles: {
      bg: "bg-Cyan/70", // A different background
      textColor: "text-white/80",
    },
    isBestValue: false,
  },
];

function App() {
  return (
    <>
      <main className="w-full my-28 max-w-sm md:max-w-3xl mx-auto font-one md:grid md:grid-cols-2">
        <SectionOne />
        <SectionTwo pricingPlans={pricingPlans} />
        <SectionThree />
      </main>

      {/* <div className="md:grid md:grid-cols-2">
        <SectionOne />

        {pricingPlans.map((plan) => (
          <PlanSection key={plan.id} plan={plan} />
        ))}
      </div> */}
    </>
  );
}

export default App;
