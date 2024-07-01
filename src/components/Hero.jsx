import React, { useRef } from 'react'
import Section from './Section'
import Button from './Button'
import { android17_Elden, androidBackground2 } from '../assets/myImages';
import { BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { MyBackgroundCircles } from './design/MyHero';
import Generating from './GeneratingCard';
import Notification from './NotificationCard';
import CompanyLogos from './design/CompaniesLogo';

const Hero = () => {

    const parallaxRef = useRef(null);

  return (
    <Section 
        className="pt-[12rem] mt-[5.25rem]" 
        id={'hero'} 
        crosses={true} 
        crossesOffset={'lg:translate-y-[5.25rem]'}>
            
        <div className='container relative' ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                <h1 className="h1 mb-6">
                    <span>'16'</span>
                    <br />
                    <span> I think it's high time we find out which one of us is stronger!</span>
                    <div className='w-full left-0 right-0 border border-green-950'></div>
                </h1>

                <p className="body-1 max-w-3xl mx-auto mb-6 text-white lg:mb-4 italic bg-m-8">
                    Unleash thy true puissance, Tarnished! And stand 'fore Me with thine AllMighty.
                    I surmise thou art not as feeble as erstwhile.
                    Confront me, Dr. Gero's ultimate design, C17 first of all Cyborgs.
                </p>

                <p className="body-1 max-w-3xl mx-auto mb-6 text-white lg:mb-8 italic font-semibold">
                   
                </p>

                <Button 
                    href="/pricing" 
                    className=' hover:text-m-3 text-black bg-slate-100 rounded-lg'
                    white={'true'}>
                    Get started
                </Button>
            </div>

            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                        <div className="aspect-[43/43] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <div className="h-full overflow-y-scroll scrollbar-hide ">
                                <img
                                    src={android17_Elden}
                                    className="w-full"
                                    width={1024}
                                    height={1024}
                                    id='C17'
                                />
                            </div>
                        </div>

                        <Generating className="absolute left-4 right-4 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 "/>
                    </div>
                </div>

                <div className='absolute lg:-top-[74%] lg:-left-[4%] lg:-right-[14%]    md:-top-[44%]    sm:-left-[15%] sm:-right-[15%] sm:-top-[14%]         -top-[7%] -left-[10%] -right-[10%]' >
                    <img 
                        src={androidBackground2}
                        className='blur-xl'
                        width={1124}
                        height={1124} 
                        alt="hero section" />
                </div> 


                <ScrollParallax isAbsolutelyPositioned>
                    <ul className='hidden absolute -left-[7.5rem] 2xl:-left-[10.5rem] xl:bottom-[29.5rem] px-1 py-1 bg-m-8/90 border border-white/50 rounded-xl xl:flex'>
                        {heroIcons.map((icon, index) => (
                            <li className="p-5" key={index}>
                                <img src={icon} width={24} height={25} alt={icon} />
                            </li>
                        ))}
                    </ul>
                </ScrollParallax>  

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[15rem] -bottom-[22%] w-[18rem] xl:flex"
                    title="Defeated Enemies"
                  />
                </ScrollParallax>  

                <MyBackgroundCircles /> 
            </div>

            <CompanyLogos className="relative lg:block mt-72 px-20" />

        </div>
        
    </Section>
  )
}

export default Hero
