
let ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

ele.addEventListener("click", function () {
  pintar(ele);
});
  