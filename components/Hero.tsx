import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../constants";

const Hero: React.FC = () => {
  const roles = ["Fullstack Developer", "Microservices Architect", "AI Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Floating Geometric Shapes */}
      <div className="absolute top-32 right-[15%] w-20 h-20 border-2 border-blue-400/30 rounded-xl animate-float rotate-12"></div>
      <div className="absolute top-48 right-[25%] w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg animate-float-slow rotate-45"></div>
      <div className="absolute bottom-32 right-[20%] w-16 h-16 border-2 border-indigo-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-40 left-[8%] w-8 h-8 bg-blue-500/20 rounded-md animate-float-slow rotate-[30deg]"></div>
      <div className="absolute bottom-48 left-[15%] w-14 h-14 border border-purple-400/20 rounded-xl animate-float rotate-[60deg]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-scale"></div>
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-scale stagger-2"></div>
      <div className="absolute top-1/2 right-[10%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {PROFILE.fullName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed h-8">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              {displayText}
            </span>
            <span className="animate-pulse text-blue-600">|</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <div className="flex items-center space-x-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
