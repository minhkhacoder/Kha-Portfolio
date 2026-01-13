import React from "react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A glimpse into some of the complex systems I've architected and implemented.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-container">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-full bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 card-3d"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="relative p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
