const techs = [
  { name: 'React', glyph: '⚛' },
  { name: 'TypeScript', glyph: 'TS' },
  { name: 'Go', glyph: 'Go' },
  { name: 'Rust', glyph: 'Rs' },
  { name: 'Kubernetes', glyph: 'K8s' },
  { name: 'Python', glyph: 'Py' },
  { name: 'TensorFlow', glyph: 'TF' },
  { name: 'PostgreSQL', glyph: 'PG' },
  { name: 'Redis', glyph: 'Rd' },
  { name: 'GraphQL', glyph: 'GQL' },
  { name: 'AWS', glyph: '☁' },
  { name: 'Terraform', glyph: 'Tf' },
];

export default function Technologies() {
  return (
    <section id="tech" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <span className="section-label reveal">Our Stack</span>
            <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              The technologies we
              <span className="gradient-text"> trust at scale</span>
            </h2>
            <p className="reveal mt-5 text-base leading-relaxed text-slate-400">
              We are opinionated where it matters and pragmatic where it counts. These are
              the tools we have battle-tested across hundreds of production deployments —
              chosen for reliability, performance, and the talent pool that surrounds them.
            </p>
            <div className="reveal mt-8 grid grid-cols-3 gap-4">
              {[
                { v: '50+', l: 'Technologies' },
                { v: '8', l: 'Cloud Regions' },
                { v: '4M+', l: 'Req / sec' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="gradient-text text-2xl font-bold">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {techs.map((t, i) => (
              <div
                key={t.name}
                className="glow-border reveal group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 p-4 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.05]"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyber-500/15 to-plasma-500/15 font-mono text-lg font-semibold text-cyber-300 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                    {t.glyph}
                  </span>
                  <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-white">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
