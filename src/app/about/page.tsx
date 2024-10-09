"use client";

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div style={{ backgroundImage: "url(https://media.tenor.com/NXQ8OEBqZ0EAAAAM/galaxy-stars.gif)", backgroundSize: "cover" }}>
      <section className='text-white'>
        <div className='md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 sm:py-16'>
          <Image
            src="https://w0.peakpx.com/wallpaper/730/498/HD-wallpaper-hijabi-girl-android-ball-camera-cute-muslimah-one-school-super.jpg"
            alt="picture"
            height={350}
            width={350}
            className="cursor-pointer items-center animate-pulse"
          />

          <div className="bg-black p-6 rounded-lg border-4 border-blue-950 transition-colors duration-300 hover:border-white">
            <h2 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-red-900 mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
              Hello Everyone! Welcome to my Portfolio. This is me, Niba Khan, an AI Engineering student with a strong foundation in TypeScript, HTML, CSS, Next.js, and a Certified Information Technology (CIT) professional. I am dedicated to advancing the field of artificial intelligence with my coding expertise and am always ready to tackle cutting-edge challenges and contribute to innovative projects.
            </p>
            <div className='lg:ml-auto mb-4'>
              <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-red-900 mb-4'>My Skills</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 items-center gap-[1rem]'>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>90%</p>
                  <p className='text-[15px] text-black font-600'>TypeScript</p>
                </div>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>70%</p>
                  <p className='text-[20px] text-black font-600'>HTML</p>
                </div>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>60%</p>
                  <p className='text-[20px] text-black font-600'>CSS</p>
                </div>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>50%</p>
                  <p className='text-[20px] text-black font-600'>Next.js</p>
                </div>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>70%</p>
                  <p className='text-[15px] text-black font-600'>JavaScript</p>
                </div>
                <div className='p-0 text-center bg-blue-900 hover:bg-blue-400'>
                  <p className='text-[35px] text-black font-bold'>90%</p>
                  <p className='text-[20px] text-black font-600'>CIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
