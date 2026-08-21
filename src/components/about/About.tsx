import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-bg-dark-elevated/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>01 // Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About &amp; Engineering Focus
          </h2>
        </div>

        {/* Compact Highlight Tags Row */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {personalInfo.aboutHighlights.map((hl) => (
            <div
              key={hl.label}
              className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 text-xs shadow-sm flex items-center gap-2 hover:border-brand-500/50 transition-colors"
            >
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">
                {hl.label}:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {hl.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {personalInfo.aboutParagraphs.map((p, idx) => (
              <p key={idx} className="text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}

            <div className="pt-2">
              <a
                href="#glucorag"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-500 transition-colors group"
              >
                <span>Read the GlucoRAG architectural deep-dive</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Summary Pill Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Core Technical Strengths
            </h3>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>REST API Architecture &amp; Service Layer separation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Full-Stack product delivery (Laravel, Blade, JS, Reverb)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Decoupled Relational (MySQL) &amp; Vector (pgvector) storage</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Fail-closed deterministic RAG citations &amp; safety scoping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
