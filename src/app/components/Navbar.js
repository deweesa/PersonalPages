'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="nav hidden flex flex-col lg:block">
      <ul className="mt-16">
        <li><Link className={pathname === "/#about" ? "active" : ""} href="/#about">About</Link></li> 
        <li><Link className="" href="/#experience">Experience</Link></li> 
        <li><Link className="" href="/#projects">Projects</Link></li> 
      </ul>
    </nav>
  )
}
