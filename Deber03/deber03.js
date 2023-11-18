/*Desarrollar una función que realice la multiplicación utilizando únicamente sumas. 
La función recibe como parámetros el multiplicador y el multiplicando, 
utiliza un bucle para realizar sumas sucesivas y devolver el resultado.*/

`use strict`

function multiplicar(multiplicador , multiplicando){
    let suma =0;
    for(let i=0; i < multiplicador; i++){
        suma = suma + multiplicando;
    }

    return suma;
}

//let multiplicador = parseInt(prompt("Ingresar primer valor"));
//let multiplicando = parseInt(prompt("Ingresar el segundo valor"));

//alert(`resultado es ${multiplicador * multiplicando}`);


//multiplicar(multiplicador, multiplicando)

let primerNumero = Number(prompt("Ingrese multiplicador"));
let segundoNumero = Number(prompt("Ingrese multiplicador"));

let resultado = multiplicar(primerNumero, segundoNumero);
alert(resultado);
