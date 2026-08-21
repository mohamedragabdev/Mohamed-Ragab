import React from 'react';
import { Github, ExternalLink, ArrowRight, Check, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.category === 'featured');
  const secondaryProjects = projectsData.filter((p) => p.category === 'secondary');

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>04 // Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Selected backend, full-stack, and RAG architectures demonstrating database design, API design, and system-level execution.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-8">
          {featuredProjects.map((project) => {
            const isGlucoRag = project.id === 'glucorag';
            const isShifago = project.id === 'shifago';

            return (
              <article
                key={project.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  isGlucoRag
                    ? 'bg-gradient-to-b from-white to-slate-50/80 dark:from-bg-dark-card dark:to-bg-dark-elevated/80 border-brand-500/40 dark:border-brand-500/40 shadow-md ring-1 ring-brand-500/15'
                    : 'bg-white dark:bg-bg-dark-card border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold uppercase">
                        {isGlucoRag ? 'Flagship Architecture' : isShifago ? 'Healthcare Platform' : 'Backend REST API'}
                      </span>
                      
                      {project.badge && (
                        <>
                          <span className="text-slate-300 dark:text-slate-700">|</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                            {isGlucoRag && <Sparkles className="w-3 h-3 text-brand-500" />}
                            {project.badge}
                          </span>
                        </>
                      )}
                      
                      <span className="text-slate-300 dark:text-slate-700">|</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {project.ownership}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-800/80 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-medium shadow-sm transition-colors"
                        title="Visit Live Application"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {isGlucoRag && (
                      <a
                        href="#glucorag"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-mono font-medium shadow-sm transition-all group"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem / Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase text-rose-600 dark:text-rose-400 tracking-wider">
                      The Challenge / Problem
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                      Engineered Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Architectural Highlights */}
                {project.keyFeatures && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Key Implementation Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.map((feat, featIdx) => (
                        <div key={featIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Secondary Project (Taskaty) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-4">
              Additional Project Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="p-6 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {project.tagline}
                      </p>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        title="GitHub repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
