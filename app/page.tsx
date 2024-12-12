import Navbar from "@/app/src/components/Navbar/Navbar";
import TextHero from "@/app/src/components/Hero/textHero"
import ImageHero from "@/app/src/components/Hero/imgHero"
import Partners from "@/app/src/components/Partners/partners"
import Growth from "@/app/src/components/Growth/growth"

export default function Home() {
  return (
  <main>
    <Navbar />
    <TextHero />
    <ImageHero />
    <Partners />
    <Growth />
  </main>
  )
}
