import { Cpu, ShieldCheck, Rocket, Layers } from 'lucide-react';

const pillars = [
  { icon: Cpu, title: 'Intelligence First', desc: 'AI woven into every layer of the stack — not bolted on as an afterthought.' },
  { icon: ShieldCheck, title: 'Secure by Design', desc: 'Zero-trust architecture and compliance baked in from day one.' },
  { icon: Rocket, title: 'Built to Scale', desc: 'Cloud-native systems that handle millions of requests without flinching.' },
  { icon: Layers, title: 'Full-Stack Depth', desc: 'From silicon to screen — we own every layer of the experience.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="section-label reveal">About NEXARA</span>
            <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              We turn ambitious ideas into
              <span className="gradient-text"> resilient, intelligent products.</span>
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-slate-400">
              Founded in 2013, NEXARA is a collective of engineers, designers, and researchers
              obsessed with the frontier. We partner with startups and enterprises to ship
              software that feels like it arrived from a decade ahead.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-slate-400">
              Our teams embed directly with yours — sharing risk, velocity, and ownership.
              The result: products that scale gracefully, perform relentlessly, and delight
              the people who use them.
            </p>

            <div className="reveal mt-10 flex flex-wrap gap-3">
              {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'AWS Advanced'].map((b) => (
                <span key={b} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-300">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="glow-border reveal group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyber-500/20 to-plasma-500/20 ring-1 ring-cyber-400/30">
                  <p.icon size={22} className="text-cyber-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
