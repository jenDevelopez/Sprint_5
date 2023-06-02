//NIVEL 1
//EJERCICIO 1
const boton = document.getElementById("btn");
const chiste = document.getElementById("chiste");

const llamadaAPI = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then((data) => {
            if (chiste instanceof HTMLElement) {
            chiste.innerText = data.attachments[0].text; 
            }
        })
        .catch((err) => console.error(err));
};
boton?.addEventListener("click", llamadaAPI);
