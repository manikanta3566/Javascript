//escape characters
let name="ab\'c";//  \
console.log(name)

name="xy\nz";//  \n
console.log(name)

name="nb\tc";
console.log(name)// \t

name="rt\ruy";
console.log(name)

//string methods
//length
let fruit="bannana";
console.log(fruit.length)

//toUpperCase()
console.log(fruit.toUpperCase());

//toLowerCase()
console.log(fruit.toLowerCase());

//slice()
console.log(fruit.slice(2,4));
console.log(fruit.slice(2));

//replace()
console.log(fruit.replace("ban","per"));

//conact()
console.log(fruit.concat(" is a fruit"))

//trim()
fruit=" apple ";
console.log(fruit.trim());

//substring()
console.log(fruit.substring(0,3))


let friend="ramesh";
for(let i=0;i<friend.length;i++){
  console.log(friend.charAt(i))
}
