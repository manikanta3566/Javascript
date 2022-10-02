
let marks = [90, 80, 70, 67, "not present", false];
console.log(marks)
console.log(marks[0]);
marks[0] = 100;
console.log(marks);

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

//array methods

//length
console.log(marks.length);

//push()
marks.push(30);
console.log(marks)

//pop()
marks.pop();
console.log(marks)

//join()
console.log(marks.join("-"));

//toString()
const result = marks.toString();
console.log(result)
console.log(typeof result)

//shift()
marks.shift();//removes the first element
console.log(marks);

//unshift()
marks.unshift(999);
console.log(marks);

let numbers = [40, 1, 2, , 2000, 3, 4, 3, 4, 54, 55555, 33];
// console.log(numbers.length,numbers)
// delete numbers[0]
// console.log(numbers.length,numbers)

//conact() 
console.log(marks.concat(numbers))//returns new array

//sort()
console.log(numbers.sort())

//sorting
const compare = (a, b) => {
  if (b > a) {
    return 1;
  } else if (b < a) {
    return -1;
  } else {
    return 0;
  }

}
numbers.sort(compare);
console.log(numbers);

//reverse()
numbers.reverse();

console.log(numbers);


//splice() and slice()
let test = [20, 1, 80, 20];
// test.splice(1,2,100,101) //index,delete,elements to be added
// console.log(test)

let finalResult = test.slice(1);
console.log(finalResult)
let finalResult2 = test.slice(1, 2);
console.log(finalResult2)

