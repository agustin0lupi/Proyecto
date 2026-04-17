let juego = prompt("Cual es el juego que quieres comprar")
const precio = Number(prompt("Ingrese el precio del producto"))
const IVA = precio * 1.21
alert("El precio de " + juego + " es: $" + IVA)