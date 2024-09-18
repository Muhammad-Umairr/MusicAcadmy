"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonials = [
  {
    quote:
      "The guitar lessons at this school have completely transformed my playing skills. The instructors are incredibly skilled and passionate, making each session both enjoyable and educational. I've seen remarkable progress!",
    name: "Alice Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "I’ve always dreamed of learning the piano, and this school has made that dream a reality. The lessons are engaging, and the instructors provide excellent feedback, making the learning process smooth and rewarding.",
    name: "Michael Lee",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "The vocal techniques I acquired at this school have significantly enhanced my singing abilities. The comprehensive approach and supportive environment have helped me build my confidence and vocal range.",
    name: "Samantha Green",
    title: "Vocalist",
  },
  {
    quote:
      "The drumming classes here are a perfect blend of challenge and fun. The curriculum is well-structured, and the instructors push you to improve while ensuring you enjoy every beat and rhythm.",
    name: "Ryan Martinez",
    title: "Drumming Student",
  },
  {
    quote:
      "The jazz improvisation course opened up new creative avenues for me. The lessons are thorough and inspiring, helping me develop my unique style and improvisational skills in an engaging way.",
    name: "Laura Davis",
    title: "Jazz Musician",
  },
  {
    quote:
      "The music production fundamentals course provided me with essential skills for creating my own tracks. The hands-on approach and expert guidance made the learning process enjoyable and effective.",
    name: "David Clark",
    title: "Music Producer",
  },
  {
    quote:
      "Exploring classical music history at this school has been an enlightening experience. The depth of knowledge and engaging teaching methods have enriched my understanding of classical music's evolution.",
    name: "Grace Thompson",
    title: "Classical Music Student",
  },
  {
    quote:
      "The blues guitar techniques course helped me refine my playing and express myself more authentically. The instructors' insights and the structured lessons have greatly enhanced my guitar skills.",
    name: "James Wilson",
    title: "Blues Guitarist",
  },
  {
    quote:
      "This school strikes the perfect balance between creativity and structure. The training is thorough and encourages artistic growth while providing the technical skills needed to excel.",
    name: "Emily Carter",
    title: "Multi-Instrumentalist",
  },
  {
    quote:
      "Whether you're a beginner or an advanced musician, this school offers the tools and guidance you need to achieve your goals. The supportive environment and expert instructors make all the difference.",
    name: "Oliver Scott",
    title: "Advanced Musician",
  },
];

const MusicSchoolTestimonial = () => {
  return (
    <div className="text-white h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col  items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={MusicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonial;
