import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [logoExists, setLogoExists] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'experience', 'projects', 'glucorag', 'architecture', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'GlucoRAG', href: '#glucorag' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-bg-dark/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            aria-label="Mohamed Ragab Home"
          >
            {logoExists ? (
              <img
                src="/assets/logo.svg"
                alt="Mohamed Ragab Logo"
                className="w-8 h-8 object-contain rounded-md"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('/assets/logo.svg')) {
                    target.src = '/assets/logo.png';
                  } else {
                    setLogoExists(false);
                  }
                }}
              />
            ) : null}

            {!logoExists && (
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 border border-slate-700 dark:border-slate-700/80 flex items-center justify-center text-brand-400 font-mono font-bold text-sm shadow-sm group-hover:border-brand-500 transition-colors">
                MR
              </div>
            )}

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-brand-500 transition-colors">
                Mohamed Ragab
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                Backend / Laravel
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Resume / Download CV CTA */}
            <a
              href="/assets/resume/Mohamed_Ragab_CV.pdf"
              download="Mohamed_Ragab_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              title="Download Mohamed Ragab's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-brand-500" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-2 bg-white dark:bg-bg-dark-elevated rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-3">
              <a
                href="/assets/resume/Mohamed_Ragab_CV.pdf"
                download="Mohamed_Ragab_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-brand-600 dark:text-brand-400 font-medium hover:underline flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-brand-600 dark:text-brand-400 font-medium hover:underline"
              >
                Contact &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
