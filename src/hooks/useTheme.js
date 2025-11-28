import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('forest');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'forest' ? 'bright' : 'forest'));
  };

  const getThemeClasses = () => {
    if (theme === 'forest') {
      return {
        bg: 'bg-stone-50',
        text: 'text-stone-800',
        primary: 'bg-emerald-900 text-white',
        primaryText: 'text-emerald-900',
        accent: 'bg-emerald-600 text-white',
        accentHover: 'hover:bg-emerald-700',
        accentText: 'text-emerald-600',
        card: 'bg-white',
        border: 'border-stone-200',
        navbar: 'bg-white',
        footer: 'bg-stone-800 text-stone-200',
        button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        buttonOutline: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50',
      };
    } else {
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-900',
        primary: 'bg-blue-600 text-white',
        primaryText: 'text-blue-600',
        accent: 'bg-orange-500 text-white',
        accentHover: 'hover:bg-orange-600',
        accentText: 'text-orange-500',
        card: 'bg-white',
        border: 'border-slate-200',
        navbar: 'bg-white',
        footer: 'bg-slate-800 text-slate-200',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        buttonOutline: 'border-blue-600 text-blue-600 hover:bg-blue-50',
      };
    }
  };

  return { theme, toggleTheme, getThemeClasses };
};
