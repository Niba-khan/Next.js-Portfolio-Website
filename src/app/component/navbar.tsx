import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="text-blue-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex titlefont font-medium items-center text-blue-700 mb-4 md:mb-0">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.dribbble.com/users/2988016/screenshots/9880379/media/3fd877e2eb096f0f1ae622d188ac349a.gif"
            alt="logo"
          />
          <span className="ml-3 text-xl">Niba Khan</span>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link className="ml-2 mr-5 hover:text-red-500" href="/">Home</Link>
          <Link className="ml-2 mr-5 hover:text-blue-500" href="/about">About</Link>
          <Link className="ml-2 mr-5 hover:text-green-500" href="/project">Project</Link>
          <Link className="ml-2 mr-5 hover:text-yellow-500" href="/contact">Contact</Link>
        </nav>

        <a
          className="flex justify-end bg-gray-700 text-white border-1 px-6 py-3 rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
          href="https://cv-in-html-css.vercel.app/"
        >
          Download CV
        </a>
      </div>
    </header>
  )
}
