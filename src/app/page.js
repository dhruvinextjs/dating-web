import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Advertise from "@/components/Home/Advertise";
import ChooseSection from "@/components/Home/ChooseSection";
import PeopleSection from "@/components/Home/PeopleSection";
import RateSection from "@/components/Home/RateSection";
import StepSection from "@/components/Home/StepSection";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Landing Page</h1>
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
