//----------------- Declaraciones
let inicio = true
let adivinanza
let totalPuntos = 0

//----------------- Funciones
function puntos(puntosAcumulados){
    totalPuntos+=puntosAcumulados
}
//----------------- Inicio de programa
while(inicio === true){
let opciones = Number(prompt("Bienvenido/a al juego de adivinanzas.\nEscriba 1 o 2 según corresponda:\n(1) Iniciar con las adivinanzas.\n(2) Salir"))
if (opciones === 1){
    alert("¡COMENCEMOS A JUGAR!\nPara seleccionar una respuesta debe escribir la que crea correcta.")
    for (let i = 0; i < 3; i++) {
        adivinanza = Number(prompt("ADIVINANZA N°1:\nSoy redonda como el sol, pero no soy el sol. ¿Qué soy?\n(1) Una Pelota        (2) Una Naranja\n(3) Un Globo          (4) Una moneda"))
        if (adivinanza === 4 && i === 0){
            alert("RESPUESTA CORRECTA!. Suma 10 puntos!")
            puntos(10)
            i = 3
        }
        else if (adivinanza !== 1 && adivinanza !== 2 && adivinanza !== 3 && adivinanza !== 4){
            alert("RESPUESTA INVÁLIDA\n\nDebe ingresar un número del 1 al 4.")
            i = -1
        }
        else if (adivinanza === 4 && i === 1){
            alert("RESPUESTA CORRECTA!. Suma 5 puntos!")
            puntos(5)
            i = 3
        }
        else if (adivinanza === 4 && i === 2){
            alert("RESPUESTA CORRECTA!. Suma 2,5 puntos!")
            puntos(2.5)
            i = 3
        }
        else if(adivinanza !== 4 && i === 2){
            alert("La respuesta correcta es: Una moneda\n\nBuena suerte la próxima vez :(")
        }
        else {
            alert("RESPUESTA INCORRECTA. Vuelva a intentarlo.")
        }
    }
    for (let i = 0; i < 3; i++) {
        adivinanza = Number(prompt("ADIVINANZA N°2:\nEn el día estoy oculto y en la noche brillante. ¿Qué soy?\n(1) Las estrellas     (2) La Luna\n(3) Una Linterna    (4) El Sol"))
        if (adivinanza === 2 && i === 0){
            alert("RESPUESTA CORRECTA!. Suma 10 puntos!")
            puntos(10)
            i = 3
        }
        else if (adivinanza !== 1 && adivinanza !== 2 && adivinanza !== 3 && adivinanza !== 4){
            alert("RESPUESTA INVÁLIDA\n\nDebe ingresar un número del 1 al 4.")
            i = -1
        }
        else if (adivinanza === 2 && i === 1){
            alert("RESPUESTA CORRECTA!. Suma 5 puntos!")
            puntos(5)
            i = 3
        }
        else if (adivinanza === 2 && i === 2){
            alert("RESPUESTA CORRECTA!. Suma 2,5 puntos!")
            puntos(2.5)
            i = 3
        }
        else if(adivinanza !== 2 && i === 2){
            alert("La respuesta correcta es: Una moneda\n\nBuena suerte la próxima vez :(")
        }
        else {
            alert("RESPUESTA INCORRECTA. Vuelva a intentarlo.")
        }
    }
    for (let i = 0; i < 3; i++) {
        adivinanza = Number(prompt("ADIVINANZA N°3:\nSin alas vuelo, sin piernas camino, sin boca hablo. ¿Qué soy?\n(1) Un Pájaro       (2) Una Nube\n(3) Una Carta       (4) Un Pensamiento"))
        if (adivinanza === 3 && i === 0){
            alert("RESPUESTA CORRECTA!. Suma 10 puntos!")
            puntos(10)
            i = 3
        }
        else if (adivinanza !== 1 && adivinanza !== 2 && adivinanza !== 3 && adivinanza !== 4){
            alert("RESPUESTA INVÁLIDA\n\nDebe ingresar un número del 1 al 4.")
            i = -1
        }
        else if (adivinanza === 3 && i === 1){
            alert("RESPUESTA CORRECTA!. Suma 5 puntos!")
            puntos(5)
            i = 3
        }
        else if (adivinanza === 3 && i === 2){
            alert("RESPUESTA CORRECTA!. Suma 2,5 puntos!")
            puntos(2.5)
            i = 3
        }
        else if(adivinanza !== 3 && i === 2){
            alert("La respuesta correcta es: Una moneda\n\nBuena suerte la próxima vez :(")
        }
        else {
            alert("RESPUESTA INCORRECTA. Vuelva a intentarlo.")
        }
    }
    for (let i = 0; i < 3; i++) {
        adivinanza = Number(prompt("ADIVINANZA N°4:\nSoy pequeño como un ratón, pero guardo toda la información del mundo. ¿Qué soy?\n(1) Un Libro                   (2) Una Biblioteca\n(3) Una computadora    (4) Una Celular"))
        if (adivinanza === 4 && i === 0){
            alert("RESPUESTA CORRECTA!. Suma 10 puntos!")
            puntos(10)
            i = 3
        }
        else if (adivinanza !== 1 && adivinanza !== 2 && adivinanza !== 3 && adivinanza !== 4){
            alert("RESPUESTA INVÁLIDA\n\nDebe ingresar un número del 1 al 4.")
            i = -1
        }
        else if (adivinanza === 4 && i === 1){
            alert("RESPUESTA CORRECTA!. Suma 5 puntos!")
            puntos(5)
            i = 3
        }
        else if (adivinanza === 4 && i === 2){
            alert("RESPUESTA CORRECTA!. Suma 2,5 puntos!")
            puntos(2.5)
            i = 3
        }
        else if(adivinanza !== 4 && i === 2){
            alert("La respuesta correcta es: Una moneda\n\nBuena suerte la próxima vez :(")
        }
        else {
            alert("RESPUESTA INCORRECTA. Vuelva a intentarlo.")
        }
    }
    for (let i = 0; i < 3; i++) {
        adivinanza = Number(prompt("ADIVINANZA N°5:\nTengo dientes pero no puedo masticar, tengo un lecho pero no puedo dormir. ¿Qué soy?\n(1) Un Río               (2) Una Cama\n(3) Una Montaña    (4) Un Libro"))
        if (adivinanza === 1 && i === 0){
            alert("RESPUESTA CORRECTA!. Suma 10 puntos!")
            puntos(10)
            alert("El juego a finalizado, su puntaje obtenido fue de: " + totalPuntos + " puntos")
            inicio = false
            i = 3
        }
        else if (adivinanza !== 1 && adivinanza !== 2 && adivinanza !== 3 && adivinanza !== 4){
            alert("RESPUESTA INVÁLIDA\n\nDebe ingresar un número del 1 al 4.")
            i = -1
        }
        else if (adivinanza === 1 && i === 1){
            alert("RESPUESTA CORRECTA!. Suma 5 puntos!")
            puntos(5)
            alert("El juego a finalizado, su puntaje obtenido fue de: " + totalPuntos + " puntos")
            inicio = false
            i = 3
        }
        else if (adivinanza === 1 && i === 2){
            alert("RESPUESTA CORRECTA!. Suma 2,5 puntos!")
            puntos(2.5)
            alert("El juego a finalizado, su puntaje obtenido fue de: " + totalPuntos + " puntos")
            inicio = false
            i = 3
        }
        else if(adivinanza !== 1 && i === 2){
            alert("La respuesta correcta es: Una moneda\n\nBuena suerte la próxima vez :(")
            alert("El juego a finalizado, su puntaje obtenido fue de: " + totalPuntos + " puntos")
            inicio = false
        }
        else {
            alert("RESPUESTA INCORRECTA. Vuelva a intentarlo.")
        }
        
    }
}

else if (opciones === 2){
    alert("Esperamos que vuelva pronto!")
    inicio = false
}

else{
    alert("EL VALOR INGRESADO ES INCORRECTO!\n Ingrese 1 o 2 según corresponda")
}
}
