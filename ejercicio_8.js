/*El inventor del ajedrez. De acuerdo con una leyenda, el rey estuvo tan complacido con el  invento del ajedrez que
 llamo al autor a su corte para que le indicara que recompensa quería  recibir por su creatividad. El inventor le
 dijo: “Todo lo que pido es un grano de trigo por la  primera cuadricula de mi tablero, dos granos por la segunda 
casilla, cuatro granos por la  tercera y así sucesivamente hasta llegar a las 64 casillas, siempre doblando el número de 
granos de trigo”. Haga un programa que le ayude al rey a tomar esta decisión. Haga una  estimación del 
peso de un grano de trigo y “pese” la cantidad resultante. ¿Qué tamaño de  palabra necesitará tener la máquina 
en que se pueda correr dicho programa? 
 */

function ajedrez (peso){
    var cont=0;
    var resultado=0;
    
    while(cont<=64){
        resultado+= 2**cont;
        ++cont;}
    return resultado;}
    document.write(" total: "+ajedrez(1));
    console.log(" total: "+ajedrez(1))
    
    
    var g = Math.floor(Math.random(4,200));
    