import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl bg-[#081D3A] px-10 py-10 text-white">
        {/* Heading section */}

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Stay Connected with Kompasion
          </h2>

          <p className="mt-5 max-w-4xl text-xl leading-9 text-slate-300">
            Receive leadership insights, articles, event announcements,
            and practical guidance directly in your inbox.
          </p>
        </div>

        {/* Input section */}

        <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-5 md:flex-row md:items-center md:justify-center">
          <div className="relative flex-1">
            <Mail
              size={22}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-2xl border border-slate-600 bg-transparent py-4 pl-16 pr-6 text-xl text-white outline-none"
            />
          </div>

          <button className="rounded-2xl bg-[#D4A63A] px-12 py-4 text-xl font-semibold text-[#081D3A] transition-all duration-300 hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}