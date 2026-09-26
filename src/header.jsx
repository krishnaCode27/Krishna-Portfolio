"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     SCROLL / ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 35);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavClick = (href) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "px-3 pt-3 sm:px-5" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-7xl rounded-2xl border border-white/10 bg-[#0D0F12]/80 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "max-w-none border-b border-transparent bg-transparent"
          }`}
        >
          <div
            className={`mx-auto flex h-[76px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-8 ${
              scrolled ? "lg:h-[72px]" : "lg:h-20"
            }`}
          >
            {/* =================================================
                PROFESSIONAL LOGO
            ================================================= */}

            <button
              onClick={() => handleNavClick("#home")}
              aria-label="Go to homepage"
              className="group relative flex items-center"
            >
              {/* Logo glow */}

              <span className="pointer-events-none absolute -inset-5 rounded-full bg-[#B6FF2E]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

              <span className="relative flex items-center gap-3">
                {/* =================================================
                    KG MONOGRAM
                ================================================= */}

                <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#B6FF2E]/30 bg-[#B6FF2E]/10 shadow-[0_0_20px_rgba(182,255,46,0.08)] transition-all duration-500 group-hover:rotate-[-4deg] group-hover:border-[#B6FF2E]/70 group-hover:bg-[#B6FF2E]/15 group-hover:shadow-[0_0_25px_rgba(182,255,46,0.2)]">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#B6FF2E]/10 via-transparent to-transparent" />

                  <span className="relative font-black tracking-[-0.08em] text-[#B6FF2E]">
                    KG
                  </span>
                </span>

                {/* =================================================
                    NAME
                ================================================= */}

                <span className="flex flex-col items-start leading-none">
                  <span className="krishna-logo-name">Krishna</span>

                  <span className="krishna-logo-surname">Gupta</span>
                </span>
              </span>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center lg:flex">
              <div className="flex items-center gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 backdrop-blur-xl">
                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.href.replace("#", "");

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`nav-link group relative rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-300 xl:px-4 ${
                        isActive
                          ? "text-[#B6FF2E]"
                          : "text-slate-400 hover:text-[#F5F7FA]"
                      }`}
                    >
                      {/* Hover / Active Background */}

                      <span
                        className={`absolute inset-0 -z-10 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#B6FF2E]/10 opacity-100"
                            : "bg-[#B6FF2E]/0 opacity-0 group-hover:bg-[#B6FF2E]/5 group-hover:opacity-100"
                        }`}
                      />

                      <span className="relative">
                        {item.name}
                      </span>

                      {/* Active Indicator */}

                      <span
                        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#B6FF2E] shadow-[0_0_10px_rgba(182,255,46,0.8)] transition-all duration-300 ${
                          isActive
                            ? "w-4 opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* =================================================
                LET'S CONNECT — DESKTOP
            ================================================= */}

            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick("#contact")}
                className="connect-button group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#B6FF2E]/30 bg-[#B6FF2E]/5 px-5 py-2.5 text-sm font-semibold text-[#B6FF2E] transition-all duration-300 hover:border-[#B6FF2E] hover:bg-[#B6FF2E] hover:text-[#0D0F12] hover:shadow-[0_0_30px_rgba(182,255,46,0.25)]"
              >
                {/* Shine */}

                <span className="absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative">
                  Let&apos;s Connect
                </span>

                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "border-[#B6FF2E]/40 bg-[#B6FF2E]/10 text-[#B6FF2E]"
                  : "border-white/10 bg-[#23262F]/70 text-slate-300 hover:border-[#B6FF2E]/30 hover:text-[#B6FF2E]"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className="relative flex w-5 flex-col gap-[5px]">
                {/* Top */}

                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }`}
                />

                {/* Middle */}

                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "scale-0 opacity-0"
                      : ""
                  }`}
                />

                {/* Bottom */}

                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              menuOpen
                ? "max-h-[700px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/[0.06] px-5 py-5 sm:px-8">
              {/* Mobile Brand */}

              <div className="mb-5 flex items-center gap-3 border-b border-white/[0.06] pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B6FF2E]/25 bg-[#B6FF2E]/10 font-black tracking-[-0.08em] text-[#B6FF2E]">
                  KG
                </div>

                <div className="flex flex-col leading-none">
                  <span className="mobile-logo-name">
                    Krishna
                  </span>

                  <span className="mobile-logo-surname">
                    Gupta
                  </span>
                </div>
              </div>

              {/* Mobile Navigation */}

              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive =
                    activeSection === item.href.replace("#", "");

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      style={{
                        transitionDelay: menuOpen
                          ? `${index * 45}ms`
                          : "0ms",
                      }}
                      className={`mobile-nav-item flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                        menuOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-5 opacity-0"
                      } ${
                        isActive
                          ? "border-[#B6FF2E]/25 bg-[#B6FF2E]/10 text-[#B6FF2E]"
                          : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:border-[#B6FF2E]/20 hover:bg-[#B6FF2E]/5 hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {item.name}
                      </span>

                      <span
                        className={`text-lg transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-[#B6FF2E]"
                            : "-translate-x-2 opacity-0"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* =================================================
                  LET'S CONNECT — MOBILE
              ================================================= */}

              <button
                onClick={() => handleNavClick("#contact")}
                className="connect-button group mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#B6FF2E]/30 bg-[#B6FF2E]/10 px-5 py-3.5 text-sm font-semibold text-[#B6FF2E] transition-all duration-300 hover:border-[#B6FF2E] hover:bg-[#B6FF2E] hover:text-[#0D0F12] hover:shadow-[0_0_25px_rgba(182,255,46,0.3)]"
              >
                <span>
                  Let&apos;s Connect
                </span>

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          TOP SCANNING LIGHT
      ===================================================== */}

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px overflow-hidden">
        <div className="header-scan-line" />
      </div>

      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           PROFESSIONAL LOGO
        ===================================================== */

        .krishna-logo-name {
          font-family:
            "Trebuchet MS",
            "Segoe UI",
            sans-serif;

          font-size: 17px;
          font-weight: 800;

          line-height: 0.95;

          letter-spacing: -0.055em;

          color: #f5f7fa;

          transition:
            color 0.35s ease,
            transform 0.35s ease;
        }

        .krishna-logo-surname {
          margin-top: 3px;

          font-family:
            "Trebuchet MS",
            "Segoe UI",
            sans-serif;

          font-size: 11px;
          font-weight: 600;

          line-height: 1;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: #b6ff2e;

          transition:
            letter-spacing 0.35s ease,
            filter 0.35s ease;
        }

        .group:hover .krishna-logo-name {
          color: #b6ff2e;

          transform: translateX(1px);
        }

        .group:hover .krishna-logo-surname {
          letter-spacing: 0.27em;

          filter:
            drop-shadow(
              0 0 7px
              rgba(182, 255, 46, 0.35)
            );
        }

        /* =====================================================
           CONNECT BUTTON
        ===================================================== */

        .connect-button {
          animation:
            connectPulse
            4s
            ease-in-out
            infinite;
        }

        @keyframes connectPulse {
          0%,
          100% {
            box-shadow:
              0 0 0
              rgba(182, 255, 46, 0);
          }

          50% {
            box-shadow:
              0 0 18px
              rgba(182, 255, 46, 0.08);
          }
        }

        /* =====================================================
           TOP SCANNING LIGHT
        ===================================================== */

        .header-scan-line {
          height: 100%;

          width: 25%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(182, 255, 46, 0.15),
            #b6ff2e,
            rgba(182, 255, 46, 0.15),
            transparent
          );

          filter: blur(0.5px);

          opacity: 0.8;

          animation:
            headerScan
            5s
            cubic-bezier(0.65, 0, 0.35, 1)
            infinite;
        }

        @keyframes headerScan {
          0% {
            transform: translateX(-120%);
          }

          45% {
            transform: translateX(500%);
          }

          100% {
            transform: translateX(500%);
          }
        }

        /* =====================================================
           NAVIGATION HOVER
        ===================================================== */

        .nav-link {
          isolation: isolate;
        }

        .nav-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: -1px;

          width: 0;
          height: 1px;

          transform: translateX(-50%);

          background: #b6ff2e;

          box-shadow:
            0 0 8px
            rgba(182, 255, 46, 0.8);

          transition:
            width 0.35s ease;
        }

        .nav-link:hover::after {
          width: 14px;
        }

        /* =====================================================
           MOBILE BRAND
        ===================================================== */

        .mobile-logo-name {
          font-family:
            "Trebuchet MS",
            "Segoe UI",
            sans-serif;

          font-size: 17px;
          font-weight: 800;

          line-height: 0.95;

          letter-spacing: -0.055em;

          color: #f5f7fa;
        }

        .mobile-logo-surname {
          margin-top: 4px;

          font-family:
            "Trebuchet MS",
            "Segoe UI",
            sans-serif;

          font-size: 10px;
          font-weight: 600;

          line-height: 1;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: #b6ff2e;
        }

        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .mobile-nav-item {
          will-change: transform, opacity;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 640px) {
          .krishna-logo-name {
            font-size: 16px;
          }

          .krishna-logo-surname {
            font-size: 10px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}