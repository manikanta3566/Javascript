let arr = [10, 20, 60, 70, 90];

// map method->returns new array
let newarr=arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value*value;
})
console.log(newarr,arr)

// filter->returns new array with filter
let filterArr=arr.filter((value)=>{
  return value>30;
})
console.log(filterArr,arr)

//reduce ->returns the single value with extra operations
let sumValue=arr.reduce((v1,v2)=>{
  return v1+v2;
})
console.log(sumValue)
