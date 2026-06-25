import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-0">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute left-1/4 top-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyber-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-[32rem] w-[32rem] translate-x-1/2 rounded-full bg-plasma-600/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyber-400/40 to-transparent" />
      </div>

      <div className="container-px flex min-h-screen flex-col items-center justify-center py-20 text-center">
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Sparkles size={14} className="text-cyber-300" />
          <span className="font-mono text-xs tracking-wider text-slate-300">
            BACKED BY NEXT-GEN AI INFRASTRUCTURE
          </span>
        </div>

        <h1 className="reveal text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl" style={{ transitionDelay: '80ms' }}>
          Engineering the
          <br />
          <span className="gradient-text bg-gradient-to-r from-cyber-300 via-plasma-300 to-cyber-400 bg-[length:200%_auto] animate-gradient">
            Future of Software
          </span>
        </h1>

        <p className="reveal mt-7 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg" style={{ transitionDelay: '160ms' }}>
          We design, build, and scale intelligent systems — from AI-driven platforms to
          cloud-native infrastructure — for companies that refuse to settle for ordinary.
        </p>

        <div className="reveal mt-10 flex flex-col items-center gap-4 sm:flex-row" style={{ transitionDelay: '240ms' }}>
          <a href="#services" className="btn-primary group">
            Explore Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#projects" className="btn-ghost group">
            <Play size={15} className="text-cyber-300" />
            View Our Work
          </a>
        </div>

        {/* Floating stat strip */}
        <div className="reveal mt-20 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-4" style={{ transitionDelay: '320ms' }}>
          {[
            { v: '12+', l: 'Years of Innovation' },
            { v: '480+', l: 'Projects Delivered' },
            { v: '99.9%', l: 'Uptime SLA' },
            { v: '60+', l: 'Global Engineers' },
          ].map((s) => (
            <div key={s.l} className="bg-ink-900/40 px-6 py-7 text-center backdrop-blur-sm">
              <div className="gradient-text text-3xl font-bold md:text-4xl">{s.v}</div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cyber-400" />
        </div>
      </div>
    </section>
  );
}
