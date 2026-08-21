import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';
import { leadershipData } from '../../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-50/50 dark:bg-bg-dark-elevated/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>09 // Leadership &amp; Honors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Leadership &amp; Certifications
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Community leadership, team coordination, and competitive program achievements.
          </p>
        </div>

        {/* Grid of Leadership & Honors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => {
            const isHonor = item.type === 'honor';
            const isLeadership = item.type === 'leadership';

            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all ${
                  isHonor
                    ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/60'
                    : 'bg-white dark:bg-bg-dark-card border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isHonor
                          ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400'
                          : isLeadership
                          ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {isHonor ? (
                        <Trophy className="w-4 h-4" />
                      ) : isLeadership ? (
                        <Users className="w-4 h-4" />
                      ) : (
                        <Award className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
