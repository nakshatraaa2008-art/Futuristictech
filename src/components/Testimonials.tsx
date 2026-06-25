import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'NEXARA rebuilt our inference stack in six weeks. Latency dropped 60% and our on-call pager finally went quiet. They operate like a senior team that has done this a hundred times — because they have.',
    name: 'Dr. Lena Hoffmann',
    role: 'CTO, Helios Robotics',
    initials: 'LH',
  },
  {
    quote:
      'They embedded with our platform team and shipped a multi-region failover system that has held through two Black Fridays without a hiccup. The documentation alone was worth the engagement.',
    name: 'Marcus Tan',
    role: 'VP Engineering, Northwind Retail',
    initials: 'MT',
  },
  {
    quote:
      'What sets them apart is judgment. They told us what not to build — and that saved us a quarter of engineering budget. Rare to find a partner that optimizes for your outcome over their invoice.',
    name: 'Priya Raghavan',
    role: 'Founder, Nimbus Health',
    initials: 'PR',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-20" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label reveal">Client Voices</span>
          <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Trusted by teams who
            <span className="gradient-text"> ship for a living</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="glow-border reveal relative flex flex-col rounded-2xl border border-white/10 bg-ink-900/50 p-8 transition-all duration-500 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Quote size={36} className="mb-5 text-cyber-500/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                "{t.quote}"
              </blockquote>
              <div className="mt-7 flex items-center gap-1 text-cyber-300">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyber-500 to-plasma-500 text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
