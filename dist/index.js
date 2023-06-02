"use strict";
const boton = document.getElementById("btn");
const chiste = document.getElementById("chiste");
const llamadaAPI = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then(data => {
        console.log(data.attachments[0].fallback);
    })
        .catch((err) => console.error(err));
};
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", llamadaAPI);
