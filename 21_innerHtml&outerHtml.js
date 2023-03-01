let h1 = document.getElementsByTagName("h1")[0];
console.log(h1.innerHTML)
console.log(h1.outerHTML)
console.log(h1.tagName)
console.log(document.body.firstElementChild.nodeName)

// setting inner html
h1.innerHTML=`<i>hii hello</i>`;
// h1.outerHTML=`<b>hii</b>`;
