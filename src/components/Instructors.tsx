"use client"

import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { image } from "framer-motion/client";

const Instructors = () => {

    const Instructors = [
        {
          id: 2,
          name: "Emily Davis",
          designation: "Piano Instructor",
          image:"https://plus.unsplash.com/premium_photo-1661919869207-2d313d06f8ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          id: 3,
          name: "Michael Thompson",
          designation: "Vocal Coach",
          image:"https://plus.unsplash.com/premium_photo-1663045484188-2a532ce07b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc29yfGVufDB8fDB8fHww"
        },
        {
          id: 4,
          name: "Sarah Lee",
          designation: "Violin Instructor",
          image:"https://plus.unsplash.com/premium_photo-1663090665406-8b3e6ffc43cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        
      ];
      

  return (
    <div className="text-white relative h-[40rem] overflow-hidden flex items-center justify-center">
        
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className=" text-base md:text-lg text-white text-center mb-4">Discover the talented professional who will guide your musical journey.</p>

            <div className="flex flex-row items-center justify-center mb-10 w-full   text-white">
                <AnimatedTooltip items={Instructors}/>
            </div>
        </WavyBackground>
        
        </div>

  )
}

export default Instructors