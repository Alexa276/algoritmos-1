/*Haga una función cdig(), cuyo prototipo es: 
var cdig = function(cantidad, dígito){ //código aquí} 
Se desea que dicha función retorne las veces que el dígito d este contenido en el número n.  
Por ejemplo, cdgi(1241, 1) = 2 veces aparece el dígito 1 en la cantidad 1241. 
 */

var cont= 2;
var n=1;
var numero=2241;

while(numero >0)
{    console.log(numero%10)
    document.write(numero%10);
    if((numero%10)==n) 
    {     console.log("cont: ",cont);
        document.write("cont: ",cont);
        ++cont;}
    numero/=10;
    numero= Math.floor(numero);
    console.log("numero: ",numero);}
    document.write("numero: ",numero);

document.write(" el numero se repite: " +cont);
console.log(" el numero se repite: " +cont);