import { useEffect, useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive('#' + id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center">
            <Hexagon className="h-9 w-9 text-cyber-400 transition-transform duration-500 group-hover:rotate-180" strokeWidth={1.5} />
            <span className="absolute h-2 w-2 rounded-full bg-plasma-400 shadow-[0_0_12px_4px_rgba(157,99,255,0.7)]" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            NEX<span className="gradient-text">ARA</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === l.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === l.href && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyber-500/20 to-plasma-500/20 ring-1 ring-cyber-400/30" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === l.href ? 'bg-cyber-500/10 text-cyber-300' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
