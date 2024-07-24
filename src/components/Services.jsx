import React from 'react'
import Section from './Section'
import Heading from './design/Heading'
import { check, service1 } from '../assets'
import { android17Services } from '../constants'
import { svg1 } from '../assets/myServices'

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
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Services