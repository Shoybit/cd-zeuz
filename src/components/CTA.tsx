import Image from 'next/image';

export default function CtaSection() {
  return (
    // Main Wrapper for centering on the page
    <div className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-7">
      
      {/* Main Container */}
      <section className="relative mx-auto flex min-h-[400px] w-full max-w-[1340px] flex-col overflow-hidden rounded-[24px] bg-gradient-to-r from-[#160d27] via-[#2a0e45] to-[#4a1259] shadow-2xl lg:flex-row">
        
        {/* Left Content Side */}
        <div className="z-10 flex flex-1 flex-col justify-center p-10 pb-0 lg:p-16 lg:pb-16">
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[56px]">
            Let us show you <br className="hidden lg:block" />
            what ZeuZ can do.
          </h1>
          
          <p className="mb-10 max-w-[90%] text-base font-normal leading-relaxed text-gray-300 md:text-lg">
            With dozens of pre-built connectors and integrations, ZeuZ works
            seamlessly within your environment.
          </p>
          
          <div>
            <button className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#160d27] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)]">
              Request A Trial
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative flex flex-1 items-end justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[650px] translate-y-2 lg:translate-y-4">
            <Image
              src="/Group 653 1.png"
              alt="ZeuZ Dashboard Mockup"
              width={800}
              height={600}
              className="h-auto w-full rounded-t-xl border border-b-0 border-white/10 object-cover shadow-[-10px_10px_30px_rgba(0,0,0,0.3)]"
              priority
            />
          </div>
        </div>

      </section>
    </div>
  );
}