import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const budgets = ['< $25k', '$25k – $75k', '$75k – $200k', '$200k+'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: budgets[1], message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setError('');
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        budget: form.budget,
        message: form.message,
      });
      if (dbError) throw dbError;
      setStatus('success');
      setForm({ name: '', email: '', company: '', budget: budgets[1], message: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyber-600/15 blur-[120px]" />
      </div>
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="section-label reveal">Get in Touch</span>
            <h2 className="reveal mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let's build something
              <span className="gradient-text"> worth shipping</span>
            </h2>
            <p className="reveal mt-5 max-w-md text-base leading-relaxed text-slate-400">
              Tell us about your project. We respond to every qualified inquiry within one
              business day with a clear next step — no sales funnels, no drip campaigns.
            </p>

            <div className="reveal mt-10 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@nexara.io' },
                { icon: Phone, label: 'Phone', value: '+1 (415) 555-0142' },
                { icon: MapPin, label: 'HQ', value: 'San Francisco · Berlin · Singapore' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyber-300">
                    <c.icon size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">{c.label}</div>
                    <div className="text-sm font-medium text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            {status === 'success' ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-cyber-400/30 bg-cyber-500/5 p-10 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-cyber-500 to-plasma-500">
                  <CheckCircle2 size={32} className="text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">Message received</h3>
                <p className="mt-3 max-w-sm text-sm text-slate-400">
                  Thanks for reaching out. A senior engineer will get back to you within one
                  business day. In the meantime, feel free to explore our recent work.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-ghost mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-3xl border border-white/10 bg-ink-900/50 p-7 backdrop-blur-xl sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Ada Lovelace"
                      className="input"
                    />
                  </Field>
                  <Field label="Work email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="ada@company.com"
                      className="input"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Company">
                    <input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Analytical Engines Inc."
                      className="input"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Estimated budget">
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update('budget', b)}
                          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            form.budget === b
                              ? 'border-cyber-400/50 bg-cyber-500/15 text-cyber-200'
                              : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Project details" required>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="What are you building, and what does success look like?"
                      className="input resize-none"
                    />
                  </Field>
                </div>

                {status === 'error' && (
                  <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary mt-6 w-full disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label} {required && <span className="text-cyber-400">*</span>}
      </span>
      {children}
    </label>
  );
}
