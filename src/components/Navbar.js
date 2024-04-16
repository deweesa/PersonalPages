// the grey color is just rending as black nee dot check if that's a real color (I bet it isn't)
function Navbar() {
  return(
    <nav className="w-full flex justify-end ml-auto py-2 bg-green-500">
      <div className="mr-6">
        <a className="text-grey-500 hover:text-grey-800" href="#">About</a>
      </div>
      <div className="mr-6">
        <a className="text-grey-500 hover:text-grey-800" href="#">Experience</a>
      </div>
      <div className="mr-6">
        <a className="text-grey-500 hover:text-grey-800" href="/about">Projects</a>
      </div>
      <div className="mr-6">
        <a className="text-grey-500 hover:text-grey-800" href="/about">Contact</a>
      </div>
    </nav>
  ) 
}

export default Navbar;