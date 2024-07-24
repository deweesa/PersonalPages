function Navbar() {
  return(
   <nav className="nav hidden flex flex-col lg:block">
    <ul className="mt-16">
      <li><a className="nav-text group" href="/#about"><span className="group-hover:text-red-800 group-focus-visible:text-red-800">About</span></a></li>
      <li><a className="hover:text-blue-800 focus:text-blue-800" href="/#experience">Experience</a></li>
      <li><a href="/#projects">Projects</a></li>
    </ul>
   </nav> 
  ) 
}

export default Navbar;