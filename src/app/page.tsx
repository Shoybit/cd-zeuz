import BlogGrid from "@/components/BlogGrid";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogSection />
      <BlogGrid />
    </>
  );
}