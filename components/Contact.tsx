import React from "react";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../constants";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-500/10 rounded-full border border-blue-200 dark:border-blue-500/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your project to life? I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <a
            href={`mailto:${PROFILE.email}`}
            className="group p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-5 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
              Email Me
              <ArrowUpRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm break-all">{PROFILE.email}</p>
          </a>

          {/* Location Card */}
          <div className="p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-5">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{PROFILE.location}</p>
          </div>

          {/* Social Card */}
          <div className="p-6 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white mb-5">
              <span className="text-xl font-bold">#</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-[#0077b5] hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
