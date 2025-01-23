import { useState } from "react";

export const Contador = () => {
    //hook useState: el cambio de estado de un componente, variable, arreglo, etc
    //1. variable, arreglo, etc --- valor
    //2. función que cambia el estado variable, arreglo, etc
    const [valor, setValor] = useState<number>(0); //() valor inicial de la variable, arreglo, etc

    //Cambiar estado mediante la función
    const contador = (numero: number): void => {
        setValor(valor + numero);
    }

    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => contador(1)}>+1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => contador(-1)}>-1</button>
        </div>
    )
}
