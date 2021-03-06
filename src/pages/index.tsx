import React from "react";
import Layout from "src/components/Layout";
import ApresentationSection from "src/components/ApresentationSection";
import About from "src/sections/about";
import Nav from "src/components/Nav";
import Projects from "src/sections/projects";
import Technologies from "src/sections/technologies";
import Contact from "src/sections/contact";
import Footer from "src/components/Footer";
import { useTitle } from "react-use";

const Home: React.FC = () => {
  useTitle("Danilo de Jesus");

  return (
    <Layout>
      <ApresentationSection />
      <Nav />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
