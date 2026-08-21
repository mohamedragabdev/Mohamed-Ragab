import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, CheckCircle2, Shield, Database, Cpu, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoExists, setPhotoExists] = useState(true);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none -z-10" />
      
      {/* Ambient radial accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Text Column (8 cols on desktop) */}
          <div className="lg:col-span-8 space-y-6 animate-fade-up">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Backend &amp; Full-Stack Roles</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline H1 + Subheadline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                {personalInfo.heroH1}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-brand-600 dark:text-brand-400 font-mono">
                {personalInfo.heroSubheadline}
              </p>
            </div>

            {/* Supporting statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.heroSupporting}
            </p>

            {/* Technical highlight badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-500" />
                PHP &amp; Laravel REST APIs
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-brand-500" />
                MySQL &amp; Supabase/pgvector
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-500" />
                Medical RAG Architecture
              </span>
            </div>

            {/* Actions & Social Links */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Primary & Secondary CTAs */}
              <div className="flex items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-150 focus-visible:ring-2 focus-visible:ring-brand-500 group"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/assets/resume/Mohamed_Ragab_CV.pdf"
                  download="Mohamed_Ragab_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-bg-dark-elevated text-slate-800 dark:text-slate-200 font-medium text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-brand-500"
                  title="Download Mohamed Ragab's Resume"
                >
                  <Download className="w-4 h-4 text-brand-500" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-2 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-bg-dark-elevated transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: mohamedragabdev"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-bg-dark-elevated transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: mohamed-rragab"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-bg-dark-elevated transition-colors"
                  aria-label="Send Email"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono px-2.5 py-1.5 rounded border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-400 dark:border-slate-500 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <span>Copy email</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Framing (4 cols on desktop) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft radial glow behind frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 via-brand-400/10 to-teal-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Technical decorative ring / frame border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-2 transition-transform duration-300 group-hover:scale-[1.02]">
                
                {/* Photo container */}
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 relative flex items-center justify-center">
                  {photoExists ? (
                    <img
                      src="/profile-photo.jpeg"
                      alt="Mohamed Ragab — Backend & Laravel Developer"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('/profile-photo.jpeg')) {
                          target.src = '/assets/profile-photo.jpeg';
                        } else if (target.src.endsWith('/assets/profile-photo.jpeg')) {
                          target.src = '/assets/profile-photo.jpg';
                        } else {
                          setPhotoExists(false);
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback: Engineering Initials Frame */}
                  {!photoExists && (
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700 flex items-center justify-center text-brand-400 font-mono font-bold text-3xl shadow-inner">
                        MR
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-mono block">
                          Mohamed Ragab
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          Backend &amp; Laravel
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Subtle technical corner accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-brand-500/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-brand-500/60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-brand-500/60 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-brand-500/60 pointer-events-none" />
                </div>
              </div>

              {/* Engineering Orbit Tag */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-md bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-md text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                <span>Laravel + RAG</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
