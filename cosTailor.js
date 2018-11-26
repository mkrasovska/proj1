function powerN(x,n) {
    var power = 1;
    for (i = 1; i <= n; i++) {
    power *= x; }
    return power;
//    console.log(power);
}
console.log( powerN(-4,3) )

function factorialN(n) {
    factorial = 1;
    for (i = 1; i <= n; i++) {
    factorial *= i; }
    return factorial;
}

console.log( factorialN(4) )

function cosTailorN(depth) {
var cosTailor = 1;
    for (i = 2; i <= depth; i++) {
    cosTailor = cosTailor - powerN(-x,i)/factorialN(i); 
    console.log(cosTailor);
    }
    console.log(cosTailor);
}

//var x = +prompt('Введите x, '3.14');

cosTailorN(length);
var x = 3.14
var length = 10;
