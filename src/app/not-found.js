```jsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0F12] px-5 text-[#F5F7FA]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-[#B6FF2E]/10 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-[#B6FF2E]/5 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D0F12_85%)]" />
      </div>

      {/* 404 Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Status */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B6FF2E]/20 bg-[#B6FF2E]/5 px-4 py-2 text-xs font-medium text-[#B6FF2E] backdrop-blur-xl sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#B6FF2E] shadow-[0_0_12px_#B6FF2E]" />

          Page Not Found
        </div>

        {/* 404 */}
        <h1 className="text-[7rem] font-black leading-none tracking-[-0.08em] text-[#B6FF2E] drop-shadow-[0_0_35px_rgba(182,255,46,0.15)] sm:text-[10rem]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Looks like you took a wrong turn.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or the URL might be incorrect.
        </p>

        {/* Code Card */}
        <div className="mx-auto mt-9 max-w-lg rounded-2xl border border-white/10 bg-[#23262F]/50 p-5 text-left shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-[#B6FF2E]/80" />
          </div>

          <div className="mt-5 font-mono text-sm leading-7">
            <p className="text-slate-600">
              // error.js
            </p>

            <p>
              <span className="text-[#B6FF2E]">const</span>{" "}
              <span className="text-slate-300">page</span> ={" "}
              <span className="text-orange-300">
                &quot;not_found&quot;
              </span>
              ;
            </p>

            <p>
              <span className="text-[#B6FF2E]">return</span>{" "}
              <span className="text-orange-300">
                &quot;Let&apos;s go home&quot;
              </span>
              ;
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-[#B6FF2E] px-6 py-3.5 text-sm font-bold text-[#0D0F12] shadow-[0_0_25px_rgba(182,255,46,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#C5FF5D] hover:shadow-[0_0_35px_rgba(182,255,46,0.3)]"
          >
            ← Back to Home
          </Link>

          <Link
            href="/#projects"
            className="rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#B6FF2E]/40 hover:bg-[#B6FF2E]/10 hover:text-[#B6FF2E]"
          >
            View Projects ↗
          </Link>

        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-slate-600">
          Krishna Gupta • Full Stack Developer • AI/ML Enthusiast
        </p>

      </div>
    </main>
  );
}
```
