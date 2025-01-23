import { useEffect, useState } from "react";

export const ComponenteUseEffect = () => {
    //hook useState: permite cambiar el estado de la variable, arreglo, componente, etc
    const [bandera, setBandera] = useState<boolean>(false);

    //función para cambiar el estado de la variable bandera
    const cambiarBandera = (): void => {    
        setBandera(!bandera);
    }

    //hook useEffect: permite ejecutar efectos secundarios en componentes funcionales
    //1. se ejecuta cada vez que el componente se renderiza
    //2. se ejecuta cuando existe una lista de dependencias
    useEffect(() => {
        //Código a ejecutar
        console.log('Desde el useEffect');
    }, [bandera]); //lista de dependecias

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiarBandera}>Cambiar</button>
        </div>
    )
}
