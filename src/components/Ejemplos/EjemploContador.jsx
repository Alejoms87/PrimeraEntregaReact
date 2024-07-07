import { useState } from "react"
import Contador from "./Contador"

const EjemploContador = () => {

   const [ contador, setContador ] = useState (0)

    const aumentarContador = () => {

        setContador( contador + 1 )


    }

    const disminuirContador = () => {

        setContador(contador - 1)
    }


    return (
        <Contador contador={ contador} aumentarContador = { aumentarContador} disminuirContador = {disminuirContador}/>
   
  )
}

export default EjemploContador