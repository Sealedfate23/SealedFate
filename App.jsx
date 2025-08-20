import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Building2, ScrollText, UserCheck, Workflow, Star } from "lucide-react";

const COLORS = {
  text: "#fdfbf7",
  gold: "#f5a623",
  goldHover: "#ffc94a",
  slate: "#2c2f38",
};

const BACKGROUND_URL = "/bg.jpg";

export default function SealedFateLanding() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen relative font-sans" style={{ color: COLORS.text }}>
      <Backdrop />
      <Header />
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Logos />
        <WhySection />
        <Offer />
        <Outcomes />
        <Process />
        <Contact sent={sent} setSent={setSent} />
      </main>
      <Footer />
    </div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <img
        src={BACKGROUND_URL}
        alt="Sunset desert with golden alignment lines"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0"
           style={{background:"linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.85) 100%)"}} />
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" color={COLORS.gold} />
          <span className="font-semibold tracking-wide">SealedFate, LLC</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#why" className="hover:opacity-100">Why</a>
          <a href="#offer" className="hover:opacity-100">What I Do</a>
          <a href="#process" className="hover:opacity-100">Process</a>
          <a href="#contact" className="hover:opacity-100">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm shadow"
           style={{ backgroundColor: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Mail className="h-4 w-4" /> Email me
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Align the people.<br />
            <span className="opacity-80"> The company follows.</span>
          </motion.h1>
          <p className="mt-5 max-w-xl opacity-90">
            I work with small businesses and humans. I help owners and teams <strong>realign energy, execution, and outcomes</strong>
            so the business can breathe again. No fluff. No price table. We talk, we align, we move.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#contact"
               className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow hover:shadow-lg"
               style={{ backgroundColor: COLORS.gold, color: "#111" }}>
              Start the conversation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:sealedfatellc@pm.me"
               className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm"
               style={{ backgroundColor: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Mail className="h-4 w-4" /> sealedfatellc@pm.me
            </a>
          </div>
          <p className="mt-3 text-xs opacity-80">Based in AZ • Works with people, not labels</p>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="py-6">
      <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
        <span className="text-xs uppercase tracking-widest">Owner‑led • People‑focused • Momentum hungry</span>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="py-16">
      <div className="grid md:grid-cols-3 gap-6">
        <Card icon={<Building2 className="h-5 w-5" color={COLORS.gold} />} title="For operators, not theorists">
          You have a business to run. I bring rapid clarity and practical alignment so the floor can execute while leadership breathes.
        </Card>
        <Card icon={<UserCheck className="h-5 w-5" color={COLORS.gold} />} title="People first, then process">
          Sustainable results come when owners, managers, and staff pulse in the same direction. I tune the signal, then we reinforce it.
        </Card>
        <Card icon={<Workflow className="h-5 w-5" color={COLORS.gold} />} title="Tight feedback loops">
          We ship small changes fast, watch the floor, then iterate. Real‑world data over slide decks—always.
        </Card>
      </div>
    </section>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl p-6 shadow" style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(0,0,0,0.35)" }}>
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2" style={{ backgroundColor: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.15)" }}>{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm opacity-90">{children}</p>
    </div>
  );
}

