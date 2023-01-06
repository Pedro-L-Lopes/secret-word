import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>
    </nav>
  )
}

export default Navbar