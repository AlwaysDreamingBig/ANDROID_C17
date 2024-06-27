import React from 'react'
import Section from './Section'
import Button from './Button'
import { curve, heroBackground, robot } from "../assets";
import { android17_Elden, androidBackground, androidBackground2 } from '../assets/myImages';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <Section 
        className="pt-[12rem] mt-[5.25rem]" 
        id={'hero'} 
        crosses={true} 
        crossesOffset={'lg:translate-y-[5.25rem]'}>
            
        <div className='container relative'>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                <h1 className="h1 mb-6">
                    <span>'16'</span>
                    <br />
                    <span> I think it's high time we find out which one of us is stronger!</span>
                    <div className='w-full left-0 right-0 border border-green-950'></div>
                </h1>

                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-4 italic">
                    Unleash thy true puissance, Tarnished! And stand 'fore Me with thine AllMighty.
                    I surmise thou art not as feeble as erstwhile.
                </p>

                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 italic font-semibold">
                    Confront me, Dr. Gero's ultimate design, C17 first of all Cyborgs.
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
                    </div>
                </div>

                <div className='absolute md:-top-[34%] md:-left-[14%] md:-right-[14%] sm:-left-[15%] sm:-right-[15%] sm:-top-[14%] -top-[7%] -left-[10%] -right-[10%]' >
                    <img 
                        src={androidBackground2}
                        className='blur-xl'
                        width={1440}
                        height={1880} 
                        alt="hero section" />
                </div>      
            </div>
        </div>
        
    </Section>
  )
}

export default Hero