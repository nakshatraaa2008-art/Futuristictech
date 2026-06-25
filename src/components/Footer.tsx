import { Hexagon, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const cols = [
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Partners'] },
  { title: 'Services', links: ['AI & ML', 'Cloud', 'Product Engineering', 'Security'] },
  { title: 'Resources', links: ['Blog', 'Case Studies', 'Docs', 'Status'] },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center">
                <Hexagon className="h-9 w-9 text-cyber-400" strokeWidth={1.5} />
                <span className="absolute h-2 w-2 rounded-full bg-plasma-400 shadow-[0_0_12px_4px_rgba(157,99,255,0.7)]" />
              </span>
              <span className="text-lg font-bold text-white">
                NEX<span className="gradient-text">ARA</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Engineering the future of software. We build intelligent, resilient systems
              for companies that refuse to settle.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyber-400/40 hover:text-cyber-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 transition-colors hover:text-cyber-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2026 NEXARA Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-slate-300">Privacy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-slate-300">Terms</a>
            <a
              href="#home"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-cyber-400/40 hover:text-cyber-300"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
