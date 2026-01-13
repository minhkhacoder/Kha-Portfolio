import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
