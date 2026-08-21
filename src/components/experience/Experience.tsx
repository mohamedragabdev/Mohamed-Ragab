import React from 'react';
import { Calendar, MapPin, ExternalLink, CheckCircle2, Server, Database, Radio, Shield, Layout } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-bg-dark-elevated/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>03 // Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Software engineering roles across production healthcare platforms and backend service delivery.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-12 pl-6 sm:pl-8">
          {experienceData.map((exp) => {
            const isShifago = exp.company === 'Shifago';

            return (
              <div key={exp.company} className="relative group">
                {/* Timeline Node Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-bg-dark border-2 border-brand-500 shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 space-y-5">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                          {exp.role}
                        </h3>
                        <span className="text-slate-400 font-mono text-sm">@</span>
                        <span className="text-base sm:text-lg font-semibold text-brand-600 dark:text-brand-400">
                          {exp.company}
                        </span>
                        {exp.ownershipNote && (
                          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            {exp.ownershipNote}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-600 dark:text-brand-400 hover:underline bg-brand-50 dark:bg-brand-950/40 px-3 py-1.5 rounded-lg border border-brand-200 dark:border-brand-900/60 self-start"
                      >
                        <span>shifago.health</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Shifago Capability Tag Row */}
                  {exp.capabilities && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    {exp.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Shifago Abstract Architecture Visualization */}
                  {isShifago && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/70 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="uppercase font-semibold">Shifago System Topology:</span>
                        <span className="text-[10px] text-emerald-500">Live Production</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                        <div className="p-2 rounded bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-700">
                          <Layout className="w-3.5 h-3.5 mx-auto text-purple-500 mb-1" />
                          <span className="block font-bold">Blade &amp; JS</span>
                          <span className="text-[10px] text-slate-400">UI / Views</span>
                        </div>
                        <div className="p-2 rounded bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-700">
                          <Server className="w-3.5 h-3.5 mx-auto text-sky-500 mb-1" />
                          <span className="block font-bold">Laravel API</span>
                          <span className="text-[10px] text-slate-400">REST Endpoints</span>
                        </div>
                        <div className="p-2 rounded bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-700">
                          <Database className="w-3.5 h-3.5 mx-auto text-emerald-500 mb-1" />
                          <span className="block font-bold">MySQL</span>
                          <span className="text-[10px] text-slate-400">Healthcare DB</span>
                        </div>
                        <div className="p-2 rounded bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-700">
                          <Shield className="w-3.5 h-3.5 mx-auto text-indigo-500 mb-1" />
                          <span className="block font-bold">Sanctum</span>
                          <span className="text-[10px] text-slate-400">Auth &amp; RBAC</span>
                        </div>
                        <div className="p-2 rounded bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-700 col-span-2 sm:col-span-1">
                          <Radio className="w-3.5 h-3.5 mx-auto text-rose-500 mb-1" />
                          <span className="block font-bold">Reverb</span>
                          <span className="text-[10px] text-slate-400">Real-Time Events</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tech stack chips */}
                  {exp.technologies && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
