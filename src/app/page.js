import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Advertise from "@/components/Home/Advertise";
import ChooseSection from "@/components/Home/ChooseSection";
import HeroSection from "@/components/Home/HeroSection";
import PeopleSection from "@/components/Home/PeopleSection";
import RateSection from "@/components/Home/RateSection";
import StepSection from "@/components/Home/StepSection";
import Testimonials from "@/components/Home/Testimonials";
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
