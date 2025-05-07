"use client";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import HomeHero from "./_component/HomeHero";
import Projects from "./_component/Projects";
import Skills from "./_component/Skills";

const page = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default page;
