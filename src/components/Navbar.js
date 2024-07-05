// the grey color is just rending as black nee dot check if that's a real color (I bet it isn't)
function Navbar() {
  return(
   <nav className="nav hidden flex flex-col lg:block">
    <ul className="mt-16">
      <li><a href="/#about">About</a></li>
      <li><a href="/#experience">Experience</a></li>
      <li><a href="/#projects">Projects</a></li>
    </ul>
   </nav> 
  ) 
}

export default Navbar;