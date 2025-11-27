import Image from "next/image";
import { LightRays } from "@/components/ui/light-rays"
import { CoolMode } from "@/components/ui/cool-mode"
import { Button } from "@/components/ui/button"
import { ShineBorder } from "@/components/ui/shine-border"
import screenshot from "../assets/screenshot.png"
import { MoveRight } from "lucide-react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { Particles } from "@/components/ui/particles"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"



function Hero(){



    return(
   <div className="relative overflow-hidden flex flex-col justify-center items-center h-full bg-black">
      <Particles className="absolute inset-0 z-0  h-screen" />
      <Button className="relative overflow-hidden mt-40 border border-zinc-600 rounded-4xl text-[10px] md:text-[12px] z-10">✨<AnimatedGradientText> Introducing Blognest- Social Blogging </AnimatedGradientText><BorderBeam /></Button>
   <div className="flex flex-row justify-center items-center text-white w-[80vw] pt-5 text-[45px] md:text-7xl text-center">
    Blognest Social where words builds connects.
   </div>
   <div className="flex flex-row justify-center items-center w-[60vw] m-8  text-center text-[14px] md:text-[18px] text-zinc-600">
    Your space for random thoughts and real connections. A place to like what speaks to you, comment on what resonates, follow the people you vibe with, and just be yourself.
   </div>
   <CoolMode>
  <Button variant={"outline"} className="text-[20px] font-medium text-black mt-10 bg-white">Try Now For free <MoveRight/> </Button>
</CoolMode>
<div className="relative overflow-hidden rounded-xl w-[80vw] h-full mt-24 md:mt-26">
  <Image src={screenshot} alt="screenshot" className="rounded-xl grayscale"/>
  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} duration={10}/>
</div>
   <LightRays />
   <Particles className="absolute inset-0 z-0  h-screen" />
   </div>
    )
}

export default Hero