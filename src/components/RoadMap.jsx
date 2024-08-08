import React from 'react';
import Section from './Section';
import { myRoadmap } from '../constants';
import TagLine from './design/Tagline';
import Heading from './design/Heading';
import { doneIcon, inProgressIcon2, plannedIcon1 } from '../assets/myRoacmap';

const Roadmap = () => {
  return (
    <Section id="roadmap" crosses>
      <div className="container mx-auto py-12">
        <Heading 
            title={"Our Journey Ahead"}
            tag={"Discover the Future Developments and Exciting Features Coming Your Way"}
        />

        <div className="relative flex flex-col items-center space-y-10">
          {/* Line with circles */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300 transform -translate-x-1/2 z-0">
            {myRoadmap.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`absolute w-6 h-6 rounded-full ${milestone.classname} border-2 border-white z-10`}
                style={{ top: `${(index + 1) * 480}px`, left: '50%', transform: 'translateX(-50%) translatey(-900%)' }}
              />
            ))}
          </div>

          {myRoadmap.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`relative ${index % 2 === 0 ? 'self-start' : 'self-end'} w-full md:w-1/2 lg:w-1/3 transform hover:scale-105 transition-transform duration-300 ${milestone.classname} rounded-lg shadow-lg p-6 mb-8 z-10`}
              style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
            >
              <div className="absolute w-full h-full top-0 left-0 bg-black opacity-10 transform rotate-2" />
              <img
                src={milestone.imageUrl}
                alt={milestone.title}
                className="w-full h-60 object-cover rounded-lg mb-4 "
              />
              <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
              <p className="mb-4">{milestone.text}</p>
              <div className="block text-sm text-gray-400"><TagLine dateClassName={"text-cyan-200 font-semibold"}>{milestone.date}</TagLine></div>
              <div className={`absolute flex items-center top-0 right-0 m-2 px-2 py-1 rounded-full text-white text-xs ${milestone.status === 'done' ? 'bg-green-500' : milestone.status === 'progress' ? 'bg-yellow-500' : 'bg-purple-500'}`}>
                <img
                  src={milestone.status === "done"? doneIcon : milestone.status === "planned"? plannedIcon1 : inProgressIcon2}
                  className=' mr-2'
                  width={20}
                  height={20}
                  alt={milestone.status} 
                />

                {milestone.status.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
