/*Haga un programa al cual se le digite una longitud expresada en pulgadas e imprima por  consola la
 misma longitud en yardas, pies y pulgadas. Por ejemplo, una longitud de 65  pulgadas sería expresada 
 como: 1 yarda, 2 pies y 5 pulgadas.  */

 const input = 12;

const YARDS = 36;
const PIES = 12;


const yardas = Math.floor(input / YARDS);

const resto_yardas = input % YARDS;

const pies = Math.floor(resto_yardas / PIES);
const resto_pies = resto_yardas % PIES;


console.log(`Yardas ${yardas} Pies ${pies} Pulgadas ${resto_pies} `);
