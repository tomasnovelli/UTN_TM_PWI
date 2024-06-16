
/* let number = prompt('Ingresa un numero')

while(!number || isNaN(number)){
    alert('Error de dato')
    number = prompt('Ingresa un dato numerico')
} */

/* let texto = prompt('ingresa una palabra')

while(!texto || !isNaN(texto)){
    alert('Error: no ingresaste un dato valido')
    texto = prompt('ingresa un dato de texto')
} */


/* for(let iterador = 1; iterador <=3; iterador = iterador + 1){
    let nombre = prompt('Ingresa un nombre')
    alert(nombre)
}

 */

/* let suma = 0
let repeticiones = prompt('Ingresa numero de repeticiones')
while(!repeticiones || isNaN(repeticiones)){
    alert('ERROR: dato invalido')
    repeticiones = Number(prompt('Ingresa un dato numerico'))

}
for(let iterador = 1; iterador <= repeticiones; iterador = iterador + 1){
    let numero = prompt('Ingresa un numero')
    while(!numero || isNaN(numero)){
        alert('ERROR: Dato Invalido')
        numero = prompt('Ingresa un dato numerico')
    }
    suma = suma + Number(numero)
}
alert('Resultado: ' + suma) */

/* function sumar(numero1, numero2){
    console.log(numero1 + numero2)
}

sumar(5,4) */


/* function calcularIva(importe){
    console.log(importe * 0.21)
}

calcularIva(100) */


/* 
function solicitarYValidarNumero(){
    let datoNumerico = prompt('ingresa un numero')
    while(!datoNumerico || isNaN(datoNumerico)){
        alert('ERROR: dato invalido')
        datoNumerico = prompt('Ingresa un dato numerico')
    }
    return Number(datoNumerico)
}

let suma = 0
let repeticiones = solicitarYValidarNumero()
for(let iterador = 1; iterador <= repeticiones; iterador = iterador + 1){
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert('Resultado: ' + suma) */


//TAREA FUNCIONES

/* 1) */

/* function decirNombre(nombre){
    alert('Hola ' + nombre)
}

decirNombre('pepe') */




/* 2) */

/* function saludar(nombre){
    return String('hola '+ nombre)
}

alert(saludar('juan'))
 */

/* 3)*/

/* function sumar(a, b){
    return Number(a + b)
}

alert(sumar(2,5))*/


/* 4)*/

/* function restar(a,b){
    return Number(a - b)
}

alert(restar(5, 8)) */

/* 
5)
 */

/* function calcular(operacion, a, b){
    if(operacion === '+'){
        return Number(a + b)
    }else if(operacion === '-'){
        return Number(a - b)
    }else{
        return null
    }
}

alert(calcular('*', 5, 10)) */


/* 6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
 */
let cuenta = 0
function contarHasta(numero){
    for(let iterador = 1; iterador <= numero; iterador = iterador + 1){    
       suma = cuenta + 1
    }
    return Number(suma)
    
}

console.log(contarHasta(10))