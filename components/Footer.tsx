import React from "react";
import { PROFILE } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PROFILE.fullName}
          </div>
          <div className="flex space-x-8">
            <a href="#about" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
              About
            </a>
            <a href="#projects" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
