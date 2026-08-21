import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span>10 // Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's build something worth shipping.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Interested in backend engineering, Laravel architectures, or RAG systems? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium text-sm">
                  <Mail className="w-4 h-4 text-brand-500" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm font-mono text-brand-600 dark:text-brand-400 hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    LinkedIn Profile
                  </h3>
                  <p className="text-xs font-mono text-slate-500">linkedin.com/in/mohamed-rragab</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                    GitHub Codebase
                  </h3>
                  <p className="text-xs font-mono text-slate-500">github.com/mohamedragabdev</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-bg-dark-elevated/40 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>Location: {personalInfo.location} (UTC+2/UTC+3)</span>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-500" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pre-populates an email directly to Mohamed Ragab.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    Email Client Triggered!
                  </p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    If your email client didn't open automatically, send directly to <span className="font-mono">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono underline text-emerald-800 dark:text-emerald-300 mt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-bg-dark-elevated text-slate-900 dark:text-white text-sm focus:border-brand-500 dark:focus:border-brand-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-bg-dark-elevated text-slate-900 dark:text-white text-sm focus:border-brand-500 dark:focus:border-brand-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Mohamed, I'd like to discuss a backend engineering opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-bg-dark-elevated text-slate-900 dark:text-white text-sm focus:border-brand-500 dark:focus:border-brand-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm shadow-sm flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
