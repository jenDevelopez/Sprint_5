//NIVEL 1
//EJERCICIO 1
const boton = document.getElementById("btn");
const chiste = document.getElementById("chiste");

const llamadaAPI = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then(data => {
            console.log(data.attachments[0].fallback) 
        })
        .catch((err) => console.error(err));
};
boton?.addEventListener("click", llamadaAPI);

