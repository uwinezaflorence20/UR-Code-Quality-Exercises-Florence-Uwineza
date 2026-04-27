function fibonacciUpTo(number) {
  if (number< 0) return [];
  let fibonacci = [0, 1];
  while (true) {
    let next = fibonacci[fibonacci.length - 1] + fib[fib.length - 2];
    if (next > number) break;
    fibonacci.push(next);
  }
  return fibonacci;
}