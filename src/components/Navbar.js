// the grey color is just rending as black nee dot check if that's a real color (I bet it isn't)
function Navbar() {
  return(
   <nav className="flex flex-col invisible md:visible text-center">
    <a href="/#about">About</a>
    <a href="/#experience">Experience</a>
    <a href="/#projects">Projects</a>
   </nav> 
  ) 
}

export default Navbar;