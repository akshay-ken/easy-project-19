// A new, reusable component for any pricing plan

export function PlanSection({ plan }) {
  // Use a ternary for the conditional class
  const containerClasses = `p-6 md:p-10 space-y-4 ${plan.styles.bg} ${
    plan.isBestValue ? "ring-4 ring-Bright-Yellow" : ""
  }`;

  return (
    <section className={containerClasses}>
      <div className="relative">
        <h2 className={`text-2xl font-semibold ${plan.styles.textColor}`}>
          {plan.title}
        </h2>
        {/* Conditional "Best Value" badge */}
        {plan.isBestValue && (
          <div className="absolute -top-2 -right-2 bg-Bright-Yellow text-Cyan font-bold text-xs px-3 py-1 rounded-full uppercase">
            Best Value
          </div>
        )}
      </div>

      <h3 className={`text-4xl font-bold ${plan.styles.textColor}`}>
        ${plan.price}{" "}
        <span className="text-xl text-white/70 font-thin">
          {plan.priceDetails}
        </span>
      </h3>
      <p className={`text-xl font-normal ${plan.styles.textColor}`}>
        {plan.description}
      </p>
      <button className="bg-Bright-Yellow p-4 rounded-md w-full font-bold text-2xl text-white/80 mt-4">
        {plan.buttonText}
      </button>
    </section>
  );
}
