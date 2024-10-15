import Image from "next/image";
import BlurInDemo from "./components/global/Hero1";
import { HeroVideoDialogDemo } from "./components/global/video";



import { ScrollBasedVelocityDemo } from "./components/global/Lines";
import { AnimatedGradientTextDemo } from "./components/global/Shinetext";

import { RainbowButtonDemo } from "./components/global/Button";
import { StreamVideo } from "./components/global/course-card";




export default function Home() {
  return (
<>
<main className="h-full w-full">

<div className="flex flex-col bg-black gap-20">
<AnimatedGradientTextDemo />
<section className="mt-[94px] ">
 
  <BlurInDemo />
  <HeroVideoDialogDemo />
</section>
<ScrollBasedVelocityDemo />

{/* <TracingBeamDemo /> */}
{/* <h1 className="relative z-10 text-4xl md:text-7xl mt-[-30px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Specials ✨
        </h1> */}
<StreamVideo />
{/* <HeroHighlightDemo /> */}
<RainbowButtonDemo />

        

</div>
</main>
</>
  );
}
