import BlogGrid from "@/components/BlogGrid";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogSection />
      <BlogGrid />
      <Subscribe />
    </>
  );
}