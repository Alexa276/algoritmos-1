/*Haga una función que utilice números, la ecuación debe resolver ecuaciones cuadráticas con  la forma 
ax^2+bx+c=0, ecuCuad(a, b, c) debe retornar la solución positiva de la ecuación  cuyo parámetros sean 
a, b y c respectivamente. 
 */


function ecquad(a, b, c) {
    let part1= -b;
    let part2 = Math.pow(b, 2);
    let part3 = (part2)+(-4*(a*c));
    if (part3 < 0) {
        alert(`No se puede sacar la raiz de un numero negativo, introduzca otra secuencia de numeros`)
       return ecquad;
    }
    
    let part4 = (part1)+(Math.sqrt(part3));
    let x = (part4)/(2*a);
    
    console.log(x);
    
    }
    
    ecquad(2, -2, -6);