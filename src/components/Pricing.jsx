import React from 'react';
import Section from './Section';
import Heading from './design/Heading';
import { stars } from '../assets';
import { image5 } from '../assets/myPricing';
import PricingCard from './design/PricingCard';
import { LeftLine, RightLine } from './design/Pricing';
import { plans } from '../constants';

const Pricing = () => {

  return (
    <div>
        <Section id={"pricing"} crosses={false}>
            <div className="container mx-auto px-4 py-8">
              <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                  <img
                    src={image5}
                    className="relative z-1"
                    width={300}
                    height={300}
                    alt="Sphere"
                  />

                  <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src={stars}
                      className="w-full"
                      width={950}
                      height={400}
                      alt="Stars"
                    />
                  </div>
              </div>
                
              <Heading 
                title={"Choose Your Plan"}
                tag={"Get The Game: Flexible Pricing Options to Suit Your Needs"}
                />
                <div className="relative flex justify-between">
                  {plans.map((plan, index) => (
                    <PricingCard 
                      key={index}
                      plan={plan.plan}
                      price={plan.price}
                      features={plan.features}
                      additionalFeatures={plan.additionalFeatures}
                      cta={plan.cta}
                      icon={plan.icon}
                      className={plan.color}
                    />
                  ))}

                  <LeftLine />

                  <RightLine />
                </div>
            </div>

            <div className="flex justify-center mt-20">
              <a
                className="text-xs font-code font-bold tracking-wider uppercase border-b"
                href="/pricing"
              >
                See the full details
              </a>
            </div>
          </div>
        </Section>
    </div>
  );
};

export default Pricing;
