import { Header } from "@/components/common/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Journey } from "@/components/sections/Journey";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Hero />
        <FeaturedProjects />
        <Journey />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
