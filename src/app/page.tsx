import FeaturedCourses from "@/components/FeaturedCourses"
import {HeroSection} from "../components/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import MusicSchoolTestimonial from "@/components/TestimonialCards"
import UpComingWebInar from "@/components/UpComingWebInar"
import Instructors from "@/components/Instructors"
import Footer from "@/components/Footer"

export default function Home() {
  return <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0] ">
   
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicSchoolTestimonial/>
    <UpComingWebInar/>
    <Instructors/>
    <Footer/>
  </main>
}
