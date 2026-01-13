import React from "react";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit focused on modern web architectures, distributed processing, and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 perspective-container">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className={`card-3d p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group hover:shadow-2xl hover:shadow-blue-500/10 stagger-${
                (index % 5) + 1
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-600 dark:text-slate-400 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
