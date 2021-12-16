/* Escriba un programa al cual se le digiten diez valores y al final imprima por pantalla la suma  de 
los valores, las sumas de los cuadrados, el promedio, el máximo y el mínimo.
 */

let a = prompt(`digite un numero 1`)*1;
let b = prompt(`digite un numero 2`)*1;
let c = prompt(`digite un numero 3`)*1;
let d = prompt(`digite un numero 4`)*1;
let e = prompt(`digite un numero 5`)*1;
let f = prompt(`digite un numero 6`)*1;
let g = prompt(`digite un numero 7`)*1;
let h = prompt(`digite un numero 8`)*1;
let i = prompt(`digite un numero 9`)*1;
let j = prompt(`digite un numero 10`)*1;


let sum = a+b+c+d+e+f+g+h+i+j;
let promedio = (a+b+c+d+e+f+g+h+i+j)/10;
let sumCuadrados = Math.pow(a, 2)+Math.pow(b, 2)+Math.pow(c, 2)+Math.pow(d, 2)+Math.pow(e, 2)+Math.pow(f, 2)+Math.pow(g, 2)+Math.pow(h, 2)+Math.pow(i, 2)+Math.pow(j, 2);



console.log(sum);
console.log(promedio);
console.log(sumCuadrados);