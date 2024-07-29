import React from 'react'
import Section from './Section'
import Heading from './design/Heading'
import { check, service1, service2 } from '../assets'
import { android17Services } from '../constants'
import { svg1, svg12, svg17, svg5, svg6 } from '../assets/myServices'
import Generating from './GeneratingCard'

const Services = () => {
  return (
    <Section id={"how-to-use"}>
        <div className="container">
            <Heading 
                title={"Our Expert Services"}
                text={"Discover the comprehensive range of services we offer, designed to meet your unique needs and drive your entertainment."}
                tag={"Add to your team a young and polyvalent teammate."}
            />

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img
                            className="w-full h-full object-cover md:object-right"
                            width={800}
                            alt="Smartest AI"
                            height={730}
                            src={svg1}
                         />
                    </div>

                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h5 mb-4">Software Engineer</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Multilevel experienced on various subjects and projects.
                        </p>
                        <ul className="body-2">
                            {android17Services.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start py-4 border-t border-n-6"
                            >
                                <img width={24} height={24} src={check} />
                                <p className="ml-4">{item}</p>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <Generating 
                        className="absolute left-20 right-20 -bottom-4 sm:bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
                        text={'Joining the party...'} />

                </div>

                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                            src={svg12}
                            className="h-full w-full object-cover"
                            width={630}
                            height={750}
                            alt="robot"
                            />
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                            <h4 className="h4 mb-4">Augmented Reality Integration</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                            Enhance your user experience with cutting-edge AR technology using our ANDROID-17 app&apos;s
                            in-game AR feature. Try it now!
                            </p>
                        </div>

                        {/** Add photochat message component */}
                    </div>

                    <div className="relative grid gap-5 grid-rows-2">
                        <div className="relative gap-5 border border-white/30 rounded-3xl overflow-hidden min-h-[300px] bg-gradient-to-b from-n-8/0 to-n-8/90">
                            <div className="absolute top-0 right-0 w-full h-full sm:w-2/5 md:w-3/5 xl:w-auto">
                                <img
                                    className="w-full h-full object-cover md:object-right"
                                    width={800}
                                    alt="Girl AI"
                                    height={730}
                                    src={svg5}
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-[28rem] sm:p-4">
                                <h4 className="h2 font-bold font-serif mb-4">Inclusive Design Services</h4>
                                <p className="body-2 text-n-3">
                                    Creating Gender-Inclusive User Experiences: Male and Female Characters.
                                </p>
                            </div>
                        </div>

                        <div className="relative gap-5 grid grid-cols-2 rounded-3xl overflow-hidden">
                            <div className="relative gap-5 border border-white/30 rounded-3xl bg-green-600">
                                <div className="absolute inset-0">
                                    <img
                                    src={svg6}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                    />
                                </div>
                            </div>
    
                            <div className="relative gap-5 border border-white/30 rounded-3xl bg-purple-600">
                                <div className="absolute inset-0">
                                    <img
                                    src={svg17}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Services