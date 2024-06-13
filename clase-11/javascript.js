/* let edad = prompt('ingresa tu edad')
let lenguaje = prompt("lenguaje Favorito")

if (edad >= 16 && lenguaje === 'JS'){
    console.log('bienvenido al desarrollo web frontend')
}

else{
    console.log('no se puede ser perfecto')
}
 */

//grupo etario
/* 
let edad = Number(prompt('ingresa tu edad'))

if (edad <= 0 || isNaN(edad) || edad === null){
    console.log('Edad No Valida')
}

else if (edad<=13){
    console.log('Eres Un Niño')
}

else if (edad>13 && edad<=17){
    console.log('Eres Un Adolescente')
}

else if (edad>=18 && edad<=64){
    console.log('Eres Un Adulto')
}

else if (edad >= 65){
    console.log('Eres Una Persona Mayor')
}
 */

//calificacion

/* let calificacion = prompt('Introduzca una calificacion')

if(calificacion >= 90 && calificacion <= 100){
    console.log('A')
}
else if (calificacion >= 80 && calificacion < 90){
    console.log('B')
}
else if (calificacion >= 70 && calificacion < 80){
    console.log('C')
}
else if (calificacion >= 60 && calificacion < 70){
    console.log('D')
}
else if (calificacion >= 0 && calificacion < 60){
    console.log('F')
}
else{
    console.log('Calificacion no valida')
}
 */

//traingulo

/* let lado1 = prompt('ingrese medida lado 1')
let lado2 = prompt('ingrese medida lado 2')
let lado3 = prompt('ingrese medida lado 3')


if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    console.log('longitudes no validas')
}

else if(lado1 === lado2 && lado2 === lado3){
    console.log('Equilatero')
}

else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log('Isósceles')
}

else{
    console.log('Escaleno')
} */


//dias de la semana

/* let numero = Number(prompt('introduci un numero del 1 al 7'))

if (numero < 1 || numero > 7 || isNaN(numero)){
    console.log('Numero No Valido')
}
else if (numero === 1){
    console.log('Lunes')
}
else if (numero === 2){
    console.log('martes')
}
else if (numero === 3){
    console.log('miercoles')
}
else if (numero === 4){
    console.log('jueves')
}
else if (numero === 5){
    console.log('viernes')
}
else if (numero === 6){
    console.log('sabado')
}
else if (numero === 7){
    console.log('domingo')
} */




let temperatura = prompt('Ingresa la temperatura en grados celcius')

if (!temperatura|| isNaN(temperatura)){
    console.log('ERROR: Temperatura debe ser un dato numerico')
}
else{
    if (temperatura <= 0){
        console.log('Solido')
    }

    else if (temperatura >= 1 && temperatura < 100){
        console.log('Liquido')
    }

    else if(temperatura >=100){
        console.log('Gaseoso')
    }
}
