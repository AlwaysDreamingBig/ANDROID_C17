import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import { Planet1, Planet10, Planet11, Planet2, Planet3, Planet4, Planet5, Planet6, Planet7, Planet8, Planet9 } from "../../assets/svg/MyPlanetSvg";

const Rings = () => {
    return (
      <>
        <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </>
    );
  };
  
  export const MyBackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
        <Rings />
  
        <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
          {/* Upper arc */}
          <div className="absolute top-[40%] -left-[27%] w-0.25 h-1/2 origin-bottom rotate-[30deg]">
            <Planet1 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
          </div>

          <div className="absolute top-[5%] left-[65%] w-0.25 h-1/2 origin-bottom rotate-[40deg]">
            <Planet2 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
          </div>

          <div className="absolute top-[28%] left-[25%] w-0.25 h-1/2 origin-bottom rotate-[0deg]">
            <Planet3 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          {/* Middle arc */}
          <div className="absolute top-[30%] left-[70%] w-0.25 h-1/2 origin-bottom rotate-[10deg]">
            <Planet4 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          <div className="absolute top-[50%] left-[105%] w-0.25 h-1/2 origin-bottom rotate-[0deg]">
            <Planet5 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          <div className="absolute top-[70%] -left-[10%] w-0.25 h-1/2 origin-bottom rotate-[0deg]">
            <Planet6 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          {/* Lower arc */}
          <div className="absolute top-[77%] left-[95%] w-0.25 h-1/2 origin-bottom rotate-[0deg]">
            <Planet7 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          <div className="absolute top-[70%] left-[64%] w-0.25 h-1/2 origin-bottom rotate-[660deg]">
            <Planet8 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>

          <div className="absolute top-[85%] left-[95%] w-0.25 h-1/2 origin-bottom rotate-[690deg]">
            <Planet9 className={`transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}/>
          </div>
        </MouseParallax>

      </div>
    );
  };