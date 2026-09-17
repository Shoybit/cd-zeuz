/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const categories = [
  "All",
  "AI Testing",
  "Automation Testing",
  "Cloud Based Testing",
  "Continuous Testing",
  "Cross Browser Testing",
  "Crowd Testing",
  "Intelligent Testing",
  "Mobile Testing",
  "Test Automation",
  "Scripless Testing",
];

const featuredPosts = [
  {
    category: "Mobile Testing",
    title:
      "Revolutionize testing with aZ! AI-powered test case tool backed by GPT-4o",
    date: "August 15, 2025",
    readTime: "8 min read",
    image: "/image.png",
    slug: "revolutionize-testing-with-ai",
  },
  {
    category: "Mobile Testing",
    title: "Ensuring Comprehensive Coverage with ZeuZ Multi-Platform Testing",
    date: "August 15, 2025",
    readTime: "8 min read",
    image: "/image (1).png",
    slug: "comprehensive-coverage-with-zeuz",
  },
  {
    category: "Mobile Testing",
    title:
      "Automated UI Testing with ZeuZ: Ensuring Consistent User Experience",
    date: "August 15, 2025",
    readTime: "8 min read",
    image: "/image (2).png",
    slug: "automated-ui-testing-with-zeuz",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[251px_1.1fr_1fr]">
        {/* Categories */}
        <aside className="no-scrollbar flex w-full gap-2 overflow-x-auto pb-2 lg:w-62.75 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0 shrink-0">
          {categories.map((category) => (
            <button
              key={category}
              className="shrink-0 rounded-sm bg-[#F4F4F5] px-4 py-2.5 text-left font-(--font-figtree) text-[14px] leading-5 text-[#3F3F46] transition hover:bg-[#EDE9FE] sm:py-3"
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Featured Blog  */}
        <Link
          href="/#"
          className="flex flex-col h-full rounded-xl border border-[#E4E4E7] p-2.5 transition hover:shadow-md"
        >
          <div className="overflow-hidden rounded-lg max-h-75 sm:max-h-90 lg:max-h-none">
            <img
              src="/Rectangle 2.png"
              alt="Top 10 AI Features to Look for in Your Test Automation Tool"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between px-1 pt-4 pb-2">
            <div>
              <span className="inline-block whitespace-nowrap rounded-sm bg-[#F3E8FF] px-2.5 py-1 font-(--font-inter) text-[13px] sm:text-[15px] lg:text-[16px] text-[#7C3AED]">
                By admin / June 24, 2025
              </span>
              <h2 className="mt-3 text-[22px] font-bold leading-tight tracking-tight text-[#000000] sm:text-[30px] md:text-[36px] lg:text-[42px]">
                Top 10 AI Features to Look for in Your Test Automation Tool
              </h2>
            </div>

            <p className="mt-4 font-(--font-inter) text-[13px] sm:text-[14px] leading-4 text-[#52525B]">
              August 15, 2025&nbsp; • &nbsp;8 min read
            </p>
          </div>
        </Link>

        {/* Featured Posts  */}
        <div className="flex flex-col h-full">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-(--font-space-grotesk) text-[18px] text-[#111111]">
              Featured Posts
            </h3>
            <img src="/logo.png" alt="ZeuZ" className="w-15 sm:w-17.5 " />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/#/${post.slug}`}
                className="flex flex-1 min-h-30 sm:min-h-32.5 gap-3 sm:gap-4 rounded-[10px] border border-[#E4E4E7] p-2.5 sm:p-3 transition hover:shadow-sm"
              >
                <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                  <div>
                    <span className="font-(--font-inter) text-[11px] sm:text-[12px] text-[#7C3AED]">
                      {post.category}
                    </span>

                    <h4 className="mt-1 sm:mt-2 font-(--font-space-grotesk) text-[14px] sm:text-[16px] leading-[1.3] sm:leading-[1.4] text-[#18181B] line-clamp-2 sm:line-clamp-none">
                      {post.title}
                    </h4>
                  </div>

                  <p className="mt-2 sm:mt-4 font-(--font-inter) text-[11px] sm:text-[12px] leading-3 text-[#52525B]">
                    {post.date}&nbsp; • &nbsp;{post.readTime}
                  </p>
                </div>

                <div className="w-25 sm:w-37.5 md:w-45 lg:w-40 xl:w-45 shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
