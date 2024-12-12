import Navbar from "@/app/src/components/Navbar/Navbar";
import TextHero from "@/app/src/components/Hero/textHero"
import ImageHero from "@/app/src/components/Hero/imgHero"
import Parteners from "@/app/src/components/Parteners/parteners"

export default function Home() {
  return (
  <main>
    <Navbar />
    <TextHero />
    <ImageHero />
    <Parteners />
  </main>
  )
}
