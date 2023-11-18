/*Crear una función que calcule la edad de una persona. 
La función toma como parámetro el año de nacimiento y devuelve la edad 
correspondiente.*/

function calculateAge(year){
    let currentYear = 2023;
    let age = currentYear - year
    alert (age)                    
}

let yearOfBirth = Number(prompt("Ingresa fecha nacimiento"));
calculateAge(yearOfBirth);