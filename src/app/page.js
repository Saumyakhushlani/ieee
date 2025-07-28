"use client"
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mentors from "@/components/Mentors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <Hero/>
      <About/>
      <Timeline/>
      <Mentors/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
