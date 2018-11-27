//найти максимальное значение n доя которого можно вычислить (2n)!
var k = 1;
while (isFinite(factorialN(2 * k))) k++;
n = Math.floor(k / 2);
console.log(n);

function factorialN(n) {
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
