import './App.css'
import EjemploContador from './components/Ejemplos/EjemploContador'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  
  return (
    <div>
      <NavBar />
      <h1 className='titulo'>Hola Mundo</h1>
      <ItemListContainer nombre = {"Prueba"} apellido ={"A ver si funciona"}/>
      <ItemListContainer nombre = {"Reutilizo"} apellido ={"Con texto diferente"}/>
      <EjemploContador />
      
      
    </div>
  )
}

export default App
