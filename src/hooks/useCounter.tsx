//Creando nuestro propio hook
import { useState } from "react";

export const useCounter = (inicial: number = 10) => {

    const [valor, setValor] = useState<number>(inicial); //() valor inicial de la variable, arreglo, etc

    const contador = (numero: number): void => {
        setValor(valor + numero);
    }

    return {
        valor,
        contador
    }

}
