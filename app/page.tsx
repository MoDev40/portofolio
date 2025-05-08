"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
