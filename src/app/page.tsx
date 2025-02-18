// import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-[500px] items-center justify-center">
        <Hero/>
        <About/>
        <Contact/>
      </div>
    </section>
  );
}
