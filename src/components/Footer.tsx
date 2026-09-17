/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const productLinks = [
  "All Features",
  "Professional Services",
  "ZeuZ tool License",
];

const companyLinks = ["About Us", "Events", "Career"];

const resourceLinks = [
  "Case Studies",
  "Documentation",
  "Community",
  "Support & Training",
  "Blogs",
  "Testimonial",
  "FAQs",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEE3FF]">
      {/* Main Footer Container */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:gap-12 lg:px-8 lg:py-16">

        {/* 1. Brand Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="ZeuZ"
              className="h-auto w-[100px]"
            />
          </Link>

          <p className="mt-4 max-w-[280px] font-(--font-figtree) text-[14px] leading-[20px] text-[#454B5B]">
            ZeuZ, our flagship tool, enhances testing efficiency and quality.
            We deliver top-tier automation solutions globally.
          </p>

          <a
            href="mailto:info@zeuz.ai"
            className="mt-5 inline-block font-(--font-space-grotesk) text-[14px] font-medium text-[#18181B] hover:underline"
          >
            info@zeuz.ai
          </a>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-5">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-[#525866] transition hover:text-[#7C3AED]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-[#525866] transition hover:text-[#7C3AED]">
              <svg width="20" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-[#525866] transition hover:text-[#7C3AED]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 8H2V22H6V8ZM4 2a2.3 2.3 0 1 0 0 4.6A2.3 2.3 0 0 0 4 2ZM22 14c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2V8H9v14h3.7v-7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V22H22v-8Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Product & Company Section */}
        <div className="flex flex-col gap-8 md:pl-4">
          <div>
            <h3 className="font-(--font-space-grotesk) text-[15px] font-semibold text-[#18181B]">
              Product
            </h3>

            <div className="mt-3 flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-(--font-space-grotesk) text-[15px] font-semibold text-[#18181B]">
              Company
            </h3>

            <div className="mt-3 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Resources Section */}
        <div>
          <h3 className="font-(--font-space-grotesk) text-[15px] font-semibold text-[#18181B]">
            Resources
          </h3>

          <div className="mt-3 flex flex-col gap-2.5">
            {resourceLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4C8E5]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center sm:px-10 sm:text-left md:flex-row lg:px-8">
          <p className="font-(--font-figtree) text-[13px] text-[#5F6470]">
            © 2025, All Rights Reserved
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#"
              className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
            >
              Terms of use
            </Link>

            <Link
              href="#"
              className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
            >
              Privacy policy
            </Link>

            <Link
              href="#"
              className="font-(--font-figtree) text-[13px] text-[#5F6470] transition hover:text-[#7C3AED]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}