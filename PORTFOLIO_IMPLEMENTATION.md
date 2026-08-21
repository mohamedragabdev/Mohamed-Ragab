# Portfolio Implementation Specification (v2)

**Prepared for:** Google Antigravity (implementation agent)
**Prepared by:** Portfolio strategy & design review of Mohamed Ragab's CV and GlucoRAG project documentation
**Subject:** Mohamed Ragab — Backend / Laravel Developer Portfolio
**Status:** Full replacement of the previous `PORTFOLIO_IMPLEMENTATION.md`

> This document is a **specification, not code**. It tells Antigravity *what* to build, *why*, and *exactly how it should look and feel*. Antigravity is responsible for inspecting the existing project (if one exists), reusing its framework/structure, and implementing this specification within it. Where this document defines a visual or motion detail, that detail is a requirement, not a suggestion — the goal is to remove ambiguity so Antigravity does not have to make major creative decisions on its own.

---

## 0. What "Premium" Means Here

The previous version of this portfolio produced a competent, clean site. This version's job is to make it feel like a **premium, memorable, technically sophisticated personal brand** — something a senior engineering hiring manager would remember after closing the tab.

The site must feel like:
- A high-end individual software engineer's portfolio
- A modern SaaS/product marketing site's level of polish
- Technically credible — like it was built by someone who reads API docs for fun
- Calm and precise, not loud

The site must **not** feel like:
- A generic template or "AI-generated portfolio" look
- A stock Tailwind landing page with default components
- A wall of unlabeled cards
- An over-designed gaming/neon site
- A site full of decorative animation with no purpose

Every visual and motion decision below exists to reinforce one of these words: **Engineering, Precision, Systems, AI, Healthcare, Modern Software.** If a proposed effect doesn't serve one of those words, don't add it.

---

## 1. Non-Negotiable Content Rules

These rules override every other instruction in this document, including any visual ambition described later.

1. **Do not invent** experience, technologies, projects, awards, metrics, companies, responsibilities, achievements, user counts, revenue, performance benchmarks, or certifications not present in the source material (`Mohamed_Ragab_CV.docx`, `API_CONTRACT.md`, `DEPLOYMENT.md`, `EVALUATION.md`, `eval_dataset.json`, `RAG_SOURCES.md`, `RUNBOOK.md`, `POSTMAN_COLLECTION.json`, `POSTMAN_RUNBOOK.md`).
2. **Do not fabricate assets.** No AI-generated profile photo, no AI-generated logo, no fabricated project screenshots. If an asset is missing, use a clearly-labeled placeholder or an abstract, data-accurate visualization instead — never a fake photo of "the product."
3. **Do not fabricate evaluation results.** `EVALUATION.md` and `eval_dataset.json` define evaluation *dimensions and targets*, not achieved scores. No numeric results currently exist — show methodology, not invented numbers.
4. **Do not claim hackathon outcomes** (winner, finalist, ranking, prize) unless the user explicitly confirms one. Only "Participant, AI Hackathon 2026" is verified.
5. **Do not blend ownership.** GlucoRAG's Laravel backend, database, and vector-storage infrastructure were personally designed and built by Mohamed. The FastAPI RAG service, LangChain pipeline, React/TypeScript frontend, and evaluation/safety harness were built with AI-assisted development (Google Antigravity). This split must always be visible, never merged into one undifferentiated "I built this" narrative.
6. Visual creativity is encouraged everywhere; **factual claims are not** a place for creativity.

---

## 2. Professional Positioning

**Primary identity:** Backend / Laravel Developer
**Secondary identity:** Full-Stack Developer
**Differentiator:** AI/RAG Application Development (system architecture + backend ownership — not "I built an LLM")

**Hero headline (H1):**
> Mohamed Ragab — Backend & Laravel Developer

**Hero subheadline:**
> Full-Stack Development + AI/RAG Engineering

**Supporting statement (Hero body / meta description source):**
> I build secure REST APIs, relational databases, and full-stack web applications with Laravel and PHP — and I've extended that into AI-powered systems, architecting a medical RAG application backed by Supabase/pgvector.

**One-line positioning statement (meta description, trim to ~155 chars):**
> Laravel backend developer with production experience on a healthcare platform (Shifago), currently building backend services for ADHD Compass, and system architect of GlucoRAG, a medical RAG application.

Do not use generic titles ("Full Stack Ninja," "Code Wizard," "AI Engineer," etc.). AI/RAG is a *chapter* in the story, never the *headline*.

---

## 3. Personal Branding Assets

The portfolio must use Mohamed's **real** profile photo and **real** personal logo — never AI-generated substitutes.

### 3.1 Asset paths (adapt to actual project structure; inspect before assuming)
```
/public/assets/profile-photo.<ext>        (real headshot, if supplied)
/public/assets/logo.<ext>                 (real logo, if supplied)
/public/assets/resume/Mohamed_Ragab_CV.pdf (final CV asset)
```
Antigravity must inspect the actual repository's asset conventions and adapt these paths, not force this exact structure onto an existing project.

### 3.2 Rules
- If the real photo is not yet supplied: do not generate a fake one. Render the Hero without a photo (headline + text + CTAs only), or use an initials-based avatar mark as a temporary placeholder, and flag the missing asset (see Section 20).
- If the real logo is not yet supplied: use a simple text/initials wordmark ("MR") styled with the design system's typography as a temporary stand-in — never an AI-generated icon logo.
- Never distort, crop destructively, recolor faces, apply filters that alter identity, or "enhance" the face in the profile photo. Any framing/treatment (Section 4) must sit *around* the untouched photograph, not alter it.
- Never change the proportions, colors, or shape of the real logo. Any glow/motion treatment happens *around* it, not to it.
