import React from 'react'
import Spline from '@splinetool/react-spline'
import { Cog, Cpu, Bot, Drone, Axis3D, Cube } from 'lucide-react'

function HoloBadge({ icon: Icon, title, subtitle, className = '' }) {
  return (
    <div className={`group relative rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md text-cyan-100 shadow-[0_0_60px_-20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_80px_-12px_rgba(34,211,238,0.6)] transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-transparent pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.35), rgba(14,165,233,0.35), rgba(34,211,238,0.35))' }} />
      <div className="relative p-4 flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 blur-lg bg-cyan-400/30 rounded-full" />
          <Icon className="relative size-8 text-cyan-300 drop-shadow-[0_0_16px_rgba(125,211,252,0.8)]" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-200/80">{subtitle}</p>
          <p className="text-lg font-semibold text-cyan-50">{title}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </div>
  )
}

function HoloPanel({ title, icon: Icon, children }) {
  return (
    <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 text-sky-50 overflow-hidden shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_35%)]" />
      <div className="flex items-center gap-3 mb-4">
        <Icon className="size-5 text-sky-300" />
        <h3 className="text-lg font-semibold tracking-wide text-sky-50">{title}</h3>
      </div>
      <div className="relative">{children}</div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
    </div>
  )
}

function BlueprintOverlay() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-screen pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(59,130,246)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <g stroke="rgb(125,211,252)" strokeWidth="1" fill="none">
        <circle cx="15%" cy="30%" r="40" />
        <circle cx="15%" cy="30%" r="60" opacity="0.6" />
        <path d="M70 400 L 300 220 L 540 360" opacity="0.7" />
      </g>
    </svg>
  )
}

function RotatingRing() {
  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-spin-slow" />
      <div className="absolute inset-2 rounded-full border border-cyan-300/30 animate-spin-slower" />
      <div className="absolute inset-6 rounded-full border border-cyan-200/30 animate-pulse" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#071325] relative text-white">
      {/* Hero Section */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        {/* 3D Spline Cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/tu1yYfmgsnYCLUIx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft neon background gradients (do not block interactions) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.18),transparent_55%)]" />
        </div>

        {/* Blueprint overlay */}
        <BlueprintOverlay />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navigation */}
          <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-cyan-400/30 grid place-items-center shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)]">
                <Axis3D className="size-5 text-cyan-300" />
              </div>
              <span className="text-sm tracking-widest uppercase text-cyan-200">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <HoloBadge icon={Cog} title="Mechanical" subtitle="Focus" />
              <HoloBadge icon={Cpu} title="Simulation" subtitle="Skill" />
              <HoloBadge icon={Cube} title="3D / CAD" subtitle="Core" />
            </div>
          </div>

          {/* Hero copy */}
          <div className="flex-1 flex items-center">
            <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                  <span className="block bg-gradient-to-b from-cyan-100 via-white to-sky-300 bg-clip-text text-transparent">Futuristic 3D Engineering Portfolio</span>
                </h1>
                <p className="mt-5 text-cyan-100/85 max-w-2xl text-base sm:text-lg leading-relaxed">
                  High-detail mechanical animations with blueprint overlays, cinematic lighting, and holographic UI. Gears, robotic arms, drones, and exploded assemblies — engineered with precision, presented with artistry.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#showcase" className="relative inline-flex items-center gap-2 rounded-2xl border border-cyan-300/40 bg-white/10 backdrop-blur px-5 py-3 text-cyan-50 hover:bg-white/15 transition-colors shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)]">
                    <Drone className="size-5 text-cyan-300" />
                    <span className="font-semibold">Explore Animations</span>
                  </a>
                  <a href="/test" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-cyan-100/80 hover:text-white hover:border-cyan-300/40 transition-all">
                    <Bot className="size-5" />
                    Backend Status
                  </a>
                </div>
              </div>

              {/* Floating holographic widgets */}
              <div className="pointer-events-none hidden md:block">
                <div className="absolute -right-4 top-8 animate-float-slow">
                  <HoloBadge icon={Drone} title="Autonomous Drone" subtitle="R&D" />
                </div>
                <div className="absolute -left-6 bottom-24 animate-float">
                  <HoloBadge icon={Bot} title="Robotic Arm" subtitle="Kinematics" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#050f20]">
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <HoloPanel title="Precision Gears" icon={Cog}>
              <div className="flex items-center gap-5">
                <RotatingRing />
                <div className="text-sm text-sky-100/80">
                  <p>Helical and spur gear assemblies with sub-millimeter tolerances and procedural tooth profiles.</p>
                </div>
              </div>
            </HoloPanel>
            <HoloPanel title="Robotic Arm" icon={Bot}>
              <div className="space-y-3 text-sky-100/80 text-sm">
                <p>Inverse kinematics, path planning, and smooth spline-based motion curves for cinematic moves.</p>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-sky-400 to-cyan-300 animate-progress" />
                </div>
              </div>
            </HoloPanel>
            <HoloPanel title="Drone Cinematics" icon={Drone}>
              <div className="flex items-center justify-between">
                <div className="text-sm max-w-[70%] text-sky-100/80">Aerial tracking shots with stabilised gimbal rigs and reactive lighting.</div>
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/30 to-sky-400/20" />
                  <div className="absolute inset-0 rounded-xl border border-cyan-400/30" />
                </div>
              </div>
            </HoloPanel>
            <HoloPanel title="Exploded Assembly" icon={Cube}>
              <div className="text-sm text-sky-100/80">
                Layered breakdowns with callouts, part indices, and blueprint-style overlays for technical clarity.
              </div>
            </HoloPanel>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10 bg-[#050f20]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cyan-100/70 text-sm">© {new Date().getFullYear()} Engineering Graduate Portfolio — Crafted with precision</p>
          <div className="flex items-center gap-3">
            <HoloBadge icon={Axis3D} title="CAD + Animation" subtitle="Showreel" />
          </div>
        </div>
      </footer>

      {/* Global decorative reflections */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  )
}

export default App

// Animations
const styles = document.createElement('style')
styles.innerHTML = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-10px) }
  }
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-18px) }
  }
  @keyframes spin-slow { to { transform: rotate(360deg) } }
  @keyframes spin-slower { to { transform: rotate(-360deg) } }
  @keyframes progress { 0% { width: 10% } 50% { width: 80% } 100% { width: 40% } }

  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-slow { animation: float-slow 9s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 6s linear infinite; }
  .animate-spin-slower { animation: spin-slower 10s linear infinite; }
  .animate-progress { animation: progress 4s ease-in-out infinite; }
`
document.head.appendChild(styles)
