import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/navigation/ScrollProgress';
import { CursorSpotlight } from './components/layout/CursorSpotlight';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { GlucoRagCaseStudy } from './components/glucorag/GlucoRagCaseStudy';
import { ArchitectureDiagram } from './components/architecture/ArchitectureDiagram';
import { GithubSection } from './components/github/GithubSection';
import { Education } from './components/education/Education';
import { Leadership } from './components/leadership/Leadership';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  // Theme state: dark mode as default, check localStorage or system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark mode per specification Section 13
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 relative">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient Cursor Spotlight (Desktop fine pointer only) */}
      <CursorSpotlight />

      {/* 1. Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Area */}
      <main className="flex-grow z-10">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Technical Skills */}
        <Skills />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Featured Projects */}
        <Projects />

        {/* 7. GlucoRAG Case Study */}
        <GlucoRagCaseStudy />

        {/* 8. Architecture & Database Visualization */}
        <ArchitectureDiagram />

        {/* 9. GitHub */}
        <GithubSection />

        {/* 10. Education */}
        <Education />

        {/* 11. Leadership / Additional Experience */}
        <Leadership />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
};

export default App;
