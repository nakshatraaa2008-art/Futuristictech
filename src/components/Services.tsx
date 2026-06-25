import { Brain, Cloud, Cpu, Boxes, LineChart, Lock, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Custom LLM pipelines, computer vision, and predictive models deployed on scalable inference infrastructure.',
    tags: ['LLM Ops', 'RAG', 'Vision'],
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Kubernetes-native platforms, multi-region failover, and infrastructure-as-code that never surprises you at 3am.',
    tags: ['K8s', 'Terraform', 'Edge'],
  },
  {
    icon: Cpu,
    title: 'Edge & IoT Systems',
    desc: 'Low-latency compute at the edge — from industrial sensors to real-time retail experiences.',
    tags: ['WebRTC', 'MQTT', 'WASM'],
  },
  {
    icon: Boxes,
    title: 'Product Engineering',
    desc: 'Full-cycle product teams that design, build, and iterate — shipping in weeks, not quarters.',
    tags: ['React', 'Go', 'Swift'],
  },
  {
    icon: LineChart,
    title: 'Data Platforms',
    desc: 'Real-time analytics lakes, streaming pipelines, and dashboards that turn raw signal into decisions.',
    tags: ['Kafka', 'ClickHouse', 'dbt'],
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    desc: 'Pen-testing, zero-trust rollouts, and automated compliance evidence collection built into CI.',
    tags: ['Zero-Trust', 'SOC2', 'SAST'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-30" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label reveal">What We Do</span>
          <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Services engineered for
            <span className="gradient-text"> scale and speed</span>
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-slate-400">
            Six core practices, one integrated team. Pick a single capability or engage us
            end-to-end — either way, you get senior people who ship.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="glow-border reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyber-400/30"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyber-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-cyber-500/25" />
              <div className="relative">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyber-500/20 to-plasma-500/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon size={26} className="text-cyber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-cyber-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
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
