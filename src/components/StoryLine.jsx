import React, { useState } from 'react';
import Section from './Section';
import {chapters} from '../assets/storyline';
import Heading from './design/Heading';


const StoryLine = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Function to handle chapter selection
  const handleChapterSelect = (chapterId) => {
    setSelectedChapter(chapterId);
  };

  // Separate odd and even indexed chapters
  const oddChapters = chapters.filter((_, index) => index % 2 === 0);
  const evenChapters = chapters.filter((_, index) => index % 2 !== 0);

  return (
    <Section crosses id="storyline" className="py-16">
        <div className='container relative z-2'> 
            <Heading
                className='md:max-w-md lg:max-w-2xl'
                title='Story Telling!'
                tag='Discover your tale: the story of a great man who once fought for humanity'
            />

            <div className=' sm:flex sm:justify-between sm:space-x-12'>
                {/* Left Side:displaying chapters Images */}
                <div className="container mx-auto p-4 flex flex-col justify-center items-center sm:w-1/3 rounded-lg shadow-2xl shadow-m-9">
                    <h2 className="sm:text-xl md:text-2xl lg:text-4xl font-bold lg:mb-24 mb-14 button">Chapters of your Story:</h2>

                    <div className="container mx-auto px-4 flex sm:space-x-5 md:space-x-10 space-x-20 lg:ml-6 mb-10">
                        {/* Left Side: Odd-Indexed Images */}
                        <div className="w-3/4 sm:w-1/2 lg:w-1/3 sm:mt-20 mt-32 transition-colors">
                            <div className="flex flex-col gap-4 sm:space-y-10 space-y-16">
                                {evenChapters.map((chapter) => (
                                    <div key={chapter.id} className="chapter-item hover:w-[110%]">
                                        <img
                                        src={chapter.imgUrl}
                                        alt={chapter.title}
                                        className={`w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 ${
                                            selectedChapter === chapter.id ? 'shining' : 'opacity-50'
                                        }`}
                                        onClick={() => handleChapterSelect(chapter.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Odd-Indexed Images */}
                        <div className="w-3/4 sm:w-1/2 lg:w-1/3 sm:mt-0 mt-10 transition-colors">
                            <div className="flex flex-col gap-4 sm:space-y-10 space-y-16 ">
                                {oddChapters.map((chapter) => (
                                <div key={chapter.id} className="chapter-item hover:w-[110%]">
                                    <img
                                    src={chapter.imgUrl}
                                    alt={chapter.title}
                                    className={`w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 ${
                                        selectedChapter === chapter.id ? 'shining' : 'opacity-50'
                                    }`}
                                    onClick={() => handleChapterSelect(chapter.id)}
                                    />
                                </div>
                                ))}
                            </div>
                        </div>  
                    </div>    
                </div>

                {/* Right Side:displaying chapters story */}
                <div className="hidden sm:w-2/3 sm:flex items-center justify-center">
                    {selectedChapter ? (
                        <div className="chapter-content flex flex-col items-center text-center">
                            <img
                                src={chapters.find((chapter) => chapter.id === selectedChapter).imgUrl}
                                alt={chapters.find((chapter) => chapter.id === selectedChapter).title}
                                className="w-1/2 h-auto rounded-lg mb-8"
                            />

                            <h3 className="text-3xl font-semibold mb-4">
                                {chapters.find((chapter) => chapter.id === selectedChapter).title}
                            </h3>

                            <p className="text-lg leading-relaxed mb-4 h2 italic">
                                {chapters.find((chapter) => chapter.id === selectedChapter).content}
                            </p>
                        </div>
                    ) : (
                        <p className="text-2xl text-green-400 shadow-lg shadow-white animate-pulse">Select a chapter to read its story.</p>
                    )}
                </div>
            </div>
        </div>

        
    </Section>
  );
};

export default StoryLine;
