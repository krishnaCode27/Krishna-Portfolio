"use client";

import { useEffect, useState } from "react";
import Header from "@/header";
import Footer from "@/footer";

const skills = {
  Languages: ["C", "C++", "JavaScript", "Python", "PHP"],
  Frontend: ["HTML", "CSS", "React", "Next.js"],
  Backend: ["Node.js", "FastAPI"],
  "AI / ML": [
    "Machine Learning",
    "NLP",
    "Random Forest",
    "TF-IDF",
    "Scikit-learn",
  ],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub"],
};

const projects = [
  {
    number: "01",
    title: "Future Workforce & Career Guidance Ecosystem",
    description:
      "An AI-powered career guidance ecosystem designed to help students and job seekers discover suitable career paths, identify skill gaps, and make better career decisions.",
    tags: ["React", "Next.js", "Node.js", "AI/ML", "MongoDB"],
  },
  {
    number: "02",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform that evaluates resumes, identifies relevant skills, and helps users understand how their profile matches technical career opportunities.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Random Forest",
      "TF-IDF",
      "MongoDB",
    ],
  },
  {
    number: "03",
    title: "Atmos Weather Intelligence",
    description:
      "A responsive weather intelligence application that provides real-time weather information through a clean and user-friendly interface.",
    tags: ["React", "Next.js", "Node.js", "Weather API"],
    liveUrl: "https://atmosweatherintelligence.netlify.app/",
    githubUrl: "https://github.com/krishnaCode27/atmos-weather-intelligence",
  },
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    title: "Hackathon Certificate",
    subtitle: "Hackathon Participation",
    file: "/certificates/hackathon.pdf",
  },
  {
    title: "Introduction to Generative AI",
    subtitle: "Google",
    file: "/certificates/generative-ai.pdf",
  },
  {
    title: "Certificate",
    subtitle: "Details will be added later",
    file: "/certificates/certificate-3.pdf",
  },
];

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "BCA Student",
];

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6FF2E]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F5F7FA] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   INFO
========================================================= */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-200">{value}</p>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [activeRole, setActiveRole] = useState(0);

  /* =========================================================
     TYPING EFFECT
  ========================================================= */

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timer;

    const typeText = () => {
      const currentRole = roles[activeRole];

      if (!deleting) {
        index += 1;

        setTypedText(currentRole.slice(0, index));

        if (index === currentRole.length) {
          deleting = true;

          timer = setTimeout(typeText, 1600);
          return;
        }
      } else {
        index -= 1;

        setTypedText(currentRole.slice(0, index));

        if (index === 0) {
          deleting = false;

          setActiveRole((prev) => (prev + 1) % roles.length);

          return;
        }
      }

      timer = setTimeout(typeText, deleting ? 45 : 80);
    };

    timer = setTimeout(typeText, 500);

    return () => clearTimeout(timer);
  }, [activeRole]);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0D0F12] text-[#F5F7FA]">
      <Header />

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-[#B6FF2E]/10 blur-[120px] animate-float" />

        <div className="absolute right-[5%] top-[40%] h-80 w-80 rounded-full bg-[#B6FF2E]/5 blur-[130px] animate-float-slow" />

        <div className="absolute bottom-[5%] left-[40%] h-72 w-72 rounded-full bg-[#B6FF2E]/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D0F12_90%)]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="max-w-3xl">
              {/* STATUS */}

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B6FF2E]/20 bg-[#B6FF2E]/5 px-4 py-2 text-xs font-medium text-[#B6FF2E] backdrop-blur-xl sm:text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#B6FF2E] shadow-[0_0_12px_#B6FF2E]" />

                Open to Internship Opportunities
              </div>

              {/* INTRO */}

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B6FF2E]">
                Hello, I&apos;m
              </p>

              {/* NAME */}

              <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Krishna

                <span className="block text-[#B6FF2E] drop-shadow-[0_0_25px_rgba(182,255,46,0.18)]">
                  Gupta.
                </span>
              </h1>

              {/* ROLE */}

              <div className="mt-7 flex min-h-10 items-center text-xl font-semibold text-slate-300 sm:text-2xl">
                <span>{typedText}</span>

                <span className="ml-1 h-7 w-[2px] animate-pulse bg-[#B6FF2E] shadow-[0_0_10px_#B6FF2E]" />
              </div>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m a BCA student passionate about building modern web
                applications and AI-powered solutions. I enjoy turning ideas
                into practical, user-friendly digital experiences while
                continuously learning new technologies.
              </p>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group rounded-xl bg-[#B6FF2E] px-6 py-3.5 text-sm font-bold text-[#0D0F12] shadow-[0_0_25px_rgba(182,255,46,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#C5FF5D] hover:shadow-[0_0_35px_rgba(182,255,46,0.3)] focus:outline-none focus:ring-2 focus:ring-[#B6FF2E]/60"
                >
                  View My Work

                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-xl border border-white/10 bg-[#23262F]/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#B6FF2E]/40 hover:bg-[#B6FF2E]/10 hover:text-[#B6FF2E] focus:outline-none focus:ring-2 focus:ring-[#B6FF2E]/40"
                >
                  Download Resume
                </a>
              </div>

              {/* SOCIAL LINKS */}

              <div className="mt-10 flex items-center gap-5">
                <a
                  href="https://github.com/krishnaCode27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition duration-300 hover:text-[#B6FF2E]"
                >
                  GitHub ↗
                </a>

                <span className="h-4 w-px bg-white/10" />

                <a
                  href="https://www.linkedin.com/in/krishna-gupta-3ab16138a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition duration-300 hover:text-[#B6FF2E]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              DEVELOPER CARD
          ===================================================== */}

          <Reveal className="delay-200">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-10 rounded-[3rem] bg-[#B6FF2E]/5 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-[#23262F]/60 p-3 shadow-2xl backdrop-blur-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#111418] p-5 sm:p-6">
                  {/* WINDOW BAR */}

                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />

                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />

                    <span className="h-3 w-3 rounded-full bg-[#B6FF2E]/80 shadow-[0_0_8px_rgba(182,255,46,0.5)]" />

                    <div className="ml-4 h-7 flex-1 rounded-lg bg-white/[0.035]" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-[1fr_150px]">
                    {/* CODE */}

                    <div className="rounded-xl border border-white/5 bg-[#0D0F12] p-5 font-mono text-xs leading-7 sm:text-sm">
                      <p className="text-slate-600">// portfolio.js</p>

                      <p>
                        <span className="text-[#B6FF2E]">const</span>{" "}
                        <span className="text-slate-300">developer</span> ={" "}
                        {"{"}
                      </p>

                      <p className="pl-5">
                        name:{" "}
                        <span className="text-[#B6FF2E]">
                          &quot;Krishna&quot;
                        </span>
                        ,
                      </p>

                      <p className="pl-5">
                        role:{" "}
                        <span className="text-[#B6FF2E]">
                          &quot;Full Stack Developer&quot;
                        </span>
                        ,
                      </p>

                      <p className="pl-5">
                        focus:{" "}
                        <span className="text-[#B6FF2E]">
                          &quot;AI &amp; Web Development&quot;
                        </span>
                        ,
                      </p>

                      <p className="pl-5">
                        learning:{" "}
                        <span className="text-orange-300">true</span>,
                      </p>

                      <p className="pl-5">
                        coffee:{" "}
                        <span className="text-orange-300">true</span>
                      </p>

                      <p>{"}"}</p>
                    </div>

                    {/* INFO CARDS */}

                    <div className="flex flex-col justify-center gap-4">
                      <div className="rounded-xl border border-[#B6FF2E]/10 bg-[#B6FF2E]/5 p-4">
                        <p className="text-[10px] tracking-widest text-slate-600">
                          CURRENT FOCUS
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#B6FF2E]">
                          Full Stack + AI
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <p className="text-[10px] tracking-widest text-slate-600">
                          STATUS
                        </p>

                        <p className="mt-2 text-sm font-semibold text-slate-300">
                          Learning &amp; Building
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PROGRESS */}

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[72%] rounded-full bg-[#B6FF2E] shadow-[0_0_12px_rgba(182,255,46,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="01 — About"
              title="Building, learning, and improving."
              description="A little about my journey and what I enjoy working on."
            />
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
              <div className="rounded-3xl border border-white/10 bg-[#23262F]/45 p-7 backdrop-blur-xl transition duration-500 hover:border-[#B6FF2E]/20 sm:p-10">
                <p className="text-lg leading-9 text-slate-300">
                  I&apos;m currently pursuing my Bachelor of Computer
                  Applications at{" "}
                  <span className="font-semibold text-[#B6FF2E]">
                    Vikrant University, Gwalior
                  </span>
                  . I&apos;m interested in software development, artificial
                  intelligence, and building applications that solve practical
                  problems.
                </p>

                <p className="mt-6 text-lg leading-9 text-slate-400">
                  My current focus is improving my full-stack development
                  skills while exploring AI and machine learning. I believe
                  that the best way to learn technology is to build real
                  projects, experiment with ideas, and keep improving.
                </p>
              </div>

              <div className="rounded-3xl border border-[#B6FF2E]/10 bg-gradient-to-br from-[#B6FF2E]/10 to-[#23262F]/40 p-7 backdrop-blur-xl sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B6FF2E]">
                  Currently
                </p>

                <div className="mt-8 space-y-7">
                  <Info label="Degree" value="BCA" />
                  <Info label="University" value="Vikrant University" />
                  <Info label="Graduation" value="2028" />
                  <Info
                    label="Level"
                    value="Intermediate + Actively Learning"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section
        id="skills"
        className="border-y border-white/[0.04] bg-[#111418]/40 px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="02 — Skills"
              title="Technologies I work with."
              description="A growing toolkit across development, AI/ML, databases, and developer tools."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <Reveal
                key={category}
                className={
                  index === 1
                    ? "delay-100"
                    : index === 2
                      ? "delay-200"
                      : ""
                }
              >
                <div className="group h-full rounded-3xl border border-white/10 bg-[#23262F]/40 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#B6FF2E]/25 hover:bg-[#23262F]/65">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{category}</h3>

                    <span className="text-xs text-slate-600 transition group-hover:text-[#B6FF2E]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300 transition duration-300 hover:border-[#B6FF2E]/30 hover:bg-[#B6FF2E]/5 hover:text-[#B6FF2E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="03 — Projects"
              title="Things I&apos;ve built."
              description="Practical projects where I combine development, problem-solving, and AI."
            />
          </Reveal>

          <div className="mt-14 space-y-5">
            {projects.map((project) => (
              <Reveal key={project.number}>
                <article className="group rounded-3xl border border-white/10 bg-[#23262F]/40 p-7 backdrop-blur-xl transition duration-500 hover:border-[#B6FF2E]/25 hover:bg-[#23262F]/65 sm:p-9">
                  <div className="grid gap-7 lg:grid-cols-[90px_1fr_auto] lg:items-center">
                    <span className="font-mono text-sm font-semibold text-[#B6FF2E]">
                      {project.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold transition duration-300 group-hover:text-[#B6FF2E] sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/5 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-500 transition hover:border-[#B6FF2E]/20 hover:text-[#B6FF2E]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* =====================================================
                        PROJECT LINKS
                    ===================================================== */}

                    <div className="flex flex-wrap gap-3 lg:flex-col">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6FF2E] px-5 py-3 text-sm font-bold text-[#0D0F12] transition duration-300 hover:-translate-y-1 hover:bg-[#C5FF5D] hover:shadow-[0_0_25px_rgba(182,255,46,0.2)]"
                        >
                          Live Demo
                          <span>↗</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF2E]/30 hover:bg-[#B6FF2E]/10 hover:text-[#B6FF2E]"
                        >
                          GitHub
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <section
        id="education"
        className="border-y border-white/[0.04] bg-[#111418]/40 px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="04 — Education"
              title="My academic journey."
              description="Currently building my foundation in computer applications and technology."
            />
          </Reveal>

          <Reveal className="mt-14">
            <div className="relative rounded-3xl border border-white/10 bg-[#23262F]/40 p-7 backdrop-blur-xl sm:p-10">
              <div className="absolute left-7 top-9 h-3 w-3 rounded-full bg-[#B6FF2E] shadow-[0_0_25px_rgba(182,255,46,0.7)] sm:left-10" />

              <div className="ml-7 sm:ml-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-sm font-medium text-[#B6FF2E]">
                      2025 — 2028
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Bachelor of Computer Applications
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Vikrant University, Gwalior
                    </p>
                  </div>

                  <span className="h-fit rounded-full border border-[#B6FF2E]/15 bg-[#B6FF2E]/5 px-4 py-2 text-xs text-[#B6FF2E]">
                    Currently Pursuing
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATES
      ========================================================= */}

      <section
        id="certificates"
        className="px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="05 — Certificates"
              title="Learning beyond the classroom."
              description="Certifications and learning milestones from my journey."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <Reveal
                key={certificate.title}
                className={
                  index === 1
                    ? "delay-100"
                    : index === 2
                      ? "delay-200"
                      : ""
                }
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#23262F]/40 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF2E]/30 hover:bg-[#23262F]/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B6FF2E]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Certificate Icon */}

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B6FF2E]/20 bg-[#B6FF2E]/5 text-[#B6FF2E] transition-all duration-500 group-hover:scale-110 group-hover:border-[#B6FF2E]/50 group-hover:bg-[#B6FF2E]/10 group-hover:shadow-[0_0_25px_rgba(182,255,46,0.2)]">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 12c0 5.591 3.824 10.29 9 11.622C17.176 22.29 21 17.591 21 12c0-1.04-.133-2.049-.382-3.016z"
                      />
                    </svg>
                  </div>

                  {/* Certificate Content */}

                  <div className="relative mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B6FF2E]">
                      {certificate.subtitle}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-[#F5F7FA] transition-colors duration-300 group-hover:text-[#B6FF2E]">
                      {certificate.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Certificate of completion and achievement.
                    </p>

                    {/* VIEW CERTIFICATE BUTTON */}

                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button mt-7 inline-flex items-center gap-2 rounded-xl border border-[#B6FF2E]/30 bg-[#B6FF2E]/10 px-4 py-2.5 text-sm font-semibold text-[#B6FF2E] transition-all duration-300 hover:border-[#B6FF2E] hover:bg-[#B6FF2E] hover:text-[#0D0F12] hover:shadow-[0_0_25px_rgba(182,255,46,0.3)]"
                    >
                      <span>View Certificate</span>

                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Bottom Accent */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B6FF2E] shadow-[0_0_12px_rgba(182,255,46,0.8)] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}

      <section
        id="achievements"
        className="border-y border-white/[0.04] bg-[#111418]/40 px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="06 — Achievement"
              title="Hackathon participation."
              description="An opportunity to build, collaborate, learn, and apply technology to a real-world problem."
            />
          </Reveal>

          <Reveal className="mt-14">
            <div className="rounded-3xl border border-[#B6FF2E]/10 bg-gradient-to-br from-[#B6FF2E]/10 via-[#23262F]/40 to-transparent p-7 backdrop-blur-xl sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#B6FF2E]/20 bg-[#B6FF2E]/5 text-2xl">
                  🏆
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#B6FF2E]">
                    Hackathon
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Hackathon Participation
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                    Participated in a hackathon as part of a team, working on
                    an AI-driven career guidance and future workforce
                    development solution.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="px-5 py-24 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#B6FF2E]/10 bg-gradient-to-br from-[#B6FF2E]/10 via-[#23262F]/40 to-transparent p-7 text-center backdrop-blur-xl sm:p-14">
              <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#B6FF2E]/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6FF2E]">
                  07 — Contact
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                  Let&apos;s build something useful.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  I&apos;m currently open to internship opportunities,
                  collaborations, and interesting projects in web development
                  and AI/ML.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:krishnaguptaedu.04@gmail.com"
                    className="rounded-xl bg-[#B6FF2E] px-6 py-3.5 text-sm font-bold text-[#0D0F12] shadow-[0_0_25px_rgba(182,255,46,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#C5FF5D] hover:shadow-[0_0_35px_rgba(182,255,46,0.3)]"
                  >
                    Email Me
                  </a>

                  <a
                    href="https://github.com/krishnaCode27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#B6FF2E]/40 hover:bg-[#B6FF2E]/10 hover:text-[#B6FF2E]"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/krishna-gupta-3ab16138a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#B6FF2E]/40 hover:bg-[#B6FF2E]/10 hover:text-[#B6FF2E]"
                  >
                    LinkedIn ↗
                  </a>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                  krishnaguptaedu.04@gmail.com
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* =========================================================
          GLOBAL CSS
      ========================================================= */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #0d0f12;
        }

        ::selection {
          background: rgba(182, 255, 46, 0.25);
          color: #f5f7fa;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 {
          transition-delay: 100ms;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 11s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -20px, 0);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-15px, 20px, 0);
          }
        }

        @media (max-width: 640px) {
          .reveal {
            transform: translateY(18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .animate-float,
          .animate-float-slow {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}