import React from 'react';
import Section from './Section';
import Heading from './design/Heading';
import { screenshots } from '../constants';
import { VideoBar } from './design/Services';

const Screenshots = () => {
  return (
    <Section id={"screenshots"} crosses={true}>
      <div className="container mx-auto px-4 py-8">
        <Heading 
          title={"Visualize the Experience"}
          tag={"Explore the Stunning Gameplay Screenshots and Interactive Demos."}
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={screenshot.src} 
                alt={screenshot.alt} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
                <VideoBar />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="/demo"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Try Our Interactive Demo
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Screenshots;
