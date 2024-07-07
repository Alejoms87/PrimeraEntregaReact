import './App.css'
import NavBar from './components/NavBar/NavBar'
import LogicaContador from './components/Contador/LogicaContador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  
  return (
    <div>
      <NavBar />      
      <h1 className='titulo'>Proximamente tienda! Aun estamos construyendo el sitio!</h1>
      <ItemListContainer saludo = {"Bienvenido a mi E-commerce"}/>
      <LogicaContador />
            
    </div>
  )
}

export default App
