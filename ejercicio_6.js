/*El banco le solicita un programa para cálculo en las libretas de ahorro. Si usted ingresa una  cantidad en 
una libreta de ahorros, su capital ira incrementando a medidas que gana  intereses mensuales. Haga un programa 
al cual se le digite el monto a ahorrar, la tasa de  interés, los meses de ahorro y que imprima por consola el 
monto al final del ahorro. 
 */

let cantidadDeAhorros = prompt(`Introuzca su cantidad de ahorros`)*1;
const tasaDeIntereses = prompt(`Introuzca su taza der intereses`)*1;
 // meses de ahorros 
let mesesDeAhorros = prompt(`introduzca los meses`)*1;
// ganacias mensuales 
let gananciasPorMes = cantidadDeAhorros * (tasaDeIntereses/100)
let totalGanancias  = mesesDeAhorros * gananciasPorMes;
let montoFinalDeAhorro = totalGanancias + cantidadDeAhorros;

console.log(montoFinalDeAhorro);