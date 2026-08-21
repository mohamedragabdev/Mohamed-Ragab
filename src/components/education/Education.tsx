import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>08 // Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Engineering foundation supporting software systems, algorithmic thinking, and architectural rigor.
          </p>
        </div>

        {/* Education Card */}
        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                      {edu.degree} — {edu.department}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {edu.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
