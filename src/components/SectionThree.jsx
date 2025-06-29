const features = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our GitHub repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

export function SectionThree() {
  return (
    <>
      <section className="bg-Cyan/70 p-6 md:p-10 space-y-4">
        <h3 className="text-2xl font-medium text-white">Why Us</h3>

        <ul className="text-lg/5 font-normal text-white/70 pr-24">
          {features.map((feature) => {
            return <li key={feature}>{feature}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
