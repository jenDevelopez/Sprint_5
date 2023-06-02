//NIVEL 1
//EJERCICIO 1
const boton = document.getElementById("btn");
const chiste = document.getElementById("chiste");

const llamadaApiConsola = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then(data => {
            console.log(data.attachments[0].text) 
        })
        .catch((err) => console.error(err));
};

//EJERCICIO 2
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
boton?.addEventListener("click",llamadaApiConsola)
boton?.addEventListener("click", llamadaAPI);