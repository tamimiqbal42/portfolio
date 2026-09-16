import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Cpu,
  Facebook,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { z } from "zod";

import projectArchitects from "@/assets/project-architects.jpg";
import projectLeaderboard from "@/assets/project-leaderboard.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const navLinks = [
  { name: "Home", href: "#home", icon: "★" },
  { name: "About", href: "#about", icon: "👤" },
  { name: "Work", href: "#work", icon: "🪟" },
  { name: "Skills", href: "#skills", icon: "⚡" },
  { name: "Experience", href: "#experience", icon: "◆" },
  { name: "Education", href: "#education", icon: "🎓" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eng-tamim-iqbal",
    icon: Linkedin,
    bg: "var(--ca-yellow)",
  },
  {
    label: "GitHub",
    href: "https://github.com/tamimiqbal42",
    icon: Github,
    bg: "var(--ca-magenta)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tamim021",
    icon: Facebook,
    bg: "var(--ca-green)",
  },
];

const skillCategories = [
  {
    category: "01",
    title: "Frontend",
    icon: Layers,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    color: "var(--ca-yellow)",
  },
  {
    category: "02",
    title: "Backend",
    icon: Cpu,
    items: ["Python", "Django"],
    color: "var(--ca-green)",
  },
  {
    category: "03",
    title: "Programming",
    icon: Code2,
    items: ["C", "C++"],
    color: "var(--ca-magenta)",
  },
  {
    category: "04",
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git", "GitHub"],
    color: "var(--ca-blue)",
  },
];

const projects = [
  {
    num: "01",
    name: "Developer Portfolio",
    repo: "devoloper-protfolio",
    date: "Mar 19, 2026",
    description:
      "A multi-section personal portfolio practice project built with foundational web technologies.",
    technologies: ["HTML", "CSS"],
    href: "https://github.com/tamimiqbal42/devoloper-protfolio",
    image: projectPortfolio,
    tabColor: "var(--ca-blue)",
    cardBg: "var(--ca-blue)",
    textColor: "#ffffff",
  },
  {
    num: "02",
    name: "Architects G3",
    repo: "devoloper-architects",
    date: "Mar 2, 2026",
    description:
      "A multi-section architecture landing page focused on layout, content structure, and responsive styling.",
    technologies: ["HTML", "CSS"],
    href: "https://github.com/tamimiqbal42/devoloper-architects",
    image: projectArchitects,
    tabColor: "var(--ca-yellow)",
    cardBg: "var(--ca-yellow)",
    textColor: "var(--ca-ink)",
  },
  {
    num: "03",
    name: "Leader Board",
    repo: "devoloper-leader-board",
    date: "Jan 15, 2026",
    description:
      "A UI-focused leaderboard exercise created to practice structured layouts and CSS styling.",
    technologies: ["HTML", "CSS"],
    href: "https://github.com/tamimiqbal42/devoloper-leader-board",
    image: projectLeaderboard,
    tabColor: "var(--ca-magenta)",
    cardBg: "var(--ca-magenta)",
    textColor: "#ffffff",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(1, "Please write a message.").max(1000),
});

type Project = (typeof projects)[number];

