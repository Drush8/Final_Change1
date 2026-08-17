type BlogCardProps = {
  title: string;
  excerpt: string;
  link: string;
};

export default function BlogCard({ title, excerpt, link }: BlogCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <article className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:shadow-xl">
        <div className="h-2 bg-gradient- bg-[#D4A63A]" />

        <div className="flex flex-1 flex-col p-7 md:p-8">
<h3 className="mt-5 text-xl font-bold leading-snug text-[#081D3A] transition-colors duration-200 group-hover:text-[#9A741B] md:text-[22px]">
            {title}
          </h3>

          <p className="mt-5 flex-1 text-[15px] leading-7 text-slate-600">
            {excerpt}
          </p>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <span className="text-sm font-semibold text-[#081D3A] transition-colors group-hover:text-[#9A741B]">
              Read article on LinkedIn →
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
