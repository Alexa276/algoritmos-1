/* Se hace un triángulo con latas de leche condensadas, de la siguiente manera: 1 lata  en el tope, 3 en el
 siguiente, 5 en el siguiente etc. Realice una función para cada uno de  los puntos siguientes: 
(a) ¿Cuántos niveles se tiene con n latas? 
(b) ¿Cuántas latas sobran haciendo el triángulo si se tienen n latas (con 13 latas se tienen 3  niveles y sobran 4)?
*/

var arr =[1,3,5,7,9,11,13];
var num = arr.length;
var car ="[]";
var max = Math.max(...arr);
console.log(max);
var graf = 0;
var MAXLENTCONTS= 14;

var print = (n) => {
var i=1;
while(i <= n){
 document.write("[]");
 ++i;
}
document.write("<br>")
}

for(var contador=0; contador<num; ++contador){

graf = (arr[contador]*MAXLENTCONTS)/max;
graf = Math.floor(graf);
print(graf);

}
