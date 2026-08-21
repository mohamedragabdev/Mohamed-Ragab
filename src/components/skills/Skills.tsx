import React from 'react';
import { Server, Database, ShieldCheck, Radio, Cpu, Layout, Wrench } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Backend':
      return <Server className="w-4 h-4 text-sky-500" />;
    case 'Databases & Storage':
      return <Database className="w-4 h-4 text-emerald-500" />;
    case 'Auth & Security':
      return <ShieldCheck className="w-4 h-4 text-indigo-500" />;
    case 'Real-Time':
      return <Radio className="w-4 h-4 text-rose-500" />;
    case 'AI / RAG':
      return <Cpu className="w-4 h-4 text-amber-500" />;
    case 'Frontend':
      return <Layout className="w-4 h-4 text-purple-500" />;
    case 'Tools & DevOps':
    default:
      return <Wrench className="w-4 h-4 text-slate-500" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>02 // Stack &amp; Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Core technologies and tools utilized across production healthcare platforms, REST API architectures, and AI vector retrieval systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((categoryGroup, index) => {
            const isPriority = index < 2; // Backend and Databases highlighted
            return (
              <div
                key={categoryGroup.category}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  isPriority
                    ? 'bg-white dark:bg-bg-dark-card border-slate-300/90 dark:border-slate-700 shadow-sm'
                    : 'bg-white/70 dark:bg-bg-dark-card/60 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      {categoryGroup.category}
                      {isPriority && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                          Primary Focus
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {categoryGroup.description}
                </p>

                {/* Skill Chips with Micro-Interactions */}
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-brand-400 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-[1.02] transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
