import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {

    //Llamar a nuestro custom hook
    //Accedemos a los valores de retorno de nuestra función - hook
    const {valor, contador} = useCounter(50);

    return (
        <div>
            <h3>Contador custom hook: <small>{valor}</small></h3>
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
