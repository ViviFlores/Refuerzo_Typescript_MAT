//rafc+enter
export const Funciones = () => {

  //Funciones sin parámetros
  /*const sumar = () : number => {
    return 6+1;
  }*/

  //Funciones con parámetros
  const sumar = (num1: number, num2: number): number => {
    return num1 + num2;  //11
  }
  
  return (
    <div>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(5, 6)}</span>
    </div>
  )
}
