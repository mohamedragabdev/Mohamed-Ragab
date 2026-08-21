import React, { useState } from 'react';
import {
  ShieldAlert,
  Database,
  Cpu,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Github,
  ArrowUpRight,
  Sparkles,
  UserCheck,
  Bot,
  Award,
  Server
} from 'lucide-react';
import { glucoRagDetails } from '../../data/portfolioData';

export const GlucoRagCaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'backend' | 'database' | 'safety' | 'evaluation'>('pipeline');

  return (
    <section id="glucorag" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header & AI Hackathon Connection Badge */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>06 // Flagship Case Study</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800">
              <Award className="w-3.5 h-3.5" />
              AI Hackathon 2026 Participant
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                GlucoRAG: Medical RAG System
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 mt-1">
                Guideline-grounded Type 2 Diabetes screening retrieval for primary-care clinicians.
              </p>
            </div>

            <a
              href="https://github.com/mohamedragabdev/glucoRag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs font-mono font-medium shadow-sm transition-colors self-start sm:self-center"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* AI Hackathon 2026 Origin Callout */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-50/60 via-sky-50/40 to-emerald-50/30 dark:from-bg-dark-card dark:via-bg-dark-elevated dark:to-bg-dark-card border border-brand-200/80 dark:border-brand-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              <span className="text-xs font-mono font-bold uppercase text-brand-700 dark:text-brand-300">
                {glucoRagDetails.hackathonInfo.title} — {glucoRagDetails.hackathonInfo.role} ({glucoRagDetails.hackathonInfo.period})
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Organized in partnership with <span className="font-semibold">{glucoRagDetails.hackathonInfo.partners}</span>. GlucoRAG was engineered as the hands-on project for this program.
            </p>
          </div>
        </div>

        {/* 01 Problem & 02 Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              01 // Clinical Problem
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {glucoRagDetails.problem}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4" />
              02 // Retrieval-First Solution
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {glucoRagDetails.solution}
            </p>
          </div>
        </div>

        {/* 10 My Contribution Split Matrix */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase">
              <span>Section 18.4 // Verified Attribution</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              System Ownership &amp; Contribution Split
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Honest, transparent separation between personally engineered backend infrastructure vs. AI-assisted components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personally Built */}
            <div className="p-5 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/60 space-y-4">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                <UserCheck className="w-5 h-5" />
                <h4 className="text-sm font-bold font-mono uppercase tracking-wide">
                  Designed &amp; Built Personally
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {glucoRagDetails.contributions.personallyBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Assisted */}
            <div className="p-5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/60 space-y-4">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Bot className="w-5 h-5" />
                <h4 className="text-sm font-bold font-mono uppercase tracking-wide">
                  Built with AI-Assisted Dev (Google Antigravity)
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {glucoRagDetails.contributions.aiAssisted.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Dive Tabs: Pipeline | Backend | Database | Safety | Evaluation */}
        <div className="space-y-6">
          {/* Tab Selection */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-bg-dark-elevated border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              06 // RAG Pipeline (6 Steps)
            </button>

            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'backend'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              04 // Laravel Backend &amp; Queue
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'database'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              05 // Dual Database Architecture
            </button>

            <button
              onClick={() => setActiveTab('safety')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'safety'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              08 // Fail-Closed Safety Policy
            </button>

            <button
              onClick={() => setActiveTab('evaluation')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'evaluation'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200 dark:border-slate-700 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              09 // Evaluation Dimensions
            </button>
          </div>

          {/* Tab 1: RAG Pipeline */}
          {activeTab === 'pipeline' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
              {glucoRagDetails.pipelineSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-2 hover:border-brand-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 font-mono text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Step {step.step}/6</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Backend & Queue */}
          {activeTab === 'backend' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
              {glucoRagDetails.backendHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
                    <Server className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {hl.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {hl.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Dual Database Architecture */}
          {activeTab === 'database' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {/* MySQL App DB */}
              <div className="p-6 rounded-xl bg-white dark:bg-bg-dark-card border border-sky-200 dark:border-sky-900/60 shadow-sm space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-sky-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {glucoRagDetails.databaseArchitecture.appDb.name}
                      </h4>
                      <span className="text-xs font-mono text-sky-600 dark:text-sky-400">
                        {glucoRagDetails.databaseArchitecture.appDb.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {glucoRagDetails.databaseArchitecture.appDb.purpose}
                </p>

                <div className="p-2 rounded bg-sky-50/50 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-900/40 text-[11px] font-mono text-sky-800 dark:text-sky-300">
                  ● {glucoRagDetails.databaseArchitecture.appDb.cascadeRule}
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                    Relational Tables:
                  </span>
                  <div className="space-y-1.5 font-mono text-xs">
                    {glucoRagDetails.databaseArchitecture.appDb.tables.map((t) => (
                      <div
                        key={t.name}
                        className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <span className="text-sky-600 dark:text-sky-400 font-bold">{t.name}</span>
                        <span className="text-[11px] text-slate-500">{t.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Supabase pgvector DB */}
              <div className="p-6 rounded-xl bg-white dark:bg-bg-dark-card border border-emerald-200 dark:border-emerald-900/60 shadow-sm space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {glucoRagDetails.databaseArchitecture.vectorDb.name}
                      </h4>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {glucoRagDetails.databaseArchitecture.vectorDb.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {glucoRagDetails.databaseArchitecture.vectorDb.purpose}
                </p>

                <div className="p-2 rounded bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-[11px] font-mono text-emerald-800 dark:text-emerald-300">
                  ● {glucoRagDetails.databaseArchitecture.vectorDb.cascadeRule}
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                    Vector Storage &amp; Similarity Index:
                  </span>
                  <div className="space-y-1.5 font-mono text-xs">
                    {glucoRagDetails.databaseArchitecture.vectorDb.tables.map((t) => (
                      <div
                        key={t.name}
                        className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t.name}</span>
                        <span className="text-[11px] text-slate-500">{t.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Safety */}
          {activeTab === 'safety' && (
            <div className="p-6 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h4 className="text-sm font-bold font-mono uppercase tracking-wide">
                  Fail-Closed Scope Policy (Refusal Codes)
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Strict software safety architecture enforcing screening boundaries without risking medical hallucinations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {glucoRagDetails.safetyRules.map((rule) => (
                  <div
                    key={rule.code}
                    className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {rule.category}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400">
                        {rule.code}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {rule.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Evaluation */}
          {activeTab === 'evaluation' && (
            <div className="p-6 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-sm font-bold font-mono uppercase tracking-wide text-slate-900 dark:text-white">
                  Evaluation Framework &amp; Validation Dimensions
                </h4>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Target Dimensions from EVALUATION.md / eval_dataset.json
                </span>
              </div>

              <div className="space-y-2">
                {glucoRagDetails.evaluationDimensions.map((evalDim) => (
                  <div
                    key={evalDim.dimension}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                        {evalDim.dimension}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {evalDim.description}
                      </span>
                      <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400 block mt-0.5">
                        {evalDim.target}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 shrink-0 self-start">
                      {evalDim.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
