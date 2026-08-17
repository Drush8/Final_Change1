import BlogCard from "../blog/BlogCard";
import { posts } from "../../data/blog/posts";

export default function Blog() {
  return (
    <>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base leading-7 text-slate-600">
              For more articles and Blog posts please click the link below.
            </p>
            <a
              href="https://www.linkedin.com/in/nageshwar-rao-kompalli-phd-pmp/recent-activity/articles/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center font-semibold text-[#123E6E] underline decoration-[#D4A63A] decoration-2 underline-offset-4 transition hover:text-[#D4A63A]"
            >
              View More Articles on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
