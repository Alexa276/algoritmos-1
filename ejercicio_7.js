/*Los conejos de Fibonacci. El matemático Leonardo Fibonacci expuso el siguiente problema, haga un programa 
para solucionarlo: Suponga que una pareja de conejos tiene un par de  crías cada mes y a su vez las crías se 
hacen fértiles al cabo de un mes y empiezan a tener sus  propias crías. Si comenzamos con una pareja fértil y 
no muere, ¿Cuántos pares de conejos se  tendrán al cabo de un año?. 
 */

const fibonacci = (n) => {

    //  f = f(n-1) + f(n-2)

    // Base case
    if (n < 2) {
        return n;
    }

    // Recursive case
    // 4  3
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Rama con 6
// rama de 5 y rama 4

// Rama con 5
// rama de 4 y rama 3


fibonacci(7);