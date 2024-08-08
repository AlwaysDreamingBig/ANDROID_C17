import Header from "./components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx"
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import StoryLine from "./components/StoryLine.jsx";
import Services from "./components/Services.jsx";
import Screenshots from "./components/Screenshots.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/RoadMap.jsx";

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />

          <Hero />

          <Features />

          <StoryLine />

          <Services />

          <Screenshots />

          <Pricing />

          <Roadmap />

      </div>

      <ButtonGradient />
    </>

  )
}