export default function Hero() {
  return (
    <section className="flex min-h-[300px] w-full items-center justify-center bg-[linear-gradient(105deg,#F1E9FF_0%,#FFF0F8_50%,#EEF9FC_100%)] px-4 py-12 sm:py-16 md:py-20">
      <div className="flex w-full max-w-6xl flex-col items-center text-center">

        {/* Title */}
        <h1 className="font-(--font-space-grotesk) text-[36px] font-bold leading-[1.1] tracking-[-1.5px] min-[400px]:text-[44px] sm:text-[60px] md:text-[72px] lg:text-8xl">
          <span className="bg-[linear-gradient(90deg,#8B5CF6_0%,#E879D9_100%)] bg-clip-text text-transparent">
            ZeuZ Blog
          </span>
        </h1>

        {/* Description */}
        <p className="mt-3 font-(--font-figtree) text-[15px] font-normal leading-6 text-[#454B5B] sm:mt-4 sm:text-[20px] md:text-[24px]">
          Ideas, stories, and strategies powering faster, smarter test automation.
        </p>

        {/* Search */}
        <div className="mt-6 flex h-12 w-full max-w-144.5 items-center rounded-[6px] bg-white px-3 shadow-sm sm:mt-10 sm:h-14.75 sm:px-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#4B5563"
              strokeWidth="1.5"
            />
            <path
              d="M16.5 16.5L21 21"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search blog"
            className="ml-2 w-full bg-transparent font-(--font-figtree) text-base text-[#333] outline-none placeholder:text-[#777] sm:text-[18px]"
          />
        </div>

      </div>
    </section>
  );
}
