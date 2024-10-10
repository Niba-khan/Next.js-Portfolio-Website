'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {
  return (
    <div className='h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0' style={{ textAlign: "center" }}>
      <div className='p-4 relative z-10 w-full text-center'>
        <div className='flex justify-center items-center'>
          <Link href="/">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WVjwfF_tvEpVH8KlL6hl5jw6_4920bJuUw&s"
              alt="profile picture"
              height={300}
              width={300}
              className="cursor-pointer items-center rounded-full animate-pulse"
            />
          </Link>
        </div>
        <h1 className='mt-10 md:mt-0 text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-red-900'>
          Hello it's Me Niba khan
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg text-white hover:text-pink-900 max-w-lg mx-auto'>
          "AI Student proficient in TypeScript, HTML, CSS, and Certified Information Technology | Dedicated to advancing AI with coding expertise | Ready to tackle cutting-edge challenges."
        </p>

        <div>
          <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-black'>
            Hire ME
          </button>
          <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-950 text-white border border-black mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-black'>
            Contact
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-6 animate-pulse mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s" alt="Facebook" height={24} width={24} className="rounded-full" />
          </a>
          <a
            href="https://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image src="https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid" alt="Instagram" height={24} width={24} className="rounded-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/niba-farooq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height={24} width={24} className="rounded-full" />
          </a>
          <a
            href="https://github.com/Niba-khan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub" height={24} width={24} className="rounded-full" />
          </a>
        </div>
      </div>
    </div>
  )
}
