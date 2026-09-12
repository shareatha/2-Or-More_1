import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Services from "@/components/home/Services";
import SignatureOffer from "@/components/home/SignatureOffer";
import PowerHour from "@/components/home/PowerHour";
import HowItWorks from "@/components/home/HowItWorks";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import ServiceArea from "@/components/home/ServiceArea";
import ALaCarte from "@/components/home/ALaCarte";
import InquiryForm from "@/components/home/InquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <SignatureOffer />
      <PowerHour />
      <HowItWorks />
      <About />
      <Portfolio />
      <Testimonials />
      <ServiceArea />
      <ALaCarte />
      <InquiryForm />
    </>
  );
}
