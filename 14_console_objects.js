//console objects

//.log()
console.log("hii")

//.error()
console.error("error");

//.assert()
console.assert(10 > 10);

//.table()
const obj = {
  "name": "abc",
  "age": 20
}
console.table(obj);

//.warn()
console.warn("warn");

//info()
console.info("info")

//time()
//timeEnd()

console.time('forloop');
for (let i = 0; i < 50; i++) {
  console.log(i);
}
console.timeEnd('forloop');

