// 1
let ul = document.getElementsByTagName("ul");

ul[0].firstElementChild.style.color = 'red';

//2
const container=document.getElementById("container1");
container.firstElementChild.style.background="green"
container.lastElementChild.style.background="green"

//3
let arr=ul[0].children;
console.log(arr)

for(let i=0;i<arr.length;i++){
  console.log(arr[i])
  arr[i].style.color='cyan'
}
