import { ArrowUpRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Designing inference pipelines that survive a 10x traffic spike',
    excerpt: 'How we architected a stateless LLM gateway that scales from 200 to 2,000 RPS without a single timeout.',
    category: 'AI Infrastructure',
    date: 'Jun 2026',
    read: '8 min',
  },
  {
    title: 'The quiet death of the monolith (and what replaces it)',
    excerpt: 'A pragmatic field guide to migrating legacy services to event-driven cells without a big-bang rewrite.',
    category: 'Architecture',
    date: 'May 2026',
    read: '12 min',
  },
  {
    title: 'Zero-trust that developers actually want to use',
    excerpt: 'Patterns for identity-aware service meshes that reduce friction instead of adding tickets.',
    category: 'Security',
    date: 'Apr 2026',
    read: '6 min',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label reveal">From the Blog</span>
            <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Field notes from
              <span className="gradient-text"> the frontier</span>
            </h2>
          </div>
          <a href="#" className="reveal btn-ghost group">
            All Articles
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="glow-border reveal group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.05]"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyber-600/30 via-plasma-600/20 to-ink-900">
                <div className="absolute inset-0 bg-grid-fade opacity-60" />
                <div className="absolute bottom-4 left-5">
                  <span className="rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyber-200 backdrop-blur-md">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {p.read}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-cyber-200">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.excerpt}</p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-cyber-300">
                  Read article
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
