/* eslint-disable @next/next/no-img-element */

import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Header Image Section */}
      <section className="relative w-full bg-[linear-gradient(105deg,#EEE4FF_0%,#FFF1FA_48%,#EAF9FA_100%)] bg-[length:100%_50%] bg-no-repeat pb-6 pt-8 md:pb-12 md:pt-16">
        {" "}
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview Grid Section */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr_auto] lg:gap-8">
          {/* Topics Sidebar */}
          <aside className="rounded-xl bg-[#F4E9FF] p-6 h-fit">
            <h3 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B]">
              Topics
            </h3>

            <div className="mt-5 space-y-4">
              {[
                "What is Canary Release Testing and Why QA Teams Rely on It",
                "The Limitations of Manual Canary Release",
                "Canary Release Testing vs. Other Deployment Strategies",
                "How AI Can Enhance Canary Release Testing",
                "Final Words",
              ].map((topic, index) => (
                <p
                  key={topic}
                  className={`font-(--font-figtree) text-sm leading-5 cursor-pointer transition-colors ${
                    index === 0
                      ? "text-[#6B21A8] font-semibold border-l-[3px] border-[#6B21A8] pl-3 -ml-3"
                      : "text-[#27272A] hover:text-[#6B21A8]"
                  }`}
                >
                  {topic}
                </p>
              ))}
            </div>
          </aside>

          {/* Key Takeaways */}
          <div className="flex min-h-[250px] flex-col rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] p-6">
            <h3 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] flex items-center gap-2">
              <span className="text-[#6B21A8]">✦</span> Key Takeaways
            </h3>

            <ul className="mt-5 space-y-4">
              {blog.keyTakeaways?.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-(--font-figtree) text-sm leading-6 text-[#3F3F46]"
                >
                  <span className="shrink-0 text-[#6B21A8] font-bold mt-0.5">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Share Block */}
          <div className="w-full lg:w-[120px] shrink-0">
            <h3 className="font-(--font-space-grotesk) text-sm font-semibold text-[#18181B] whitespace-nowrap">
              Share This Post
            </h3>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                aria-label="Copy link"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#D4D4D8] bg-white text-sm text-[#52525B] hover:bg-gray-50 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>

              <button
                type="button"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#D4D4D8] bg-white text-sm text-[#52525B] hover:bg-gray-50 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#D4D4D8] bg-white text-sm text-[#52525B] hover:bg-gray-50 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 md:pb-20 md:pt-12">
        {/* Intro */}
        <div className="space-y-5 md:space-y-6">
          <p className="font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            In modern software development, speed and quality are everything.
            Businesses are under pressure to release products faster while
            ensuring they stay bug-free, secure, and user-friendly.
          </p>

          <p className="font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            Traditional testing methods — especially manual testing — are
            time-consuming, repetitive, and prone to human error. Writing,
            running, and maintaining test cases can drain productivity and delay
            release cycles.
          </p>
        </div>

        {/* Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-2xl font-semibold leading-tight text-[#18181B] sm:text-[28px]">
            The Growing Role of AI in Automated Testing
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            It’s a solid plan. But in practice, it often relies on a critical,
            overburdened component: a human operator staring at a dashboard,
            trying to decide if the slight uptick in error rate is catastrophic
            failure or just a blip.
          </p>

          <ul className="mt-5 space-y-3 pl-5">
            <li className="font-(--font-figtree) text-sm leading-6 text-[#3F3F46] list-disc sm:text-base">
              Run continuously during development, catching bugs before they
              reach production.
            </li>
            <li className="font-(--font-figtree) text-sm leading-6 text-[#3F3F46] list-disc sm:text-base">
              Analyze historical test data to predict where bugs are most likely
              to occur.
            </li>
            <li className="font-(--font-figtree) text-sm leading-6 text-[#3F3F46] list-disc sm:text-base">
              Adapt automatically when application changes break existing test
              scripts.
            </li>
            <li className="font-(--font-figtree) text-sm leading-6 text-[#3F3F46] list-disc sm:text-base">
              Scale effortlessly, running thousands of tests in minutes.
            </li>
            <li className="font-(--font-figtree) text-sm leading-6 text-[#3F3F46] list-disc sm:text-base">
              For large-scale projects, where even a single missed bug can lead
              to costly fixes, AI offers speed, precision, and reliability that
              manual testing can’t match.
            </li>
          </ul>
        </section>

        {/* Article Image */}
        <div className="mt-8 overflow-hidden rounded-xl md:mt-10">
          <img
            src="/Rectangle 2 (5).png"
            alt="Test automation"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-2xl font-semibold leading-tight text-[#18181B] sm:text-[28px]">
            Pattern Recognition & Automated Bug Detection
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            The testing process for legacy desktop apps is notoriously painful.
            You’re working with outdated interfaces, fragile dependencies, and
            limited automation support — with little being expected to move
            fast.
          </p>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            But the way we test is changing. AI-powered legacy-app testing
            platforms like ZeuZ are reshaping how teams approach legacy QA.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            Tests Start From What You Say, Not What You Code
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            No-code test automation offers one custom components, outdated tech
            stacks, or deeply nested UI elements. Smart tools can create tests
            directly from user stories and make it easier to interact with these
            workflows.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            Regression Doesn’t Have to Be a Week-Long Process
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            A single code change shouldn’t mean clicking through dozens of
            screens just to be sure nothing broke. With smart targeting, AI
            tools can run only what’s needed — making regression feel less like
            just another part of the workflow.
          </p>
        </section>

        {/* Highlight Box */}
        <div className="mt-8 rounded-xl bg-[#F6F6F7] p-5 sm:p-6 border border-gray-200">
          <p className="font-(--font-figtree) text-sm leading-relaxed text-[#27272A] sm:text-base">
            You don’t need to rewrite tests for every OS flavour or app version.
            Modern automation platforms for legacy applications support multiple
            environments out of the box — whether it’s Windows 11 or that one
            customer who is still stuck on 8. Tests that fail due to small UI
            shifts or timing issues are one of the biggest time-wasters in QA.
            Self-healing selectors and fallback strategies keep your suite
            stable, even when minor changes occur.
          </p>
        </div>

        {/* Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            What Is Regression Testing and Why Does It Slow Down Teams
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            Regression testing means rechecking existing functionality to make
            sure recent code changes didn’t break anything. Sounds simple. But
            in practice, it’s one of the biggest time drains in the QA cycle —
            especially when you’re trying to move fast.
          </p>
        </section>

        {/* Article Image */}
        <div className="mt-8 overflow-hidden rounded-xl">
          <img
            src="/Rectangle 2 (6).png"
            alt="Automation testing"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            Test Across Versions and Platforms Without Rebuilding
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            You don’t need to rewrite tests for every OS flavour or app version.
            Modern automation platforms for legacy applications can support
            multiple environments out of the box.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            Test Across Regions and Platforms Without Rebuilding
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            Tests that fail due to small UI shifts or timing issues are one of
            the biggest time-wasters in QA. Self-healing selectors and fallback
            strategies keep your suite stable, even when minor changes occur.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            It grows endlessly
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            Every new feature, UI tweak, or edge case adds more tests to the
            regression suite. Over time, this turns into hundreds or thousands
            of tests.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-2xl font-semibold leading-tight text-[#18181B] sm:text-[28px]">
            Regression Testing with AI: How It Can Cut Testing Time by 80%
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            Regression testing with AI will enable you to handle all that test
            data, mind-numbing work you hate. Using AI to understand app
            behaviour, track code updates, and remember old bugs means teams can
            move faster without sacrificing quality.
          </p>
        </section>

        {/* Article Image */}
        <div className="mt-8 overflow-hidden rounded-xl">
          <img
            src="/Rectangle 2 (7).png"
            alt="Regression testing"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Final Section */}
        <section className="mt-8 md:mt-10">
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold text-[#18181B] sm:text-2xl">
            Only Runs What Actually Matters
          </h2>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            By learning from past bugs and coverage gaps, AI basically builds a
            risk radar. It knows which parts of your code are more likely to
            break and focuses those tests first.
          </p>

          <p className="mt-4 font-(--font-figtree) text-base leading-relaxed text-[#3F3F46]">
            You’re not guessing anymore and going straight to the danger zone
            long-handled in fact.
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
