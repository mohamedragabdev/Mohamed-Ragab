import React from 'react';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const GithubSection: React.FC = () => {
  const repositories = [
    {
      name: 'glucoRag',
      url: 'https://github.com/mohamedragabdev/glucoRag',
      description: 'Medical RAG system for Type 2 Diabetes screening guidance with Laravel API orchestration, FastAPI retrieval, and Supabase/pgvector vector storage.',
      tech: ['Laravel', 'FastAPI', 'pgvector', 'LangChain', 'React', 'TypeScript'],
      badge: 'Flagship'
    },
    {
      name: 'ecommerce-api',
      url: 'https://github.com/mohamedragabdev/ecommerce-api',
      description: 'Role-based e-commerce REST API built with Laravel Sanctum, layered service architecture, event-driven email notifications, and database seeders.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Sanctum', 'REST API'],
      badge: 'Backend'
    },
    {
      name: 'taskaty',
      url: 'https://github.com/mohamedragabdev/taskaty',
      description: 'Task management web application with priority tracking, category segmentation, and full CRUD operations.',
      tech: ['Laravel', 'PHP', 'Blade', 'Bootstrap', 'MySQL'],
      badge: 'Full-Stack'
    }
  ];

  return (
    <section id="github" className="py-20 bg-slate-50/50 dark:bg-bg-dark-elevated/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              <span>07 // Open Source &amp; Code</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              GitHub Repositories
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Source code, backend APIs, and engineering implementations available for public review.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors self-start sm:self-end"
          >
            <Github className="w-4 h-4" />
            <span>github.com/mohamedragabdev</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-brand-500" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {repo.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {repo.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
