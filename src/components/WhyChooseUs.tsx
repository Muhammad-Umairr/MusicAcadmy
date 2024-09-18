"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const WhyChooseUs = () => {

    const musicSchool = [
        {
          title: "Personalized Lessons",
          description:
            "Get one-on-one lessons with expert instructors tailored to your skill level and musical interests. Whether you're a beginner or an advanced student, our personalized approach ensures you reach your full potential in no time.",
        },
        {
          title: "Learn at Your Own Pace",
          description:
            "We understand that everyone learns differently. With our platform, you have the flexibility to learn at your own pace, anytime, anywhere. Track your progress, revisit lessons, and keep improving with our easy-to-use platform.",
        },
        {
          title: "Diverse Music Courses",
          description:
            "From classical instruments to modern production techniques, our wide range of courses covers every aspect of music. Explore genres, techniques, and instruments to expand your musical knowledge and abilities.",
        },
        {
          title: "Expert Instructors",
          description:
            "Learn from world-class musicians and industry experts. Our instructors bring years of experience and are passionate about helping you develop your skills and find your unique sound.",
        },
      ];
      

  return <div className="text-white">

    <StickyScroll content={musicSchool}/>   
    
    </div>;
};

export default WhyChooseUs;
