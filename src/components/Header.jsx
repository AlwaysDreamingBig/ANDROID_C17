import React, { useState } from 'react'
import MenuSvg from '../assets/svg/MenuSvg';
import {HamburgerMenu} from './design/Header';
import { topLogo } from '../assets/myImages';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom';
import Button from './Button'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
          setOpenNavigation(false);
          enablePageScroll();
        } else {
          setOpenNavigation(true);
          disablePageScroll();
        }
      };

      const handleClick = () => {
        if (!openNavigation) return;
    
        enablePageScroll();
        setOpenNavigation(false);
      };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-m-6 lg:bg-m-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-m-8' : 'bg-m-8/90 backdrop-blur-sm'} `}>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a className='block w-[12rem] xl:mr-8' href='#hero'>
                <img 
                    src={topLogo} 
                    alt="Android17" 
                    width={200} 
                    height={50} />
            </a>

            <nav className={`${openNavigation ? 'flex mt-10' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-m-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row '>
                    {navigation.map((item) => (
                        <a 
                            key={item.id}
                            href={item.url}
                            onClick={handleClick}
                            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-green-400 ${item.onlyMobile ? 'lg:hidden' : ""} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1 shadow-lg shadow-green-400' : 'lg:text-n-1/50'} lg:leading-5 xl:px-12`}>
                                    {item.title}
                        </a>
                    ))}
                </div>

                <HamburgerMenu />
            </nav>

            <a
                href="#signup" 
                className='button hidden mr-8 text-n-1/80 transition-colors hover:text-green-400 hover:p-6 lg:block shadow-lg shadow-slate-800 px-6 py-[1rem] rounded-lg'>
                    New account
            </a>

            <Button 
                className='hidden lg:flex shadow-lg shadow-slate-800 hover:text-green-400 hover:p-9 text-n-1/80 px-8 py-[1.5rem] rounded-lg'
                href='#login'>
                    Sign in
            </Button>

            <Button 
                className='lg:hidden ml-auto'
                px='px-3'
                onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
            </Button>
        </div>
    </div>
  )
}

export default Header