/*Escriba un programa que lea dos números positivos (debes controlar que solo ingresen  positivos, 
si ingresan negativos debes dar un alert de error) y muestre por consola el  resultado de 
multiplicarlos por sumas repetidas. 
 */

let num_1 = prompt(`Introduzca el primer numero`)*1;
let num_2 = prompt(`Introduzca el segundo numero`)*1;
let sum=0;
// imprima error si son negativos
 while(num_1 < 0 || num_2 < 0) {
     alert("Error");
 }
while (num_1 > 0) {
         sum += num_2;
         num_1--;    
 }
 console.log(sum);