function Offer() {
  return (
    <section id="offer" className="py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What I do</h2>
          <ul className="grid gap-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><ScrollText className="mt-0.5 h-4 w-4" color={COLORS.gold} /> Rapid discovery: walk‑throughs, interviews, energy & ops reads.</li>
            <li className="flex items-start gap-2"><ScrollText className="mt-0.5 h-4 w-4" color={COLORS.gold} /> Alignment plan: people, process, cadence, accountability.</li>
            <li className="flex items-start gap-2"><ScrollText className="mt-0.5 h-4 w-4" color={COLORS.gold} /> On‑site observation: low‑profile floor time; real conditions.</li>
            <li className="flex items-start gap-2"><ScrollText className="mt-0.5 h-4 w-4" color={COLORS.gold} /> Iterative upgrades: training, comms, and micro‑systems.</li>
            <li className="flex items-start gap-2"><ScrollText className="mt-0.5 h-4 w-4" color={COLORS.gold} /> Owner counsel: clear choices, cleaner energy, better outcomes.</li>
          </ul>
        </div>
        <div className="rounded-3xl p-6" style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(0,0,0,0.35)" }}>
          <h3 className="text-lg font-semibold">Who I help</h3>
          <p className="mt-4 text-sm opacity-90">Small businesses, owner‑operators, and teams who want their effort to convert into momentum. Human‑led over label‑led.</p>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { title: "Clarity", text: "Shared language for what matters this week—not someday." },
    { title: "Calmer ops", text: "Less thrash, fewer fires, smoother handoffs." },
    { title: "Accountability", text: "Rhythms that stick without babysitting." },
    { title: "Cashflow ease", text: "The right work, in the right order, at the right pace." },
  ];
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Typical results</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.title} className="rounded-3xl p-5" style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(0,0,0,0.35)" }}>
            <div className="flex items-center gap-2"><Star className="h-4 w-4" color={COLORS.gold} /><span className="font-medium">{i.title}</span></div>
            <p className="mt-2 text-sm opacity-90">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, t: "Intro call", d: "15–30 min to understand goals, constraints, and urgency." },
    { n: 2, t: "On‑site observation", d: "Low‑profile walk‑through; I watch flow, energy, and friction." },
    { n: 3, t: "Alignment plan", d: "We set the signal: roles, rituals, comms, and quick wins." },
    { n: 4, t: "Iterate & reinforce", d: "Short cycles, visible gains, tuned to your team’s reality." },
  ];
  return (
    <section id="process" className="py-16">
      <h2 className="text-2xl font-semibold">How we’ll work</h2>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl p-5" style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(0,0,0,0.35)" }}>
            <div className="text-sm opacity-80">Step {s.n}</div>
            <div className="mt-1 font-medium">{s.t}</div>
            <div className="mt-2 text-sm opacity-90">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ sent, setSent }) {
  return (
    <section id="contact" className="py-20">
      <div className="rounded-3xl p-8 lg:p-12" style={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(0,0,0,0.55)" }}>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Let’s align</h2>
            <p className="mt-3 text-sm opacity-90">
              There’s no intake form. Just reach out with context, and we’ll set a short call.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href="mailto:sealedfatellc@pm.me" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-medium shadow hover:shadow-lg"
                 style={{ backgroundColor: COLORS.gold, color: "#111" }}>
                <Mail className="h-4 w-4" /> Email: sealedfatellc@pm.me
              </a>
            </div>
            <p className="mt-3 text-xs opacity-80">Primary contact method is email.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Input label="Your name" placeholder="First & last" />
              <Input label="Business" placeholder="Company or project" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input label="Contact info" placeholder="Email or phone" />
              <Select label="Good time to reach out" options={["Morning","Midday","Afternoon","Evening"]} />
            </div>
            <Input label="What’s going on" placeholder="A few lines about the situation" textarea />
            <button type="submit" className="w-full rounded-2xl px-4 py-2 text-sm font-medium shadow hover:shadow-lg"
                    style={{ backgroundColor: COLORS.gold, color: "#111" }}>
              {sent ? "Thanks — I’ll reply shortly" : "Send"}
            </button>
            <p className="text-[11px] opacity-80">This demo form doesn’t send anywhere yet.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, textarea = false, ...props }) {
  const base = "w-full rounded-2xl px-3 py-2 text-sm outline-none placeholder:opacity-60";
  const style = {
    backgroundColor: "rgba(253,251,247,0.96)",
    color: "#111",
    border: `1px solid ${COLORS.gold}33`,
  };
  return (
    <label className="block">
      <div className="mb-1 text-xs" style={{ color: COLORS.gold }}>{label}</div>
      {textarea ? (
        <textarea className={base + " min-h-[120px]"} style={style} {...props} />
      ) : (
        <input className={base} style={style} {...props} />
      )}
    </label>
  );
}

function Select({ label, options = [] }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs" style={{ color: COLORS.gold }}>{label}</div>
      <select className="w-full rounded-2xl px-3 py-2 text-sm outline-none"
              style={{ backgroundColor: "rgba(253,251,247,0.96)", color: "#111", border: `1px solid ${COLORS.gold}33` }}>
        <option value="">Choose…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-xs opacity-80 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} SealedFate, LLC</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-100">Terms</a>
          <a href="#" className="hover:opacity-100">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
