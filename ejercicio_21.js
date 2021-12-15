/*Dada una matriz de números ordenados y una suma objetivo, busque un par en la matriz cuya suma sea igual al 
objetivo dado. Escriba una función para devolver los índices de los dos números (es decir, el par) de manera que
 se sumen al objetivo dado.
Input: [1, 2, 3, 4, 6], sum=6
Output: [1, 3]
Los números en los índices 1 y 3 suman  6: 2+4=6
 */

var matriz = [1, 2, 3, 4, 6];
var sum = 3;
function searchPair(matriz, sum) {
    var i = 0;
    var j = matriz.length - 1;
    while (i < j) {
        if (matriz[i] + matriz[j] == sum) {
            return [i, j];
        } else if (matriz[i] + matriz[j] < sum) {
            i++;
        } else {
            j--;
        }
    }
}
console.log(searchPair(matriz, sum));