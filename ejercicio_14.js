/*Haga una función grafArr(arr, num, car) a la cual se le pase un arreglo “arr” de “num”  números reales y 
haga una gráfica usando el carácter “car”. La función debe usar la escala  de 10 caracteres para el máximo y
 0 caracteres para el mínimo valor dentro del arreglo. Si el  carácter usado fuese “+”, la apariencia de la
  salida seria como la siguiente: 
 */

  var arr = [3, 6, 7, 2, 5, 15, 3];
var max = Math.max(...arr);

var new_arr = []; 
for (let x of arr) {
    new_arr.push (parseInt ((x * 10) / max));
}   

for (let i of new_arr){
    var contador = i;
    document.write (ciclo (contador) + "<br>");
}

//Funcion:
function ciclo (contador){
    let car = "+";
    let car2 = car;
    for (let j = 1; j < contador; j++) {
        car = car + car2;  
    } 
    return car
};