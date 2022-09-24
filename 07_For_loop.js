//For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//For in loop
const student = {
  "name": "abc",
  "address": "bangalore",
  "marks": 650
}
for (let a in student) {
  console.log(a + " " + student[a]);
}

//For of loop
for (let val of "name") {
  console.log(val);
}
