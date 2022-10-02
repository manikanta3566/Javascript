let numbers = [2, 1, 2, 3, 5, 67, 89];
//for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

//for each
numbers.forEach((ele) => {
  console.log(ele * ele)
})

//Array.from
let name = "green";
let arr = Array.from(name);
console.log(arr);

//for of
for (let ele of numbers) { //loop the values
  console.log(ele)
}

//for in
for (let item in numbers) {//loop the key
  console.log(item);
}
