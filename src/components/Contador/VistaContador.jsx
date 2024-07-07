
const Contador = ({contador, aumentarContador, disminuirContador}) => {
  return (
     <div>
        <p> Contador: { contador } </p>
        <br />
        <button onClick= {aumentarContador}> Sumar Producto + </button>
        <br />
        <br />
        <button onClick= {disminuirContador}> Quitar Producto - </button>
    </div>
  )
}

export default Contador

