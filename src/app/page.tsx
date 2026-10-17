import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Heritage } from "@/components/Heritage";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Restoration } from "@/components/Restoration";
import { Frames } from "@/components/Frames";
import { Reviews } from "@/components/Reviews";
import { Enquiry } from "@/components/Enquiry";
import { Location } from "@/components/Location";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Heritage />
        <Portfolio />
        <Services />
        <Restoration />
        <Frames />
        <Reviews />
        <Enquiry />
        <Location />
      </main>
      <WhatsAppFloat />
    </>
  );
}
