import React from "react";
import { PROFILE } from "../constants";
import { MapPin, Briefcase, Calendar } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[10%] w-16 h-16 border border-blue-400/20 rounded-xl rotate-12 animate-float"></div>
      <div className="absolute bottom-32 left-[5%] w-12 h-12 bg-indigo-500/10 rounded-lg rotate-45 animate-float-slow"></div>
      <div className="absolute top-1/2 right-[5%] w-8 h-8 border border-purple-400/10 rounded-full animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
              Introduction
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{PROFILE.about}</p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin size={22} />
                </div>
                <span className="font-medium">{PROFILE.location}</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Calendar size={22} />
                </div>
                <span className="font-medium">{PROFILE.experience}</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 mr-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Briefcase size={22} />
                </div>
                <span className="font-medium">Distributed Systems & AI Focused</span>
              </div>
            </div>
          </div>
          <div className="relative group perspective-container">
            {/* Animated glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-gradient"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

            {/* Profile image with 3D effect */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100 dark:bg-slate-800 rotate-3d shadow-2xl">
              <img
                src="/images/minhkha.jpg"
                alt="Vo Minh Kha"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
