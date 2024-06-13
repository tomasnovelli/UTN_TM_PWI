/* let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo': {
        "nombre": 'juan'
    }
}
console.log(usuario) */
/*
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/


/* let producto = {
    'precio': 100,
    'nombre' : 'pepe',
    'marca' : 'samsung',
    'id' : 15467,
    'descripcion' : 'altaMarca'
}  */


/* const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'Av. siempre viva 1282',
        tel: '+22 1323-2122'
    }
} */
/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/

/* console.log(`El usuario ${user.name} ${user.lastname} tiene las preferencias de usuario en:
Modo: 
${user['user preferences'].theme} 
${user['user preferences'].lang}`)

console.log(`El usuario ${user.name} ${user.lastname} creo su cuenta en fecha ${user['user info'].created_at} vive en ${user['user info'].adress} y su telefono es ${user['user info'].tel}.`)
 */
/* 
Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
} */


/* const calcularIva = (precio, tipo_factura) => {
    const calculos = {
        precio: precio * 1.21,
        iva: precio * 0.21,
        precioConIva: precio * 1.21,
        factura: tipo_factura
    }
    if(tipo_factura == 'C' || tipo_factura == 'B'){
        return calculos
    } 
    else if(tipo_factura == 'A'){
        return calculos.precio = precio,
        calculos
        }
    }


console.log(calcularIva(100, 'A')) */



const calcularIva = (precio, tipo_factura) => {
    let iva = precio * 0.21
    const calculos = {
        precio: precio,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if(tipo_factura == 'C' || tipo_factura == 'B'){
        calculos.precio = precio + iva
    } 
    return calculos
}


console.log(calcularIva(100, 'B'))
