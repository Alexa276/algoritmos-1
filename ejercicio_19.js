/*Los números de Pitágoras pueden ser descritos de la siguiente manera: a² + b² = c², donde a,  b y c 
son enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un  programa para 
encontrar 5 ternas de números de Pitágoras. Por ejemplo: (a) 3² + 4² = 5², 5² +12² = 13² 
 */

var b = 2;
var c = 3;

for(var a = 0; a<= 12; ++a){
    for(var i = 0; i<=10000; ++i){
        if((a**2 + b**2 ) == (c**2)){
            console.log(a,b,c);
            document.write(a,b,c);
        }
    ++b
    ++c
    }
b=1
c=2
}