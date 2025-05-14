import Navbar from "@/app/src/components/Navbar/Navbar";
import TextHero from "@/app/src/components/Hero/textHero"
import ImageHero from "@/app/src/components/Hero/imgHero"
import Partners from "@/app/src/components/Partners/partners"
import Growth from "@/app/src/components/Growth/growth"
import Productivity from "./src/components/Productivity/productivity";
import Integration from "@/app/src/components/Integration/integration"
import Testimonials from "./src/components/Testimonials/testimonials";
import Pricing from "@/app/src/components/Pricing/pricing";
import Footer from "@/app/src/components/Footer/footer";

export default function Home() {
  return (
  <main>
    <Navbar />
    <TextHero />
    <ImageHero />
    <Partners />
    <Growth />
    <Productivity />
    <Integration />
    <Testimonials />
    <Pricing />
    <Footer />
  </main>
  )
}
