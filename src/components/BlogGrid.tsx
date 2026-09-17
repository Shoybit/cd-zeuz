/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const blogs = [
  {
    image: "/Rectangle 2 (1).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "ai-driven-canary-releases",
  },
  {
    image: "/Rectangle 2 (2).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "catch-issues-before-they-spread",
  },
  {
    image: "/Rectangle.png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "ai-test-reporting",
  },
  {
    image: "/Rectangle 2 (4).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "catch-bugs-before-they-break",
  },
  {
    image: "/Rectangle 2 (5).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "legacy-apps-ai-era",
  },
  {
    image: "/Rectangle 2 (6).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "ai-issues-testing",
  },
  {
    image: "/Rectangle 2 (7).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "smarter-test-automation",
  },
  {
    image: "/Rectangle 2 (8).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "smarter-security",
  },
  {
    image: "/Rectangle 2 (9).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "smarter-cicd",
  },
  {
    image: "/Rectangle 2 (10).png",
    date: "August 15, 2025",
    title: "AI-Driven Canary Releases: Automated Testing in Staged Deployments",
    slug: "eliminate-repetitive-qa-tasks",
  },
];

export default function BlogGrid() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Latest Blogs Heading */}
        <h2 className="mb-6 font-(--font-space-grotesk) text-[24px] font-semibold text-[#111111] sm:mb-8 sm:text-[28px] md:text-[32px]">
          Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block overflow-hidden transition"
            >
              
              {/* Image Container with Responsive Aspect Ratio */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-3 sm:pt-4">
                <p className="font-(--font-space-grotesk) font-medium text-[12px] leading-5 text-[#52525B]">
                  {blog.date}
                </p>

                <h3 className="mt-1.5 font-(--font-space-grotesk) text-[18px] font-bold leading-[1.35] text-[#111111] transition-colors group-hover:text-[#7C3AED] sm:mt-2 sm:text-[20px] lg:text-[22px]">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}