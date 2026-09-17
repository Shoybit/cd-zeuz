/* eslint-disable @next/next/no-img-element */
export default function Subscribe() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-7">
      <div className="relative mx-auto flex min-h-[400px] w-full max-w-[1340px] items-center justify-center overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#35106F_0%,#5415A5_45%,#7422E8_100%)] px-5 py-12 sm:min-h-[438px] sm:px-10 lg:px-20">

        
        <img
          src="/Frame.png"
          alt=""
          className="pointer-events-none absolute right-0 top-0 z-0 h-full w-auto object-cover opacity-20 sm:opacity-40 md:opacity-100 md:object-contain"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">

          
          <h2 className="max-w-[1100px] font-(--font-space-grotesk) text-[24px] font-bold leading-[1.25] tracking-[-0.5px] text-white min-[400px]:text-[28px] sm:text-[40px] sm:leading-[1.2] md:text-[50px] lg:text-[58px] lg:leading-[1.15] lg:tracking-[-1.5px]">
            Subscribe to get all our latest blogs,
            <br className="hidden sm:block" />
            {" "}updates delivered directly to your inbox.
          </h2>

         
          <p className="mt-4 font-(--font-figtree) text-[13px] leading-5 text-white/60 sm:mt-6 sm:text-[16px] sm:leading-6 lg:text-[18px]">
            By submitting the form, you would be accepting the{" "}
            <span className="text-white font-medium">Privacy Policy.</span>
          </p>

          {/* Form */}

          <form className="mt-8 flex w-full max-w-[500px] flex-col gap-3 sm:mt-12 sm:h-[56px] sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-[6px] sm:shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-full min-w-0 rounded-md bg-white px-5 font-(--font-figtree) text-[15px] text-[#454B5B] outline-none placeholder:text-[#687386] sm:h-full sm:rounded-none"
            />

            <button
              type="submit"
              className="h-13 w-full shrink-0 rounded-md bg-[#8B2CFF] px-8 font-(--font-space-grotesk) text-[16px] font-medium text-white transition hover:bg-[#7620E8] sm:h-full sm:w-auto sm:rounded-none"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}