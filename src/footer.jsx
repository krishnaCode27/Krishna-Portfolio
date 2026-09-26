export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[#B6FF2E]/10 bg-[#0D0F12] px-4 py-8 sm:px-6 lg:px-16">

            {/* Background Glow */}
            <div
                className="
                    pointer-events-none absolute
                    left-1/2 top-0
                    h-32 w-72
                    -translate-x-1/2
                    rounded-full
                    bg-[#B6FF2E]/5
                    blur-3xl
                "
            />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                {/* Copyright */}
                <div className="group">
                    <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                        © 2026{" "}
                        <span className="font-semibold text-white transition-colors duration-300 group-hover:text-[#B6FF2E]">
                            Krishna Gupta
                        </span>
                        . All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 sm:gap-3">

                    {/* GitHub */}
                    <a
                        href="https://github.com/creationbykrishna"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="
                            group relative overflow-hidden
                            rounded-xl
                            border border-white/10
                            bg-[#23262F]/60
                            px-3.5 py-2
                            text-xs font-medium
                            text-slate-400
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-[#B6FF2E]/40
                            hover:bg-[#B6FF2E]/10
                            hover:text-[#B6FF2E]
                            hover:shadow-[0_8px_25px_rgba(182,255,46,0.08)]
                        "
                    >
                        <span className="relative z-10">GitHub</span>

                        <span
                            className="
                                absolute inset-0
                                -translate-x-full
                                bg-gradient-to-r
                                from-transparent
                                via-[#B6FF2E]/10
                                to-transparent
                                transition-transform duration-500
                                group-hover:translate-x-full
                            "
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/krishna-gupta-3ab16138a"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="
                            group relative overflow-hidden
                            rounded-xl
                            border border-white/10
                            bg-[#23262F]/60
                            px-3.5 py-2
                            text-xs font-medium
                            text-slate-400
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-[#B6FF2E]/40
                            hover:bg-[#B6FF2E]/10
                            hover:text-[#B6FF2E]
                            hover:shadow-[0_8px_25px_rgba(182,255,46,0.08)]
                        "
                    >
                        <span className="relative z-10">LinkedIn</span>

                        <span
                            className="
                                absolute inset-0
                                -translate-x-full
                                bg-gradient-to-r
                                from-transparent
                                via-[#B6FF2E]/10
                                to-transparent
                                transition-transform duration-500
                                group-hover:translate-x-full
                            "
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:krishnaguptaedu.04@gmail.com"
                        aria-label="Email"
                        className="
                            group relative overflow-hidden
                            rounded-xl
                            border border-[#B6FF2E]/20
                            bg-[#B6FF2E]/10
                            px-3.5 py-2
                            text-xs font-semibold
                            text-[#B6FF2E]
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-[#B6FF2E]/50
                            hover:bg-[#B6FF2E]
                            hover:text-[#23262F]
                            hover:shadow-[0_8px_30px_rgba(182,255,46,0.2)]
                        "
                    >
                        <span className="relative z-10">Email</span>

                        <span
                            className="
                                absolute inset-y-0 -left-8
                                w-5 rotate-[20deg]
                                bg-white/40 blur-sm
                                transition-all duration-500
                                group-hover:left-[120%]
                            "
                        />
                    </a>
                </div>
            </div>

            {/* Bottom Accent */}
            <div
                className="
                    absolute bottom-0 left-1/2
                    h-px w-24
                    -translate-x-1/2
                    bg-[#B6FF2E]/60
                    shadow-[0_0_12px_rgba(182,255,46,0.5)]
                "
            />
        </footer>
    );
}