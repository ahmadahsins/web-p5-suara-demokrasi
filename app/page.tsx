import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="h-full relative flex flex-col justify-between items-center overflow-hidden">
        <Navbar />
        <Hero />
        <Intro />
        <Content />
        <Footer />
    </main>
  );
}
