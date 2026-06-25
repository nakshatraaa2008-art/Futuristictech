import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Helios Cloud Platform',
    category: 'Cloud Infrastructure',
    desc: 'A multi-region orchestration layer reducing deploy times by 73% for a Fortune 500 retailer.',
    metric: '73% faster deploys',
    gradient: 'from-cyber-600/40 to-plasma-600/30',
  },
  {
    title: 'Aurora Vision AI',
    category: 'Computer Vision',
    desc: 'Real-time defect detection across 14 factory lines with 99.4% accuracy at 60fps.',
    metric: '99.4% accuracy',
    gradient: 'from-plasma-600/40 to-cyber-600/30',
  },
  {
    title: 'Quantum Ledger',
    category: 'Fintech / Blockchain',
    desc: 'A settlement engine processing 40k transactions/sec with cryptographic audit trails.',
    metric: '40k tx / sec',
    gradient: 'from-cyber-500/40 to-plasma-500/30',
  },
  {
    title: 'Nimbus Health',
    category: 'Healthcare / IoT',
    desc: 'Edge-connected patient monitoring serving 2M devices with sub-100ms alert latency.',
    metric: '<100ms latency',
    gradient: 'from-plasma-500/40 to-cyber-500/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label reveal">Selected Work</span>
            <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Projects that prove
              <span className="gradient-text"> the engineering</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-slate-400">
            A snapshot of recent engagements. Every project below shipped to production and
            is measured by outcomes, not deliverables.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="glow-border reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-8 transition-all duration-500 hover:-translate-y-1.5"
              style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-300">
                  {p.category}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cyber-300 transition-all duration-500 group-hover:rotate-45 group-hover:border-cyber-400/50 group-hover:bg-cyber-500/10">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="gradient-text text-2xl font-bold">{p.metric}</span>
                <span className="text-xs uppercase tracking-wider text-slate-500">headline outcome</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
