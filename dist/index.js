"use strict";
const button = document.getElementById("btn");
const joke = document.getElementById("joke");
const llamadaApiConsola = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then(data => {
        console.log(data.attachments[0].text);
    })
        .catch((err) => console.error(err));
};
const llamadaAPI = () => {
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then((data) => {
        if (joke instanceof HTMLElement) {
            joke.innerHTML = data.attachments[0].text;
        }
    })
        .catch((err) => console.error(err));
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", llamadaApiConsola);
button === null || button === void 0 ? void 0 : button.addEventListener("click", llamadaAPI);
const buttonSubmit = document.getElementById("submit");
let reportAcudits = [];
function acudits() {
    let puntuation = document.getElementById("puntuation");
    const today = new Date();
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then((data) => {
        let acudit = {
            joke: data.attachments[0].text,
            score: puntuation.value,
            date: today.toISOString()
        };
        reportAcudits.push(acudit);
    })
        .catch((err) => console.error(err));
}
buttonSubmit === null || buttonSubmit === void 0 ? void 0 : buttonSubmit.addEventListener("click", acudits);
