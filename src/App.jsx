import Header from "./components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx"
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Collaboration from "./components/Collaboration.jsx";
import StoryLine from "./components/StoryLine.jsx";

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />

          <Hero />

          <Features />

          <StoryLine />

      </div>

      <ButtonGradient />
    </>

  )
}