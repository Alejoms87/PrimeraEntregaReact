import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import LogicaContador from './components/Contador/LogicaContador'



function App() {
  
  return (
    <div>
      <NavBar />
      <h1 className='titulo'>Hola Mundo</h1>
      <ItemListContainer nombre = {"Prueba"} apellido ={"A ver si funciona"}/>
      <ItemListContainer nombre = {"Reutilizo"} apellido ={"Con texto diferente"}/>
      <LogicaContador />
      
      
    </div>
  )
}

export default App
