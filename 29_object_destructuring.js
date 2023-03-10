let obj={
  firstName:"tony",
  lastName:"jim",
  age:30,
  hobby:{
    first:"singing",
    last:"reading"
  }
};

//es5 
console.log(`my firstname is ${obj.firstName} lastname is ${obj.lastName} and my age is ${obj.age}
my hobby is ${obj.hobby.first}`)

//es6
let {lastName,firstName,age,hobby}=obj;
console.log(`my firstname is ${firstName} lastname is ${lastName} and my age is ${age}
my hobby is ${hobby.first}`)
