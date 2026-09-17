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
    image: "Rectangle.png",
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
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-0">
      
      <div className="mx-auto w-full max-w-8/12">
        
        {/* Latest Blogs Heading */}
        <h2 className="mb-8 font-(--font-space-grotesk) text-[32px] font-semibold text-[#111111]">
          Latest Blogs
        </h2>

       
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block overflow-hidden transition"
            >
              
              <div className="h-110.5 w-full overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <p className="font-(--font-space-grotesk) font-medium text-[12px] leading-5 text-[#52525B]">
                  {blog.date}
                </p>

                <h3 className="mt-2 font-(--font-space-grotesk) text-[22px] font-bold leading-[1.4] text-[#111111] group-hover:text-[#7C3AED]">
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