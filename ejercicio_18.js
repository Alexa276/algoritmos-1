/*Haga una función tripoTriang(a, b, c) a la cual se le pase como parámetros las longitudes de  los 
lados y retorne 1, 2 o 3 según el triángulo sea equilátero, isósceles o escaleno. 
 */


var c1 =  parseInt(prompt("escriba lado 1"));
var c2 =   parseInt(prompt("escriba lados 2"));
var c3 =  parseInt(prompt("escriba lado 3"));

var trigoTriang= function(){
if (c1 == c2 && c2 == c3) {
    console.log("<h1>triangulo equilatero</h1>");
    document.write("<h1>triangulo equilatero</h1>");

} else if (c1 == c2 && c2 != c3  ) {
    console.log("<h1> triangulo isoseles</h1>");
    document.write("<h1> triangulo isoseles</h1>");

} else if(c1!=c2&&c2==c3 ){
    console.log("<h1> triangulo isoseles</h1>");
    document.write("<h1> triangulo isoseles</h1>");
    
}else {
    console.log("<h1>triangulo escaleno</h1>");
    document.write("<h1>triangulo escaleno</h1>");
}
}
trigoTriang(3,3,3);