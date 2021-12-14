/* Se llama media armónica de dos números al resultado obtenido al calcular los inversos de los números, 
promediarlos y calcular el inverso del resultado. Escriba una función que  acepte dos 
 números y devuelva la media armónica de los números. 
 */

 const mediaArmonica = (a, b) => {

    const aI = 1 / a;
    const bI = 1 / b;
    const prom = (aI + bI) / 2;

    return 1 / prom;
}

console.log(mediaArmonica(8, 5));