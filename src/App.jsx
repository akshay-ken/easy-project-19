import { SectionOne } from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import { SectionTwo } from "./components/SectionTwo";

function App() {
  return (
    <>
      <main className="w-full my-28 max-w-sm md:max-w-3xl mx-auto font-one md:grid md:grid-cols-2">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </>
  );
}

export default App;
