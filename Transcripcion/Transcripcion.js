//Ejercicio 1

let edad = 9

edad >= 18 ? console.log("Es mayor de edad.."): console.log("Es menor de edad")

//Ejercicio 2

let numero = -3

numero > 0 ? console.log("número positivo") : console.log("Número negativo")

//Ejercicio 3

let ocupacionCancha = true
let nombreCancha = "Bernabeu"

let mensaje = ocupacionCancha ? `La cancha llamada ${nombreCancha} esta ocupada"` : `la cancha llamada ${nombreCancha} esta disponible"`
console.log(mensaje)

//Ejercicio 4
const email = "Arleth64@gmail.com"
const contraseña = "1234"

email == "Arleth64@gmail.com" && contraseña == "1234" ?
console.log(`señor usuario con correo ${email} Bienvenido al sistema`) :
console.log(`el correo ${email} o la contraseña ingresadas es incorrecta`)

//Ejercicio 5

let colorSemaforo = "amarillo"
    colorSemaforo == "verde" ? console.log(`EL semaforo essta en ${colorSemaforo} puede seguir`) :
        colorSemaforo == "rojo" ? console.log(`El semaforo está en ${colorSemaforo} debe parar`) :
            colorSemaforo == "amarillo" ? console.log("alista motores") :
                console.log(`Muestra color ${colorSemaforo}, esta dañado`)

//Ejercicio 6
let temperatura = 40
if(temperatura >= 40){
    console.log(`Usted tiene fiebre, su temperatura es mayor a ${temperatura} grados`)

}
//Ejercicio 7
let tipoCLiente = "Normal"
if(tipoCLiente == "Normal"){
    console.log(`Va a ser atendido en el modulo 1, por ser cliente ${tipoCLiente}`)
}else if(tipoCLiente == "Preferencial"){
    console.log("Esta habilitado para los modulos 2 y 3 para su atención")
}else{
    console.log("Usted no es cliente del banco, por favor dirijase al modulo 4")
}
//Ejercicio 8
let emailBaseDatos = "arleth64@gmail.com"
let claveBaseDatos = "1234*"
let emailIngresado = "arle@gmail.com"
let ClaveIngresada = "1234*"
let nombreUsuario = "Juan"

if(emailBaseDatos == emailIngresado && claveBaseDatos == ClaveIngresada){
    console.log(`${nombreUsuario} bienvenido!, selecciones opciones dle sistema`)

}else
console.log(`Acceso denegado`)

//Ejercicio 9
let derecha = true
let izquierda = false
let arriba = false
let abajo = false

if(derecha){
    console.log("robot moviendose a la derecha")
}else if(izquierda){
console.log("Robot moviendose a la izquierda")
}else if(arriba){
console.log("Robot moviendose hacia arriba")
}else if(abajo){
console.log("Robot moviendose hacia abajo")
}
//Ejercicio 10
let encendido = true
let velocidad = 32
if(encendido){
    console.log("Su carro está encendido")
    if(velocidad == 0){
        console.log(`carro freno`)
    }else if(velocidad > 0 && velocidad <= 100){
        console.log(`evitese un accidente .. exceso de velocidad`)
        }else {
            console.log(`Encienda su vehiculo`)
        }
    }

    //Ejercicio 11
    let dia = "Miercoles"
    let clase = "Algoritmos"
    if(dia == "Miercoles"){
        console.log(`la clase de hoy es ${clase}`)
    }

