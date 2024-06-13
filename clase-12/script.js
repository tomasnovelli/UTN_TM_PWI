
//While

/* let texto = prompt('ingresar una palabra')

while(!nombre || !isNaN(texto)){
    alert('NO ingresaste un nombre valido')
    nombre = prompt('por favor ingresa un nombre valido')
} */

//FOR

/* for(let iterador = 1; iterador <= 3; iterador = iterador +1){
    let nombre = prompt('ingresa tu nombre: ')
    alert(nombre)
}

let listadenombre = 'Lista de Nombres: '
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let nombre = prompt('ingrese un nombre')
    listadenombre = listadenombre + \n + nombre
}

alert('listadenombre') */

/* let listaDeNumeros = ''
let sumaDeNumeros = 0
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let numero = Number(prompt('ingresa un numero'))
    listaDeNumeros = listaDeNumeros + '\n' + numero
    sumaDeNumeros = sumaDeNumeros + numero
}

alert(listaDeNumeros)
alert('Resultado: ' + sumaDeNumeros)
 */

//corregir con lo de la clase

/* let repeticiones = prompt('ingresa numero de repeticiones')
while(!repeticiones || isNaN(repeticiones)){
    alert('NO ingresaste un numero valido')
    repeticiones = prompt('Ingresa un numero valido')
}
let sumaNumeros = 0
for(let iterador = 1 ; iterador <= cantidadDeRepeticiones; iterador = iterador + 1){
    let numero = prompt('ingresa un numero'))
    sumaNumeros = sumaNumeros + numero
}

alert('Resultado: ' + sumaNumeros) */


/* function sumar(numero1, numero2){
    let suma = numero1 + numero2
    console.log(suma)
}

sumar(10, 25) */

function calcularIva(numero){
    console.log(numero*0.21)
}

calcularIva('100')

