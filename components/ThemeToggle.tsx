
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
