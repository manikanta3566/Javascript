let first = document.getElementById("first");
//get all
console.log(first.attributes)

//get single attribute
console.log(first.getAttribute("class"))

//set attribute
first.setAttribute("style","color:red;background:green")

//remove attribute
first.removeAttribute("style")

//check the element contains attribute or not
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

//custom attributes
first.setAttribute("data-second","end")
console.log(first.dataset)
console.log(first.dataset.new)
