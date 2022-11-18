// RECURSIVIDADE
function fatorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))
/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/

/* 

Como isso funciona:
Primeiro dissemos que fatorial(5) = 5 x fatorial(4) ao dizer “n * fatorial(n-1)”

Neste momento o programa não sabe diretamente o valor de fatorial(4), mas sabe que:
fatorial(4) = 4 x fatorial(3), então:

•	fatorial(5) = 5 x 4 x fatorial(3)

Mas o programa não sabe de imediato o valor de fatorial(3), mas sabe que: 
fatorial(3) = 3 x fatorial(2), então:

•	fatorial (5) = 5 x 4 x 3 x fatorial(2); 

o programa também não sabe o valor de fatorial(2) mas sabe que:
fatorial(2) = 2 x fatorial(1), então:

•	fatorial (5) = 5 x 4 x 3 x 2 x fatorial(1); 


Havíamos dito que fatorial(1) = 1 pela linha:
if ( n == 1) {
        return 1


Então:
•	fatorial (5) = 5 x 4 x 3 x 2 x 1 = 120 

*/ 