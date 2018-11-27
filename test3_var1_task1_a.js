//найти максимальное значение n для которого можно вычислить (2n)!
var k = 2;
while (isFinite(factorialN(k))) k += 2;
console.log(k);

function factorialN(n) {
  var factorial = 1;
  for (i = 2; i <= n; i += 2) {
    factorial *= i;
  }
  return factorial;
}
