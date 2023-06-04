//NIVEL 1
//EJERCICIO 1
const button = document.getElementById("btn");
const joke = document.getElementById("joke");

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
        if (joke instanceof HTMLElement) {
            joke.innerHTML = data.attachments[0].text; 
        }
    })
    .catch((err) => console.error(err));
};
button?.addEventListener("click",llamadaApiConsola)
button?.addEventListener("click", llamadaAPI);

//EJERCICIO 3
const buttonSubmit = document.getElementById("submit")
let reportAcudits:object[] = []
function acudits(){
    let puntuation:HTMLInputElement = document.getElementById("puntuation") as HTMLInputElement;
    const today:Date = new Date()
    fetch("https://icanhazdadjoke.com/slack")
        .then((res) => res.json())
        .then((data) => {
            let acudit:object = {
                joke:data.attachments[0].text,
                score:puntuation.value,
                date:today.toISOString()
            }
            reportAcudits.push(acudit)
        })
        .catch((err) => console.error(err));
}
buttonSubmit?.addEventListener("click",acudits)
