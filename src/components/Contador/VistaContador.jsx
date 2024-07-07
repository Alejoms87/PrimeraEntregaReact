
const Contador = ({contador, aumentarContador, disminuirContador}) => {
  return (
     <div>
        <p> Contador: { contador } </p>
        <br />
        <button onClick= {aumentarContador}> Aumentar + </button>
        <br />
        <br />
        <button onClick= {disminuirContador}> Disminuir - </button>
    </div>
  )
}

export default Contador

