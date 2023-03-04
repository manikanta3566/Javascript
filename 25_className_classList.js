let ele = document.getElementsByTagName("h1")[0];
console.dir(ele)

// ele.className = "green"
ele.classList.add("green");
ele.classList.remove("green") 
console.log(ele.classList)
ele.classList.toggle("text-center")
// ele.classList.toggle("text-center")
console.log(ele.classList.contains("text-center"))
