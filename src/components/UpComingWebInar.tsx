"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const UpComingWebInar = () => {
  const FeaturedWebinar = [
    {
      title: "Mastering Guitar Techniques",
      description: "A deep dive into advanced guitar techniques to help you improve your playing. From fingerstyle to soloing, learn tips from the pros.",
      slug: "mastering-guitar-techniques",
      isFeatured: true,
    },
    {
      title: "Vocal Warm-ups for Singers",
      description: "Learn essential vocal warm-up techniques to prepare your voice for practice or performance. Keep your vocal cords healthy and your voice strong.",
      slug: "vocal-warmups-for-singers",
      isFeatured: true,
    },
    {
      title: "Piano for Beginners: Getting Started",
      description: "This webinar introduces beginner piano players to fundamental techniques and exercises to get you started on your musical journey.",
      slug: "piano-for-beginners",
      isFeatured: true,
    },
    {
      title: "Jazz Improvisation Essentials",
      description: "Explore the core concepts of jazz improvisation. Learn how to improvise on the fly with our expert instructor guiding you step by step.",
      slug: "jazz-improvisation-essentials",
      isFeatured: true,
    },
    {
      title: "Drumming Rudiments and Beyond",
      description: "Master the fundamental drumming rudiments and learn how to apply them to your drumming practice to enhance your rhythm and control.",
      slug: "drumming-rudiments-beyond",
      isFeatured: true,
    },
    {
      title: "Songwriting Techniques",
      description: "Unlock your creativity and learn the art of songwriting. This webinar covers structure, melody creation, and lyric writing for aspiring songwriters.",
      slug: "songwriting-techniques",
      isFeatured: true,
    },
    {
      title: "Music Production on a Budget",
      description: "Learn how to produce high-quality music using affordable software and equipment. Perfect for musicians looking to start recording at home.",
      slug: "music-production-budget",
      isFeatured: true,
    },
    {
      title: "Blues Guitar: Playing with Soul",
      description: "Delve into the soulful techniques of blues guitar. Learn the essential techniques to add feeling and emotion to your playing.",
      slug: "blues-guitar-soul",
      isFeatured: true,
    },
    {
      title: "Classical Music Appreciation",
      description: "This webinar will guide you through the key periods of classical music and help you develop an appreciation for its structure and beauty.",
      slug: "classical-music-appreciation",
      isFeatured: true,
    },
  ];
  
  return (
    <div className="text-white p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect 
        items={FeaturedWebinar.map(webinar=>(
          {
            title:webinar.title,
            description:webinar.description,
            link:"/"
          }
        ))} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
          
          View all webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebInar