import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="px-4 md:px-20 xl:px-40 2xl:px-64">
        <About />
      </div>
    </main>
  );
}
