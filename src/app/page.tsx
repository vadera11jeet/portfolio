import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/project/Projects";
import Connect from "@/components/Connect/Connect";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#121212] text-white">
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center overflow-x-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
