import Footer from "@/components/Footer";
import About from "@/components/LandingPage/About";
import Advertise from "@/components/LandingPage/Advertise";
import ChooseSection from "@/components/LandingPage/ChooseSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import PeopleSection from "@/components/LandingPage/PeopleSection";
import RateSection from "@/components/LandingPage/RateSection";
import StepSection from "@/components/LandingPage/StepSection";
import Testimonials from "@/components/LandingPage/Testimonials";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <HeroSection/>
      <About/>
      <StepSection/>
      <PeopleSection/>
      <RateSection/>
      <ChooseSection/>
      <Testimonials/>
      <Advertise/>
      {/* <Footer/> */}
    </div>
  );
}
