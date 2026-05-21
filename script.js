console.log("conectado");

function changeSesion() {
  if (estadoBoton.innerHTML == "Iniciar sesión") {
    estadoBoton.innerHTML = "Cerrar sesión";
  } else {
    estadoBoton.innerHTML = "Iniciar sesión";
  }
}

let estadoBoton = document.querySelector("#btn-sesion");

function desaparece() {
  botonDesaparece.remove();
}

let botonDesaparece = document.querySelector("#agregar-btn");

const btn_like = document.querySelector(".like-btn.gato");
let contador = 0;
btn_like.addEventListener("click", function () {
  contador++;
  btn_like.innerHTML = contador + " " + "Me gusta";
  alert("Gato Atigrado was liked");
});

const btn_like2 = document.querySelector(".like-btn.golden");
let contador2 = 0;
btn_like2.addEventListener("click", function () {
  contador2++;
  btn_like2.innerHTML = contador2 + " " + "Me gusta";
  alert("Golden Retriever was liked");
});
