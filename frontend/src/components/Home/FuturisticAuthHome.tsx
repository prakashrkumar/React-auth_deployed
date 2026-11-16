
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Check,
  CheckCircle2,
  Menu,
  X,
  Zap,
  Globe,
  Shield,
  Sparkles,
  ScanFace,
  Layers3,
  Code2,
  ChevronRight,
  Terminal,
  CircleDot,
} from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const features = [
  {
    icon: Fingerprint,
    title: "Passwordless authentication",
    description:
      "Deliver frictionless login experiences with modern identity verification and passwordless access.",
    tag: "PASSWORDLESS",
    className: "md:col-span-2",
  },
  {
    icon: KeyRound,
    title: "JWT token management",
    description:
      "Secure access and refresh token workflows with controlled session lifecycles.",
    tag: "TOKEN SECURITY",
    className: "",
  },
  {
    icon: FaGoogle,
    title: "Social authentication",
    description:
      "Connect Google, GitHub and other OAuth providers with a seamless sign-in experience.",
    tag: "OAUTH 2.0",
    className: "",
  },
  {
    icon: Layers3,
    title: "Role-based access control",
    description:
      "Manage permissions and protect resources with flexible user roles and authorization policies.",
    tag: "RBAC",
    className: "md:col-span-2",
  },
];

const securityItems = [
  "Secure access and refresh token workflows",
  "OAuth 2.0 authentication",
  "Role-based access control",
  "Email verification and password recovery",
  "Protected API endpoints",
];

const technologies = [
  "React",
  "TypeScript",
  "Spring Boot",
  "Spring Security",
  "JWT",
  "OAuth 2.0",
];

