"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <Link href="https://www.youtube.com/@Abhisheksahusir/videos">
            
            <h2 className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-xl font-bold transform hover:-translate-y-1 transition duration-400 w-36 h-10 mb-4">
              {item.badge}
            </h2>
            </Link>

            <p className={twMerge( "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "How to solve numericals in Physics🔥?",
    description: (
      <>
        <p>
        Read the question carefully to identify what is being asked. Highlight or write down the important information and units.
        </p>
        <p>
        Determine which physics principle or formula applies to the problem. If you're unsure, review your textbook or notes.
        </p>
      
      </>
    ),
    badge: "Check Now ",
    image:
      "/trace-img1.png",
  },
  {
    title: "How to score full marks in Physics? BIG SURPRISE INSIDE🔥",
    description: (
      <>
        <p>
        Make sure you have a strong foundation in the fundamental physics concepts. Review your textbook and notes regularly.
        </p>
        <p>
        Memorizing formulas is not enough. Understand how and when to apply each formula to solve problems.Pay attention to units and dimensions in every problem. Consistently using the correct units will help you avoid careless mistakes.
        </p>
      </>
    ),
    badge: "Check Now",
    image:
      "/trace-img2.png",
  },
  {
    title: "Most Important Numerical Class 12 Physics 🔥",
    description: (
      <>
        <p>
        📚 When preparing for Class 12 Physics numerical problems, focusing on the most important topics will help you make the best use of your study time. Here are the key topics with some
        </p>
      </>
    ),
    badge: "Check Now",
    image:
      "/trace-img3.png",
  },
];
