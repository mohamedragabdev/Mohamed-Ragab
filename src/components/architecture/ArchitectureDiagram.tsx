import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Database, Cpu, Server, Layout } from 'lucide-react';
import { architectureNodes } from '../../data/portfolioData';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('laravel');
  const [showAccessibleView, setShowAccessibleView] = useState(false);

  const selectedNode = architectureNodes.find((n) => n.id === selectedNodeId) || architectureNodes[1];

  return (
    <section id="architecture" className="py-20 bg-slate-50/50 dark:bg-bg-dark-elevated/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              <span>05 // System Topology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              GlucoRAG Architecture Visualization
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              End-to-end multi-service pipeline connecting React client, authenticated Laravel orchestration, FastAPI retrieval microservice, and dual database layers.
            </p>
          </div>

          <button
            onClick={() => setShowAccessibleView(!showAccessibleView)}
            className="self-start md:self-end px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {showAccessibleView ? 'Show Visual Flow' : 'Show Screen-Reader Table'}
          </button>
        </div>

        {/* Accessible Linear Pipeline Table */}
        {showAccessibleView ? (
          <div className="p-6 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono">
              Linear Request &amp; Retrieval Flow
            </h3>
            <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {architectureNodes.map((node, i) => (
                <li key={node.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="font-mono font-bold text-brand-600 dark:text-brand-400 mr-2">
                    Step {i + 1}: {node.label} ({node.subtitle})
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{node.role}</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">Tech: {node.tech.join(', ')}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          /* Visual Diagram Interface */
          <div className="space-y-6">
            {/* Interactive Flow Canvas */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="text-xs font-mono text-slate-400 mb-6 flex items-center justify-between">
                <span>REQUEST &amp; RETRIEVAL FLOW (CLICK NODE TO INSPECT)</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Data-Flow Active
                </span>
              </div>

              {/* Desktop & Tablet Layout (Horizontal Left -> Right Flow) */}
              <div className="hidden md:flex items-center justify-between gap-2.5 relative py-4">
                {/* Node 1: React Client */}
                <button
                  onClick={() => setSelectedNodeId('frontend')}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 relative ${
                    selectedNodeId === 'frontend'
                      ? 'border-brand-500 bg-brand-500/5 dark:bg-brand-500/10 ring-2 ring-brand-500 shadow-md scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2">
                    <Layout className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                    React + TS
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    Clinician UI
                  </p>
                </button>

                {/* Arrow 1 with pulse flow */}
                <div className="flex items-center justify-center text-slate-400 shrink-0">
                  <ArrowRight className="w-4 h-4 text-brand-500" />
                </div>

                {/* Node 2: Laravel API */}
                <button
                  onClick={() => setSelectedNodeId('laravel')}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 relative ${
                    selectedNodeId === 'laravel'
                      ? 'border-brand-500 bg-brand-500/5 dark:bg-brand-500/10 ring-2 ring-brand-500 shadow-md scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mb-2">
                    <Server className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                    Laravel API
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    Auth &amp; Queue
                  </p>
                </button>

                {/* Arrow 2 */}
                <div className="flex items-center justify-center text-slate-400 shrink-0">
                  <ArrowRight className="w-4 h-4 text-brand-500" />
                </div>

                {/* Node 3: FastAPI */}
                <button
                  onClick={() => setSelectedNodeId('fastapi')}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 relative ${
                    selectedNodeId === 'fastapi'
                      ? 'border-brand-500 bg-brand-500/5 dark:bg-brand-500/10 ring-2 ring-brand-500 shadow-md scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                    FastAPI
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    LangChain RAG
                  </p>
                </button>

                {/* Arrow 3 */}
                <div className="flex items-center justify-center text-slate-400 shrink-0">
                  <ArrowRight className="w-4 h-4 text-brand-500" />
                </div>

                {/* Node 4: Storage */}
                <button
                  onClick={() => setSelectedNodeId('storage')}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 relative ${
                    selectedNodeId === 'storage'
                      ? 'border-brand-500 bg-brand-500/5 dark:bg-brand-500/10 ring-2 ring-brand-500 shadow-md scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                    pgvector &amp; MySQL
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    Dual Stores
                  </p>
                </button>

                {/* Arrow 4 */}
                <div className="flex items-center justify-center text-slate-400 shrink-0">
                  <ArrowRight className="w-4 h-4 text-brand-500" />
                </div>

                {/* Node 5: LLM */}
                <button
                  onClick={() => setSelectedNodeId('llm')}
                  className={`flex-1 p-4 rounded-xl border text-left transition-all duration-200 relative ${
                    selectedNodeId === 'llm'
                      ? 'border-brand-500 bg-brand-500/5 dark:bg-brand-500/10 ring-2 ring-brand-500 shadow-md scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                    OpenRouter
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    Grounded LLM
                  </p>
                </button>
              </div>

              {/* Mobile Layout (< 768px: Vertical Stacked Flow) */}
              <div className="md:hidden flex flex-col space-y-2">
                {architectureNodes.map((node, i) => (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selectedNodeId === node.id
                          ? 'border-brand-500 bg-brand-500/10 ring-1 ring-brand-500'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-500 flex items-center justify-center text-xs font-mono font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">
                            {node.label}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {node.subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400">Inspect</span>
                    </button>

                    {i < architectureNodes.length - 1 && (
                      <div className="flex justify-center py-0.5 text-brand-500">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Selected Node Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-bg-dark-card border border-brand-500/30 dark:border-brand-500/30 shadow-md ring-1 ring-brand-500/10 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-brand-600 dark:text-brand-400">
                    Inspecting Component
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {selectedNode.label}
                    <span className="text-xs font-normal font-mono text-slate-500 dark:text-slate-400">
                      ({selectedNode.subtitle})
                    </span>
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    System Responsibility:
                  </h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {selectedNode.role}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Technical Implementation Details:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedNode.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Database Architecture Visualization (Section 19.2) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-semibold uppercase text-brand-600 dark:text-brand-400">
                  Section 19.2 // Storage Separation
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Database Architecture: Relational vs. Vector Storage
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Deliberate architectural decision separating transactional user/session data from high-dimensional vector search.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Store 1: MySQL */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-sky-200 dark:border-sky-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-mono font-bold text-xs uppercase">
                    <Database className="w-4 h-4" />
                    <span>Application Database (MySQL)</span>
                  </div>
                  
                  <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-2 border-l-2 border-sky-400 dark:border-sky-600">
                    <div>User</div>
                    <div className="pl-3">└── Conversation</div>
                    <div className="pl-6">└── Message</div>
                    <div className="pl-9">└── Message Citation</div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Enforces strict per-user ownership and <span className="font-mono">onDelete('cascade')</span> across all relational tiers.
                  </p>
                </div>

                {/* Store 2: Supabase pgvector */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-emerald-200 dark:border-emerald-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs uppercase">
                    <Cpu className="w-4 h-4" />
                    <span>Vector Store (Supabase / pgvector)</span>
                  </div>
                  
                  <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-2 border-l-2 border-emerald-400 dark:border-emerald-600">
                    <div>Document (Guideline PDF)</div>
                    <div className="pl-3">└── Chunk (800 chars, 150 overlap)</div>
                    <div className="pl-6">└── Embedding (vector(1536))</div>
                    <div className="pl-9">└── Similarity Search (ivfflat, cosine)</div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Decoupled index used solely for guideline retrieval via <span className="font-mono">match_document_chunks()</span> RPC.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};
