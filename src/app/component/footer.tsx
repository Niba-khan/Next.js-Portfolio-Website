import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-style py-5 text-black" style={{ backgroundColor: "rgb(4, 4, 70)" }}>
      <div className="container mx-auto text-center md:text-left">
        <div className="text-center mt-4">
          {/* Profile Image */}
          <div className="image-style flex justify-center mb-6 animate-pulse">
            <Image
              id="my-image"
              src="https://instacaptionsforall.in/wp-content/uploads/2023/11/54-2-1024x1024.jpg"
              alt="AI Engineer"
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
          {/* Navigation */}
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/" className="hover:text-red-500">
              <b><i>Home</i></b>
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              <b><i>About</i></b>
            </Link>
            <Link href="/project" className="hover:text-green-500">
              <b><i>Project</i></b>
            </Link>
            <Link href="/contact" className="hover:text-yellow-800">
              <b><i>Skills</i></b>
            </Link>
          </div>
          
          {/* Connect with Me */}
          <div className="flex justify-center space-x-4 mb-6 animate-pulse">
            <a
              href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s" alt="Facebook" height={24} width={24} />
            </a>
            <a
              href="https://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid" alt="Instagram" height={24} width={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height={24} width={24} />
            </a>
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub" height={24} width={24} />
            </a>
          </div>

          <p className="text-sm hover:text-white">&copy; {new Date().getFullYear()} Niba Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
