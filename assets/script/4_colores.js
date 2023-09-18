// variables de los div
let divAzul = document.querySelector("#azul");
let divRojo = document.querySelector("#rojo");
let divVerde = document.querySelector("#verde");
let divAmarillo = document.querySelector("#amarillo");
let divKey = document.querySelector("#key");

// ejerccio contruir 4 div cambiar color del div al hacer click
let cambiarColor = (color) => {
  color.target.style.backgroundColor = "black";
};

divAzul.addEventListener("click", cambiarColor);
divRojo.addEventListener("click", cambiarColor);
divVerde.addEventListener("click", cambiarColor);
divAmarillo.addEventListener("click", cambiarColor);

// ejerccico de cambiar el color del div key presionando letra a, s, d
//ejercico de crear nuevo div al presionar tecla q, w, e
function creatediv(color) {
  let diiv = document.createElement("div");
  diiv.style.width = "200px";
  diiv.style.height = "200px";

  let nuevotex = document.createTextNode("");
  diiv.appendChild(nuevotex);
  diiv.style.backgroundColor = color;
  document.body.appendChild(diiv);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    divKey.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    divKey.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    divKey.style.backgroundColor = "skyBlue";
  } else if (event.key === "q") {
    creatediv("purple");
  } else if (event.key === "w") {
    creatediv("grey");
  } else if (event.key === "e") {
    creatediv("brown");
  }
});

