import React from 'react';
import Section from './Section';
import Heading from './design/Heading';
import { grid } from '../assets';
import { myRoadmap } from '../constants';
import TagLine from './design/Tagline';

const Roadmap = () => {

  return (
    <div>
        <Section id={"roadmap"} crosses={true}>
            <div className="container md:pb-10">
                <Heading 
                    title={"Our Journey Ahead"}
                    tag={"Discover the Future Developments and Exciting Features Coming Your Way"}
                />

                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    {myRoadmap.map((item) => {
                      const status = item.status === "done" ? "Done" : "progress" ?"In progress" : "Planned";

                      return(
                        <div key={item.id}>
                            <div>
                                <div>
                                  <img 
                                    src={grid} 
                                    className='w-full'
                                    width={550}
                                    height={550}
                                    alt="Grid" 
                                  />

                                  <div className="relative z-1">
                                    <div className="flex items-center justify-between">
                                      <TagLine>{item.date}</TagLine>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                      )
                    })}
                </div>
            </div>

        </Section>
    </div>
  );
};

export default Roadmap;
