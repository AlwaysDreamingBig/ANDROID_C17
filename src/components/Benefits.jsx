import React from 'react';
import Section from './Section';
import Heading from './design/Heading';
import { benefits } from '../constants';
import Arrow from '../assets/svg/Arrow';

const Benefits = () => {
  return (
    <Section id={'features'}>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Explore Our Advanced Features'
          tag='Unlock the Full Potential with Our Cutting-Edge Tools'
        />

        <div className='wrap flex-1 gap-10 mb-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {benefits.map((item) => (
            <div
              className='block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transform hover:scale-105 transition-transform duration-300 rounded-[12%] overflow-hidden p-1'
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]'>
                <h5 className='button text-base mb-3'>{item.title}</h5>

                <p className='body-2 mb-6 text-white/85'>{item.text}</p>

                <div className='flex items-center mt-auto'>
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                    Explore more
                  </p>

                  <Arrow />
                </div>
              </div>

              <img
                src={item.imageUrl}
                alt="feature's image"
                className='absolute top-0 left-0 z-10 opacity-10 w-full h-full object-cover rounded-lg transition-opacity duration-300 hover:opacity-30 px-2'
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