/* ==========================================================================
   HEADER / NAVBAR (Creative Artsy Style)
   ========================================================================== */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "skills", "experience", "education"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm">
      <div className="relative flex items-stretch justify-between border-b border-[#191510]/15 pl-4 pr-3 sm:pl-6">
        <div className="flex items-stretch gap-2">
          {/* Smiling Pink Logo */}
          <a href="#home" aria-label="Tamim Iqbal home" className="flex items-center pr-2">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))]"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="var(--ca-magenta)"
                stroke="#ffffff"
                strokeWidth="2.2"
                paintOrder="stroke"
              />
              <circle cx="8.5" cy="10.5" r="1.35" fill="#ffffff" />
              <circle cx="15.5" cy="10.5" r="1.35" fill="#ffffff" />
              <path
                d="M8 14Q12 18 16 14"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden items-stretch md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`ca-mono flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-widest text-[#191510] transition-colors ${
                    isActive ? "bg-[#ffcd29]" : "hover:bg-[#f0ece1]"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Actions: Socials & Contact Button */}
        <div className="flex items-center gap-2.5 py-2">
          {socials.map(({ label, href, icon: Icon, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[#191510] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: bg }}
              title={label}
            >
              <Icon size={16} />
            </a>
          ))}

          <a
            href="#contact"
            className="ca-mono hidden items-center gap-2 border-2 border-[#191510] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#191510] transition-colors hover:bg-[#191510] hover:text-white sm:inline-flex"
          >
            <span className="text-red-500">♥</span> Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border-2 border-[#191510] bg-[#faf8f5] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b-2 border-[#191510] bg-[#faf8f5] p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="ca-mono flex items-center gap-3 px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-[#191510] hover:bg-[#ffcd29]"
              >
                <span>{item.icon}</span>
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="ca-mono mt-2 flex items-center justify-center gap-2 border-2 border-[#191510] bg-[#191510] py-2.5 text-sm font-bold uppercase tracking-widest text-white"
            >
              ♥ Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ==========================================================================
   HERO SECTION (Creative Artsy / Robin Style)
   ========================================================================== */
function Hero() {
  return (
    <section
      id="home"
      className="ca-grid relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 pb-14 pt-8 sm:pb-20 sm:pt-12"
      aria-labelledby="hero-title"
    >
      {/* Floating Orange Round Badges on Left & Right */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute left-[10%] top-[48%]">
          <span className="flex h-20 w-20 -rotate-6 items-center justify-center rounded-full bg-[var(--ca-orange)] p-1.5 shadow-md">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-bold text-[var(--ca-ink)] ca-display text-2xl">
              TI
            </div>
          </span>
        </div>
        <div className="absolute right-[10%] top-[52%]">
          <span className="flex h-20 w-20 rotate-6 items-center justify-center rounded-full bg-[var(--ca-orange)] p-1.5 shadow-md">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--ca-yellow)] font-bold text-[var(--ca-ink)] ca-display text-2xl">
              CSE
            </div>
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center pt-1 text-center sm:pt-2">
        {/* "my name is" + scribble underline */}
        <div className="flex flex-col items-center text-[var(--ca-ink)]">
          <p className="ca-hand text-3xl sm:text-4xl">my name is</p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="mt-1 h-3 w-20"
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        {/* Top Sticky Pills */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <div className="-rotate-6">
            <span
              className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)]"
              style={{ backgroundColor: "var(--ca-purple)" }}
            >
              Made things
            </span>
          </div>
          <div className="rotate-6">
            <span
              className="ca-mono inline-block rounded-full border-[3px] border-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.25)]"
              style={{ backgroundColor: "var(--ca-yellow-soft)" }}
            >
              Sweat the details
            </span>
          </div>
        </div>

        {/* Giant Retro Pixel Name Box */}
        <div className="relative mt-6">
          <div className="ca-doodle-box relative inline-block border-[3px] px-6 py-2 sm:px-12 sm:py-3">
            <span className="ca-display text-7xl font-bold tracking-tight text-[var(--ca-ink)] sm:text-9xl lg:text-[11rem] leading-[0.95]">
              TAMIM
            </span>
          </div>

          {/* Sticky pointer notes on desktop */}
          <div className="pointer-events-none absolute -inset-x-28 -inset-y-6 hidden lg:block">
            {/* Bottom-left: Role with hand-drawn arrow */}
            <div className="pointer-events-auto absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
              <div className="-rotate-6">
                <span className="relative inline-block">
                  <span
                    className="ca-hand inline-block px-4 py-2 text-2xl leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)]"
                    style={{ backgroundColor: "var(--ca-yellow)" }}
                  >
                    Frontend Dev
                  </span>
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="var(--ca-ink)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute -right-7 -top-4 h-8 w-8 -scale-x-100"
                    aria-hidden="true"
                  >
                    <path d="M34 33 C 25 24, 15 21, 9 9" />
                    <path d="M8 21 L 7 7 L 21 11" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bottom-right: Location with hand-drawn arrow */}
            <div className="pointer-events-auto absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
              <div className="rotate-3">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="var(--ca-ink)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute -left-6 -top-6 h-8 w-8"
                    aria-hidden="true"
                  >
                    <path d="M34 33 C 25 24, 15 21, 9 9" />
                    <path d="M8 21 L 7 7 L 21 11" />
                  </svg>
                  <span
                    className="ca-hand inline-block px-4 py-2 text-2xl leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)]"
                    style={{ backgroundColor: "var(--ca-mint)" }}
                  >
                    Dhaka, BD
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stickers for role & location */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:hidden">
          <span
            className="ca-hand inline-block px-4 py-1.5 text-xl text-[var(--ca-ink)] shadow-sm -rotate-3"
            style={{ backgroundColor: "var(--ca-yellow)" }}
          >
            Frontend Dev &amp; CSE Student
          </span>
          <span
            className="ca-hand inline-block px-4 py-1.5 text-xl text-[var(--ca-ink)] shadow-sm rotate-2"
            style={{ backgroundColor: "var(--ca-mint)" }}
          >
            Dhaka, BD
          </span>
        </div>

        {/* Status Pill */}
        <p className="ca-mono mt-7 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ca-ink)] sm:text-sm">
          <span className="h-3 w-3 rounded-full bg-[var(--ca-blue)]" />
          Open to junior frontend roles and good problems
        </p>

        {/* Big Bold Headline with spinning icon SVGs */}
        <h1
          id="hero-title"
          className="mt-8 max-w-3xl text-3xl font-semibold leading-[1.18] tracking-tight text-[var(--ca-ink)] sm:mt-12 sm:text-5xl lg:text-6xl"
        >
          <span>I build web experiences that </span>
          {/* Target spinning icon */}
          <span className="inline-block align-[-0.08em]">
            <svg viewBox="0 0 40 40" className="ca-spin-slow inline-block h-[0.85em] w-[0.85em]" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="var(--ca-green)" stroke="var(--ca-ink)" strokeWidth="2" />
              <circle cx="20" cy="20" r="11" fill="var(--ca-surface)" />
              <circle cx="20" cy="20" r="5" fill="var(--ca-green)" />
              <circle cx="14" cy="9" r="2.4" fill="var(--ca-ink)" />
            </svg>
          </span>
          <span> gets out of your way. </span>
          {/* Flower spinning icon */}
          <span className="inline-block align-[-0.08em]">
            <svg viewBox="0 0 40 40" className="ca-spin-slow inline-block h-[0.85em] w-[0.85em]" aria-hidden="true">
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(0 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(45 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(90 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(135 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(180 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(225 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(270 20 20)" />
              <ellipse cx="20" cy="8" rx="4.6" ry="8" fill="var(--ca-magenta)" transform="rotate(315 20 20)" />
              <circle cx="20" cy="20" r="4" fill="var(--ca-ink)" />
            </svg>
          </span>
        </h1>

        {/* Retro Neo-Brutalist CTA Button */}
        <a href="#contact" className="btn-crayon-black mt-8">
          <span className="btn-crayon-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
          Contact me
        </a>
      </div>
    </section>
  );
}

/* ==========================================================================
   ABOUT SECTION (Polaroid & Washi Tape Style)
   ========================================================================== */
function About() {
  return (
    <section id="about" className="ca-grid relative scroll-mt-24 px-4 pb-20 pt-6 sm:pb-28">
      {/* Curved Divider Line */}
      <svg
        viewBox="0 0 1440 130"
        fill="none"
        preserveAspectRatio="none"
        className="-mx-4 h-14 w-[calc(100%+2rem)] sm:h-20"
        aria-hidden="true"
      >
        <path d="M-10 120C420 10 1030 4 1450 80" stroke="var(--ca-tick)" strokeWidth="1.6" />
      </svg>

      <p className="ca-hand pl-[8%] text-3xl text-[var(--ca-ink)] sm:text-4xl">about me!</p>

      {/* Taped Polaroids on Large Screens */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
        {/* Left Polaroid */}
        <div className="absolute left-[3%] top-[34%] w-56 xl:left-[5%] xl:w-64 -rotate-6">
          <div className="polaroid-frame">
            {/* Washi Tapes at Corners */}
            <span className="washi-tape-cyan absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg]" />
            <span className="washi-tape-yellow absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg]" />
            <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--ca-chrome)] flex items-center justify-center p-4">
              <div className="text-center">
                <span className="ca-display text-5xl font-bold text-[var(--ca-ink)]">TI</span>
                <p className="ca-mono text-xs text-[var(--ca-ink)]/70 mt-1">B.Sc. CSE</p>
                <p className="ca-mono text-xs font-bold text-[var(--ca-blue)]">CGPA 3.36</p>
              </div>
            </div>
            <p className="ca-hand mt-1.5 text-center text-xl text-[var(--ca-ink)]/80">2026</p>
          </div>
        </div>

        {/* Right Polaroid */}
        <div className="absolute right-[3%] top-[24%] w-56 xl:right-[5%] xl:w-64 rotate-6">
          <div className="polaroid-frame">
            <span className="washi-tape-cyan absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg]" />
            <span className="washi-tape-yellow absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg]" />
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#1e293b] text-white p-4 flex flex-col justify-center">
              <span className="ca-mono text-xs text-[#38bdf8]">&gt; stack.current</span>
              <p className="ca-mono text-sm font-bold mt-1">React + Python</p>
              <p className="ca-mono text-xs text-gray-400 mt-2">Uttara University · 5th Sem</p>
            </div>
            <p className="ca-hand mt-1.5 text-center text-xl text-[var(--ca-ink)]/80">my workspace</p>
          </div>
        </div>
      </div>

      {/* Main Narrative & Badges */}
      <div className="relative z-10 mx-auto mt-8 max-w-4xl sm:mt-12">
        <div className="flex flex-col items-center text-center">
          <div className="ca-doodle-box relative inline-block border-2 px-6 py-2 border-[var(--ca-ink)]">
            <span className="text-2xl font-bold text-[var(--ca-ink)] sm:text-3xl">what&apos;s up</span>
          </div>

          <div className="mt-8">
            <p className="ca-hand mx-auto max-w-3xl text-3xl font-medium leading-[1.3] text-[var(--ca-ink)] sm:text-4xl lg:text-5xl">
              I&apos;m a frontend developer &amp; CSE student from Dhaka who gets a little too excited about making clean, responsive interfaces. ✨
              I care about the small details, the edge cases everyone forgets, and shipping code that genuinely makes someone&apos;s day easier. 🎨
            </p>
          </div>

          {/* Academic & Professional Details Tape */}
          <div className="mt-8 max-w-2xl text-left bg-white/80 p-6 border-2 border-[var(--ca-ink)] shadow-[4px_4px_0_rgba(25,21,16,0.2)]">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--ca-ink)]">
              Alongside my academic journey at <strong>Uttara University</strong> (5th Semester, CGPA <strong>3.36</strong>),
              I work in IT sales as a <strong>Key Account Manager</strong> and serve as a <strong>Station Leader</strong>.
              Combining technology with business understanding and clear communication helps me approach engineering challenges from practical, user-first perspectives.
            </p>
          </div>

          {/* Scalloped Stamp Skill Stickers with Alternating Emoji Chips */}
          <div className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:mt-16">
            {/* Stamp 1: Yellow */}
            <div className="flex items-center gap-2">
              <span
                className="stamp-scallop-1 inline-flex h-12 items-center px-6 text-xl font-bold tracking-tight text-[var(--ca-ink)] sm:h-16 sm:px-8 sm:text-2xl"
                style={{ backgroundColor: "var(--ca-yellow)" }}
              >
                Frontend &amp; UI
              </span>
              <span
                className="stamp-scallop-2 relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16 text-2xl"
                style={{ backgroundColor: "var(--ca-yellow)" }}
                aria-hidden="true"
              >
                ✨
              </span>
            </div>

            {/* Stamp 2: Green */}
            <div className="flex items-center gap-2">
              <span
                className="stamp-scallop-2 inline-flex h-12 items-center px-6 text-xl font-bold tracking-tight text-white sm:h-16 sm:px-8 sm:text-2xl"
                style={{ backgroundColor: "var(--ca-green)" }}
              >
                React &amp; JavaScript
              </span>
              <span
                className="stamp-scallop-3 relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16 text-2xl"
                style={{ backgroundColor: "var(--ca-green)" }}
                aria-hidden="true"
              >
                🎨
              </span>
            </div>

            {/* Stamp 3: Magenta */}
            <div className="flex items-center gap-2">
              <span
                className="stamp-scallop-3 inline-flex h-12 items-center px-6 text-xl font-bold tracking-tight text-white sm:h-16 sm:px-8 sm:text-2xl"
                style={{ backgroundColor: "var(--ca-magenta)" }}
              >
                Python &amp; Django
              </span>
              <span
                className="stamp-scallop-1 relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16 text-2xl"
                style={{ backgroundColor: "var(--ca-magenta)" }}
                aria-hidden="true"
              >
                🧩
              </span>
            </div>

            {/* Stamp 4: Blue */}
            <div className="flex items-center gap-2">
              <span
                className="stamp-scallop-1 inline-flex h-12 items-center px-6 text-xl font-bold tracking-tight text-white sm:h-16 sm:px-8 sm:text-2xl"
                style={{ backgroundColor: "var(--ca-blue)" }}
              >
                Tailwind CSS &amp; Git
              </span>
              <span
                className="stamp-scallop-2 relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16 text-2xl"
                style={{ backgroundColor: "var(--ca-blue)" }}
                aria-hidden="true"
              >
                ⚡
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FEATURED WORKS / PROJECTS (Signature Folder Tab Style)
   ========================================================================== */
function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="ca-grid scroll-mt-24 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-14 text-center sm:pb-20">
        <div className="flex flex-col items-center">
          <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">explore my work!</p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="mt-1 h-3 w-24"
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        {/* Giant Handjet Pixel Heading */}
        <span className="ca-display mt-6 block text-center text-6xl font-bold leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-8xl lg:text-9xl">
          FEATURED WORKS
        </span>

        {/* Washi Tape Description */}
        <div className="mt-7 -rotate-2">
          <span
            className="inline-block px-6 py-2.5 text-base font-medium text-[var(--ca-ink)] shadow-sm [clip-path:polygon(1.5%_0,100%_8%,98.5%_100%,0_92%)]"
            style={{ backgroundColor: "var(--ca-yellow-soft)" }}
          >
            A few products I helped make simpler, calmer, and easier to trust.
          </span>
        </div>
      </div>

      {/* Stacked Folder Tab Cards */}
      <div className="ca-shell flex flex-col gap-16 lg:gap-24">
        {projects.map((project) => (
          <article key={project.repo} className="relative">
            {/* Folder Tab at Top Left */}
            <div className="flex">
              <span
                className="folder-tab ca-mono inline-flex items-center gap-2.5 py-3 pr-12 text-xs font-bold uppercase tracking-[0.2em] sm:py-4 sm:pr-24 sm:text-sm pl-6 sm:pl-9"
                style={{
                  backgroundColor: project.tabColor,
                  color: project.textColor,
                }}
              >
                <span>✦</span>
                Project {project.num}
              </span>
            </div>

            {/* Folder Body Card */}
            <div
              className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-14 shadow-[4px_6px_0_rgba(25,21,16,0.3)] border-2 border-[#191510]"
              style={{
                backgroundColor: project.cardBg,
                color: project.textColor,
              }}
            >
              {/* Left Column: Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="ca-mono inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] opacity-90">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: project.textColor }} />
                    {project.date}
                  </span>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {project.name}
                  </h2>

                  <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed opacity-95">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 items-center">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="ca-mono inline-flex items-center gap-2 border-b-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer"
                      style={{ borderColor: project.textColor }}
                    >
                      Quick preview ↗
                    </button>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ca-mono inline-flex items-center gap-2 border-b-2 pb-1 text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ borderColor: project.textColor }}
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                </div>

                {/* Beveled Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2.5 pt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="ca-tag-beveled ca-mono px-4 pb-1.5 pt-2 text-sm font-bold uppercase tracking-wide bg-white text-[var(--ca-ink)] shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  <span
                    className="ca-tag-beveled ca-mono px-4 pb-1.5 pt-2 text-sm font-bold uppercase tracking-wide bg-white text-[var(--ca-ink)] shadow-sm"
                  >
                    {project.repo}
                  </span>
                </div>
              </div>

              {/* Right Column: Framed Image with Washi Tape */}
              <div className="self-center">
                <div
                  className="relative cursor-pointer group"
                  onClick={() => setSelected(project)}
                >
                  {/* Washi Tapes at Top Corners */}
                  <span className="washi-tape-white absolute -left-4 -top-3 z-10 h-6 w-20 -rotate-[9deg]" />
                  <span className="washi-tape-white absolute -right-4 -top-3 z-10 h-6 w-20 rotate-[9deg]" />

                  <div className="relative overflow-hidden border-4 border-white bg-white shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub Repositories Link */}
      <div className="mt-14 flex justify-center">
        <a
          href="https://github.com/tamimiqbal42?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-crayon-black"
        >
          <span className="btn-crayon-icon">
            <Github size={16} />
          </span>
          All repositories on GitHub
        </a>
      </div>

      {/* Project Quick View Dialog */}
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected ? (
          <DialogContent className="project-dialog">
            <div className="p-4 sm:p-6">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full aspect-[16/10] object-cover"
              />
              <DialogHeader className="mt-5 text-left">
                <span className="ca-mono text-xs uppercase font-bold text-[var(--ca-blue)]">
                  Verified Repository · {selected.repo}
                </span>
                <DialogTitle className="text-2xl sm:text-3xl font-bold mt-1">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="text-base text-[var(--ca-ink)] mt-2">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="ca-tag-beveled ca-mono px-3 py-1 bg-[var(--ca-yellow)] text-xs font-bold uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-crayon-black"
                  style={{ padding: "8px 16px" }}
                >
                  <span className="btn-crayon-icon" style={{ width: "28px", height: "28px" }}>
                    <Github size={14} />
                  </span>
                  Open Repository
                </a>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}

/* ==========================================================================
   SKILLS BREAKDOWN (Scrapbook Cards)
   ========================================================================== */
function Skills() {
  return (
    <section id="skills" className="ca-grid scroll-mt-24 pb-20 pt-10">
      <div className="ca-shell">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="ca-hand text-3xl text-[var(--ca-ink)]">toolbox</p>
          <span className="ca-display text-5xl sm:text-7xl font-bold tracking-tight text-[var(--ca-ink)]">
            SKILLS &amp; TECHNOLOGIES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="relative bg-white border-2 border-[var(--ca-ink)] p-6 shadow-[3px_3px_0_rgba(25,21,16,0.2)] flex flex-col justify-between"
              >
                {/* Washi Tape Accent at Top Center */}
                <span className="washi-tape-yellow absolute -top-3 left-1/2 -translate-x-1/2 h-5 w-16" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="ca-mono text-xs font-bold px-2 py-1 bg-[var(--ca-chrome)] border border-[var(--ca-ink)]">
                      {group.category}
                    </span>
                    <Icon size={18} />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{group.title}</h3>

                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="ca-mono text-xs font-bold py-1.5 px-2 bg-[var(--ca-surface)] border border-[var(--ca-tick)] flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <Check size={12} className="text-green-600" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   EXPERIENCE & EDUCATION (Dossier & Stationery Style)
   ========================================================================== */
function Experience() {
  return (
    <section id="experience" className="ca-grid scroll-mt-24 pb-20 pt-10">
      <div className="ca-shell">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="ca-hand text-3xl text-[var(--ca-ink)]">professional journey</p>
          <span className="ca-display text-5xl sm:text-7xl font-bold tracking-tight text-[var(--ca-ink)]">
            EXPERIENCE &amp; LEADERSHIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Roles */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)] relative">
              <span className="washi-tape-cyan absolute -top-3 right-6 h-5 w-20 rotate-3" />
              <span className="ca-mono text-xs font-bold uppercase text-[var(--ca-blue)]">
                Current Role · IT Sales
              </span>
              <h3 className="text-2xl font-bold mt-1">Key Account Manager</h3>
              <p className="text-sm text-[var(--ca-ink)]/70 mt-1">IT Sales · Current Responsibilities</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ca-ink)]">
                Currently working in IT sales as a Key Account Manager, developing client relationships,
                communication skills, account management capabilities and business understanding.
              </p>
            </div>

            <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)] relative">
              <span className="washi-tape-yellow absolute -top-3 left-6 h-5 w-20 -rotate-2" />
              <span className="ca-mono text-xs font-bold uppercase text-[var(--ca-magenta)]">
                Leadership
              </span>
              <h3 className="text-2xl font-bold mt-1">Station Leader</h3>
              <p className="text-sm text-[var(--ca-ink)]/70 mt-1">Leadership Experience</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ca-ink)]">
                Responsible for leadership and coordination within my station, developing teamwork,
                communication, responsibility and leadership skills.
              </p>
            </div>
          </div>

          {/* Beyond Technology: Athletic & Scout Highlights */}
          <div className="bg-[#fff9e6] border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)] flex flex-col justify-between">
            <div>
              <p className="ca-hand text-2xl text-[var(--ca-ink)]">discipline &amp; drive</p>
              <h3 className="text-2xl font-bold">Beyond Technology</h3>
              <p className="text-sm text-[var(--ca-ink)]/70 mt-1">
                Foundational values formed through scouting and athletic competitions.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 bg-white p-3 border border-[var(--ca-ink)]">
                  <span className="text-xl">🏕️</span>
                  <div>
                    <strong className="block text-sm font-bold">Former Scout</strong>
                    <span className="text-xs text-[var(--ca-ink)]/70">
                      Teamwork, discipline, resilience and civic responsibility.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 border border-[var(--ca-ink)]">
                  <span className="text-xl">🏃</span>
                  <div>
                    <strong className="block text-sm font-bold">School Athletics</strong>
                    <span className="text-xs text-[var(--ca-ink)]/70">
                      Active participant in competitive running events.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 border border-[var(--ca-ink)]">
                  <span className="text-xl">🥈</span>
                  <div>
                    <strong className="block text-sm font-bold">Long Jump — 2nd Place</strong>
                    <span className="text-xs text-[var(--ca-ink)]/70">
                      Silver medalist in a school-level long jump competition.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   EDUCATION SECTION
   ========================================================================== */
function Education() {
  return (
    <section id="education" className="ca-grid scroll-mt-24 pb-20 pt-10">
      <div className="ca-shell">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="ca-hand text-3xl text-[var(--ca-ink)]">academic milestones</p>
          <span className="ca-display text-5xl sm:text-7xl font-bold tracking-tight text-[var(--ca-ink)]">
            EDUCATION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* B.Sc in CSE */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)]">
            <span className="ca-tag-beveled ca-mono text-xs font-bold px-3 py-1 bg-[var(--ca-yellow)] text-[var(--ca-ink)] uppercase">
              Undergraduate Degree
            </span>
            <h3 className="text-2xl font-bold mt-4">B.Sc. in Computer Science &amp; Engineering</h3>
            <p className="text-base text-[var(--ca-ink)] font-semibold mt-1">Uttara University</p>
            <div className="mt-4 flex gap-3">
              <span className="ca-mono text-xs font-bold px-2.5 py-1 bg-[var(--ca-chrome)] border border-[var(--ca-ink)]">
                5th Semester
              </span>
              <span className="ca-mono text-xs font-bold px-2.5 py-1 bg-[var(--ca-yellow)] border border-[var(--ca-ink)]">
                CGPA 3.36
              </span>
            </div>
          </div>

          {/* Diploma in CST */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)]">
            <span className="ca-tag-beveled ca-mono text-xs font-bold px-3 py-1 bg-[var(--ca-mint)] text-[var(--ca-ink)] uppercase">
              Diploma Engineering
            </span>
            <h3 className="text-2xl font-bold mt-4">Computer Science &amp; Technology</h3>
            <p className="text-base text-[var(--ca-ink)] font-semibold mt-1">2020 — 2024</p>
            <div className="mt-4">
              <span className="ca-mono text-xs font-bold px-2.5 py-1 bg-[var(--ca-chrome)] border border-[var(--ca-ink)]">
                4-Year Program Completed
              </span>
            </div>
          </div>
        </div>

        {/* Python Course Banner */}
        <div className="mt-6 bg-[var(--ca-yellow-soft)] border-2 border-[var(--ca-ink)] p-5 sm:p-6 shadow-[3px_3px_0_rgba(25,21,16,0.2)] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Rocket size={22} className="text-[var(--ca-ink)]" />
            <div>
              <strong className="block text-base font-bold">Python &amp; Django Coursework</strong>
              <span className="text-xs sm:text-sm text-[var(--ca-ink)]/80">
                Completed dedicated coursework focused on Python programming and Django web frameworks.
              </span>
            </div>
          </div>
          <span className="ca-mono text-xs font-bold px-3 py-1 bg-white border border-[var(--ca-ink)] uppercase">
            Completed
          </span>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CONTACT SECTION ("Let's Talk" - Creative Artsy Style)
   ========================================================================== */
function Contact() {
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyEmail = () => {
    navigator.clipboard.writeText("tamimiqbal1362@gamil.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:tamimiqbal1362@gamil.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="ca-grid scroll-mt-24 pb-28 pt-10">
      <div className="ca-shell">
        <div className="flex flex-col items-center text-center mb-14">
          <p className="ca-hand text-3xl text-[var(--ca-ink)]">drop a line!</p>
          <span className="ca-display text-6xl sm:text-8xl font-bold tracking-tight text-[var(--ca-ink)]">
            LET&apos;S TALK
          </span>
          <p className="ca-mono mt-3 max-w-md text-xs sm:text-sm uppercase tracking-wider text-[var(--ca-ink)]/70">
            Got a project, an opportunity, or just want to say hi? Send it over. I read every message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Left: Contact Postcard */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)] flex flex-col justify-between">
            <div>
              <span className="ca-mono text-xs font-bold uppercase text-[var(--ca-blue)]">
                Tamim Iqbal
              </span>
              <p className="text-xl sm:text-2xl font-bold mt-1">
                Open to junior frontend roles, contract work &amp; interesting teams.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email with Copy button */}
                <div
                  className="flex items-center justify-between p-3.5 bg-[var(--ca-surface)] border border-[var(--ca-ink)] cursor-pointer hover:bg-[var(--ca-yellow-soft)] transition-colors"
                  onClick={copyEmail}
                  title="Click to copy email"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <div>
                      <small className="ca-mono block text-[10px] uppercase text-[var(--ca-ink)]/70">
                        Email Address
                      </small>
                      <span className="text-sm font-bold">tamimiqbal1362@gamil.com</span>
                    </div>
                  </div>
                  <span className="ca-mono text-xs font-bold text-[var(--ca-blue)]">
                    {copied ? "COPIED!" : "COPY"}
                  </span>
                </div>

                {/* Phone */}
                <a
                  href="tel:+8801988341861"
                  className="flex items-center gap-3 p-3.5 bg-[var(--ca-surface)] border border-[var(--ca-ink)] text-[var(--ca-ink)] hover:bg-[var(--ca-yellow-soft)] transition-colors"
                >
                  <Phone size={18} />
                  <div>
                    <small className="ca-mono block text-[10px] uppercase text-[var(--ca-ink)]/70">
                      Phone Number
                    </small>
                    <span className="text-sm font-bold">+880 1988 341861</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 bg-[var(--ca-surface)] border border-[var(--ca-ink)]">
                  <MapPin size={18} />
                  <div>
                    <small className="ca-mono block text-[10px] uppercase text-[var(--ca-ink)]/70">
                      Location
                    </small>
                    <span className="text-sm font-bold">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social pills */}
            <div className="mt-8 flex gap-2">
              {socials.map(({ label, href, icon: Icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="ca-mono inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase border border-[var(--ca-ink)] shadow-sm hover:-translate-y-0.5 transition-transform"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-6 sm:p-8 shadow-[4px_4px_0_rgba(25,21,16,0.2)]">
            <form onSubmit={submit} noValidate className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="ca-mono block text-xs font-bold uppercase mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-2 border-[var(--ca-ink)] p-3 text-sm bg-[var(--ca-surface)] outline-none focus:bg-white"
                />
                {errors["name"] && (
                  <p className="ca-mono text-xs text-red-600 mt-1">{errors["name"]}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="ca-mono block text-xs font-bold uppercase mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-2 border-[var(--ca-ink)] p-3 text-sm bg-[var(--ca-surface)] outline-none focus:bg-white"
                />
                {errors["email"] && (
                  <p className="ca-mono text-xs text-red-600 mt-1">{errors["email"]}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="ca-mono block text-xs font-bold uppercase mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your opportunity, project idea, or say hi..."
                  className="w-full border-2 border-[var(--ca-ink)] p-3 text-sm bg-[var(--ca-surface)] outline-none focus:bg-white resize-y"
                />
                {errors["message"] && (
                  <p className="ca-mono text-xs text-red-600 mt-1">{errors["message"]}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn-crayon-black mt-2 self-start"
              >
                <span className="btn-crayon-icon">
                  <Send size={14} />
                </span>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FOOTER (Creative Artsy Style)
   ========================================================================== */
function Footer() {
  return (
    <footer className="border-t-2 border-[#191510] bg-[#faf8f5] py-10 px-4">
      <div className="ca-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ca-magenta)] text-white text-xs font-bold">
            TI
          </div>
          <span className="ca-mono text-xs font-bold uppercase tracking-widest text-[#191510]">
            Tamim Iqbal · Dhaka, Bangladesh
          </span>
        </div>

        <div className="ca-mono text-xs text-[#191510]/70">
          © {new Date().getFullYear()} Tamim Iqbal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
