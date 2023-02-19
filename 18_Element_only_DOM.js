const changeNavBackground=(body)=>{
  bodyElement.firstElementChild.style.background='red';
   bodyElement.firstElementChild.style.height='100px';
}

let bodyElement = document.body;
console.log(bodyElement.firstElementChild)
console.log(bodyElement.lastElementChild)
console.log(bodyElement.firstElementChild.firstElementChild.firstElementChild.nextElementSibling)

changeNavBackground(bodyElement)
