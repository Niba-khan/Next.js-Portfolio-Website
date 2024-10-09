import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <div style={{ backgroundImage: "url(https://media.tenor.com/NXQ8OEBqZ0EAAAAM/galaxy-stars.gif)", backgroundSize: "cover" }}>
      <div className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className='mt-10 md:mt-0 text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text text-center bg-gradient-to-r from-blue-900 via-purple-700 to-pink-700'>PROJECTS</h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
          {/* Project 1 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://protfolio-website-using-html-css.vercel.app/">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='/images/Portfolio.png'
                  alt='Portfolio'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://github.com/Niba-khan/TODO_LIST_APP.git">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='https://www.freecodecamp.org/news/content/images/2020/07/cover-1.png'
                  alt='Todo app'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>

          {/* Project 3 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://github.com/Niba-khan/STUDENT-MANGEMENT-SYSTEM.git">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='https://i.ytimg.com/vi/dufUnTkW62w/maxresdefault.jpg'
                  alt='Student Management System'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>

          {/* Project 4 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://github.com/Niba-khan/Marksheet.git">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='https://i.ytimg.com/vi/CI7ss8nu6KM/maxresdefault.jpg'
                  alt='Marksheet'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>

          {/* Project 5 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://github.com/Niba-khan/simple-calculator.git">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='https://i.ytimg.com/vi/f2DN1PNIz80/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvfQiIKu7UohJvwThHyrXmr7h2oA'
                  alt='Simple Calculator'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>

          {/* Project 6 */}
          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <Link href="https://teqacher-day-card.vercel.app/">
              <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 w-full h-[200px] md:h-[300px] relative'>
                <Image 
                  src='/images/teacher day.png'
                  alt='Teacher Day'
                  layout='fill'
                  className='object-contain'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
