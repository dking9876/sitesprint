import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import ValuePropsCarousel from "@/components/ValuePropsCarousel";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <ValuePropsCarousel />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
