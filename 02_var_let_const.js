console.log("var,let,const")
//var->global scope
var a = 10;
var a = "ben"
console.log(a);
{
  var name = "john";
}
console.log(name)

//let->block scope
let a = 10;
//let a="ben"; SyntaxError: Identifier 'a' has already been declared
console.log(a);
{
  let color = "green";
}
console.log(color)

//const->constant
const number = 10;
number = 20;
console.log(number)
