import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [logoExists, setLogoExists] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-bg-dark py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            {logoExists ? (
              <img
                src="/assets/logo.svg"
                alt="Mohamed Ragab"
                className="w-7 h-7 object-contain rounded-md"
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
              <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 font-mono font-bold text-xs shadow-sm">
                MR
              </div>
            )}

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                  {personalInfo.name}
                </span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {personalInfo.title}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Built with React, TypeScript &amp; Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-[11px] font-mono text-slate-400">
          © {new Date().getFullYear()} Mohamed Ragab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
