import './NavBar.css'
import CarWidget from './CarWidget'
import Titulo from '../../Titulo.jsx'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Titulo />
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