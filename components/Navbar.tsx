import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI & Microservices", href: "#highlights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Kha Portfolio
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
