import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import PublishedProjects from "../components/PublishedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full text-black px-4 bg-slate-200">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <PublishedProjects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