export default function FuturisticAuthHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080910] text-white selection:bg-violet-500/30">

      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-64 left-1/3 h-[600px] w-[600px] rounded-full bg-violet-600/[0.12] blur-[150px]" />
        <div className="absolute top-[900px] -right-60 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/[0.08] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080910]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-600/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              nexus<span className="text-violet-400">auth</span>
              <span className="ml-1 text-violet-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 text-[13px] font-medium text-zinc-400 lg:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#security" className="transition hover:text-white">Security</a>
            <a href="#developers" className="transition hover:text-white">Developers</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="/login"
              className="px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="group flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-100"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0c16] px-6 py-6 sm:hidden">
            <div className="flex flex-col gap-5 text-sm text-zinc-300">
              <a onClick={closeMenu} href="#features">Features</a>
              <a onClick={closeMenu} href="#security">Security</a>
              <a onClick={closeMenu} href="#developers">Developers</a>
              <a onClick={closeMenu} href="#faq">FAQ</a>
              <a onClick={closeMenu} href="/login">Sign in</a>
              <a
                onClick={closeMenu}
                href="/register"
                className="rounded-lg bg-violet-600 px-5 py-3 text-center font-semibold text-white"
              >
                Create account
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 pb-28 pt-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-36 lg:pt-32">

        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-violet-300">
            <Sparkles size={14} />
            THE NEXT GENERATION OF IDENTITY
            <ArrowUpRight size={13} />
          </div>

          <h1 className="max-w-3xl text-[46px] font-semibold leading-[1.08] tracking-[-2.5px] sm:text-6xl lg:text-[76px]">
            Authentication
            <br />
            without
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              compromise.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
            One powerful identity layer. Complete control over
            authentication, authorization, and user security.
            Build trust into every interaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/register"
              className="group flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold shadow-xl shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
            >
              Start building
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              Explore platform
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Developer focused
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Modern security
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              API driven
            </span>
          </div>
        </div>

        {/* Interactive-style security visual */}
        <div className="relative mx-auto w-full max-w-[510px]">

          <div className="absolute inset-0 scale-75 rounded-full bg-violet-600/20 blur-[110px]" />

          <div className="relative rounded-[28px] border border-white/[0.12] bg-[#11121e]/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-7">

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Identity console</p>
                  <p className="text-[11px] text-zinc-500">Authentication overview</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                DEMO MODE
              </div>
            </div>

            {/* Identity graphic */}
            <div className="relative my-7 overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.12] via-[#171629] to-cyan-500/[0.08] px-4 py-9 text-center">

              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_70px_rgba(139,92,246,0.16)]">
                <div className="absolute inset-3 rounded-full border border-dashed border-violet-300/30" />
                <div className="absolute inset-6 rounded-full border border-cyan-300/20" />
                <Fingerprint className="h-16 w-16 text-violet-300" strokeWidth={1.2} />
                <div className="absolute right-1 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                  <Check size={15} />
                </div>
              </div>

              <h3 className="relative mt-7 text-xl font-semibold">
                Identity protected.
              </h3>
              <p className="relative mt-2 text-xs text-zinc-400">
                A seamless and secure authentication experience.
              </p>
            </div>

            {/* Login providers */}
            <div className="mb-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                Authentication providers
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                  <FaGoogle size={19} className="text-zinc-300" />
                  <div>
                    <p className="text-xs font-medium">Google</p>
                    <p className="text-[10px] text-zinc-500">OAuth 2.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                  <FaGithub size={19} className="text-zinc-300" />
                  <div>
                    <p className="text-xs font-medium">GitHub</p>
                    <p className="text-[10px] text-zinc-500">OAuth 2.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security status */}
            <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <LockKeyhole size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium">Security layer</p>
                  <p className="mt-1 text-[10px] text-zinc-500">Demo interface</p>
                </div>
              </div>
              <span className="text-[10px] font-medium text-emerald-400">PREVIEW</span>
            </div>
          </div>

          {/* Floating labels */}
          <div className="absolute -left-5 top-28 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#151522] p-3 shadow-xl sm:flex">
            <Shield size={17} className="text-violet-400" />
            <span className="text-xs font-medium">Identity first</span>
          </div>

          <div className="absolute -right-5 bottom-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#151522] p-3 shadow-xl sm:flex">
            <Zap size={17} className="text-cyan-400" />
            <span className="text-xs font-medium">API powered</span>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-600">
            Designed for modern authentication workflows
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-semibold text-zinc-500">
            <span className="flex items-center gap-2"><Code2 size={17} /> API FIRST</span>
            <span className="flex items-center gap-2"><ShieldCheck size={17} /> SECURITY</span>
            <span className="flex items-center gap-2"><Globe size={17} /> OAUTH 2.0</span>
            <span className="flex items-center gap-2"><KeyRound size={17} /> JWT</span>
            <span className="flex items-center gap-2"><Layers3 size={17} /> RBAC</span>
          </div>
        </div>
      </section>

      {/* Features - Bento grid */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">

        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              <Sparkles size={14} /> Powerful by design
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything starts
              <br />
              with <span className="text-violet-400">identity.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">
            A complete authentication foundation with the tools
            developers need to build secure, scalable applications.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10111b] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#151526] ${feature.className}`}
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/[0.04] blur-3xl transition group-hover:bg-violet-500/[0.12]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-400 transition group-hover:bg-violet-500/20">
                      <Icon size={23} />
                    </div>
                    <span className="text-[10px] font-medium tracking-[0.15em] text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-8 text-[10px] font-semibold tracking-[0.16em] text-violet-400">
                    {feature.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="relative z-10 border-y border-white/[0.07] bg-white/[0.018] py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Security architecture
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Security isn't a feature.
              <br />
              It's the <span className="text-cyan-400">foundation.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-zinc-400">
              Build confidence into your application with modern
              authentication patterns, structured authorization,
              and secure identity workflows.
            </p>

            <div className="mt-9 space-y-5">
              {securityItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check size={13} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/register"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Experience secure access <ArrowRight size={17} />
            </a>
          </div>

          {/* Code preview */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d17] shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <Terminal size={14} /> auth.config.ts
              </div>
            </div>

            <div className="overflow-x-auto p-6 font-mono text-xs leading-8 sm:p-8">
              <p className="text-zinc-600">// Authentication configuration</p>
              <p><span className="text-violet-400">const</span> <span className="text-cyan-300">authConfig</span> = {"{"}</p>
              <p className="pl-5"><span className="text-sky-300">provider</span>: <span className="text-emerald-300">"OAuth 2.0"</span>,</p>
              <p className="pl-5"><span className="text-sky-300">token</span>: {"{"}</p>
              <p className="pl-10"><span className="text-sky-300">type</span>: <span className="text-emerald-300">"JWT"</span>,</p>
              <p className="pl-10"><span className="text-sky-300">refresh</span>: <span className="text-orange-300">true</span>,</p>
              <p className="pl-5">{"},"}</p>
              <p className="pl-5"><span className="text-sky-300">authorization</span>: {"{"}</p>
              <p className="pl-10"><span className="text-sky-300">strategy</span>: <span className="text-emerald-300">"RBAC"</span>,</p>
              <p className="pl-10"><span className="text-sky-300">protectedRoutes</span>: <span className="text-orange-300">true</span>,</p>
              <p className="pl-5">{"}"}</p>
              <p>{"};"}</p>

              <div className="mt-7 flex items-center gap-2 border-t border-white/[0.08] pt-5 text-emerald-400">
                <CircleDot size={13} />
                <span className="text-[11px]">Illustrative configuration preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer section */}
      <section id="developers" className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-600/[0.12] via-[#10111d] to-cyan-500/[0.06] p-8 sm:p-14 lg:p-16">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.13] blur-[100px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                <Code2 size={16} /> BUILT FOR DEVELOPERS
              </div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Less complexity.
                <br />
                More <span className="text-violet-400">building.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-zinc-400">
                Integrate modern identity workflows into your
                application and focus on creating products that
                matter.
              </p>
              <a
                href="/register"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-100"
              >
                Get started <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-[#080910]/80 p-6 backdrop-blur-xl">
              <p className="mb-5 text-xs font-medium text-zinc-500">SUPPORTED TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Developer-first architecture</p>
                    <p className="mt-1 text-xs text-zinc-500">Flexible APIs and modern integration patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-5 pb-28 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-[#11111e] px-6 py-20 text-center sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
            <ScanFace size={30} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Make identity your
            <span className="text-violet-400"> superpower.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400">
            Take the next step towards a more secure digital experience.
            Create your account and explore the platform.
          </p>

          <a
            href="/register"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold shadow-xl shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
          >
            Create your account <ArrowRight size={17} />
          </a>

          <p className="mt-5 text-xs text-zinc-600">
            Already have an account?{" "}
            <a href="/login" className="text-violet-400 hover:text-violet-300">
              Sign in
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-5 pb-28 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            NEED ANSWERS?
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "What is NexusAuth?",
              a: "NexusAuth is an authentication application designed to manage user identity, authentication and access control.",
            },
            {
              q: "Does it support social login?",
              a: "The platform is designed to support OAuth 2.0 authentication providers such as Google and GitHub.",
            },
            {
              q: "What is JWT authentication?",
              a: "JSON Web Tokens are used to represent authenticated claims and enable stateless authentication workflows.",
            },
            {
              q: "Does it support role-based authorization?",
              a: "Yes, the platform is designed to support role-based access control for protecting application resources.",
            },
            {
              q: "Can I integrate it with my application?",
              a: "The architecture is designed around APIs, making it suitable for integration with modern frontend and backend applications.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition open:border-violet-400/20 open:bg-violet-500/[0.035]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-zinc-200">
                {item.q}
                <span className="text-xl text-violet-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07] bg-[#06070d]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 py-12 sm:px-8 md:flex-row">

          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600">
                <ShieldCheck size={21} />
              </div>
              <span className="text-lg font-bold">
                nexus<span className="text-violet-400">auth</span>.
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Identity infrastructure for the modern web.
              Secure access. Simplified authentication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold">Platform</h4>
              <div className="mt-5 space-y-4 text-xs text-zinc-500">
                <a href="#features" className="block hover:text-white">Features</a>
                <a href="#security" className="block hover:text-white">Security</a>
                <a href="#developers" className="block hover:text-white">Developers</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Account</h4>
              <div className="mt-5 space-y-4 text-xs text-zinc-500">
                <a href="/login" className="block hover:text-white">Sign in</a>
                <a href="/register" className="block hover:text-white">Register</a>
                <a href="/forgot-password" className="block hover:text-white">Reset password</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Resources</h4>
              <div className="mt-5 space-y-4 text-xs text-zinc-500">
                <a href="#faq" className="block hover:text-white">FAQ</a>
                <a href="/privacy" className="block hover:text-white">Privacy</a>
                <a href="/terms" className="block hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] px-5 py-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} NexusAuth. Built for a more secure web.
        </div>
      </footer>
    </main>
  );
}
