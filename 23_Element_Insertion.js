let con = document.getElementById("container");

let div = document.createElement("div");
div.innerHTML = `<h1>new div</h1>`
// con.append(div);
// con.prepend(div);
// con.before(div)
// con.after(div);
con.replaceWith(div);
