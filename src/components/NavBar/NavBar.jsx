import './NavBar.css'
import CarWidget from './CarWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li> Comics </li>
            <li> Funkos </li>
            <li> Juegos </li>
        </ul>
        
        <CarWidget />
        
    </nav>
  )
}

export default NavBar