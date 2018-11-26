//найти максимальное значение n доя которого можно вычислить (2n)!
var k = 100;
while ( isFinite(factorialN(k)) ) k++;
n = Math.floor(k/2);
alert(n);


function factorialN(n) {
var factorial = 1;
for (i=1; i <= n; i++) {
factorial *= i;
} 
return(factorial);
}
