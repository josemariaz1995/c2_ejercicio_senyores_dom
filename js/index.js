import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;
  imagen.alt = `${nombre} apuntandote con el dedo`;
  // profesiones señor
  /* const datosSenyor = senyorElemento.querySelectorAll(".valor-dato");
  datosSenyor[0].textContent = profesion;
  datosSenyor[1].textContent = estado;
  datosSenyor[2].textContent = twitter; */
  const profesionS = senyorElemento.querySelector(".profesion-dato");
  console.log(profesionS, profesion);
  profesionS.textContent = profesion;
  const twitterS = senyorElemento.querySelector(".twitter-dato");
  twitterS.textContent = twitter;
  const estadoS = senyorElemento.querySelector(".estado-dato");
  estadoS.textContent = estado;
  const marcados = senyorElemento.querySelector(".icono");
  console.log(marcado);
  if (marcado) {
    marcados.classList.add("fijo");
    imagen.classList.add("volteado");
  }
  const inicial = senyorElemento.querySelector(".inicial");
  const arrayNombre = nombre.split(" ");
  console.log(arrayNombre);

  inicial.textContent =
    arrayNombre[0].length === 2 ? arrayNombre[1].charAt(0) : nombre.charAt(0);

  principal.append(senyorElemento);
}
