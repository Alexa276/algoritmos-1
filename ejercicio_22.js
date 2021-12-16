/* Dada una matriz de números ordenados, elimine todos los duplicados. No debe utilizar
ningún espacio adicional; después de eliminar los duplicados en el lugar, devuelva la longitud
del subarreglo que no tiene duplicado.
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Removiendo los duplicados tendríamos el arreglo [2, 3, 6, 9]. */

var array = [2, 3, 3, 3, 6, 9, 9];
function eliminarDuplicados(array) {
    var i = 0;
    var j = 1;
    var aux = 0;
    while (j < array.length) {
        if (array[i] == array[j]) {
            j++;
        } else {
            i++;
            array[i] = array[j];
            j++;
        }
    }
    aux = i + 1;
    return aux;
}
console.log(eliminarDuplicados(array));