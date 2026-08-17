export default function FeaturedPost() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="overflow-hidden rounded-3xl bg-[#081D3A] p-10 text-white shadow-xl">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
          Featured Article
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Building Compassionate Leaders in a Changing World
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          Great leadership is built upon trust, empathy, communication and
          accountability. Organisations that invest in people create lasting
          change.
        </p>

        <button className="mt-8 rounded-xl bg-[#D4A63A] px-6 py-3 font-semibold text-[#081D3A] transition hover:scale-105">
          Read Article
        </button>
      </div>
    </section>
  );
}