let ele = document.getElementById("container");
ele.insertAdjacentHTML("beforebegin", "<p>before begin</p>")
ele.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>")
ele.insertAdjacentHTML("beforeend", "<p>beforeend</p>")
ele.insertAdjacentHTML("afterend", "<p>afterend</p>")
ele.remove()
