let a = setTimeout(function sum(a, b) {
  console.log("sum is ", a + b);
}, 3000, 10, 5)
clearTimeout(a);

let b = setInterval(function sum(a, b) {
  console.log("sum is ", a + b);
}, 1000, 10, 10)
clearInterval(b)
