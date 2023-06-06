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

//NIVEL 2
// EJERICIO 4
function weather() {
    const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Barcelona&contentType=json&unitGroup=uk';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47f62bf98cmsh1b21dc3a5988ea8p1f2b06jsn1398a8f6987a',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    fetch(url,options)
        .then(res => res.json())
        .then(data => {
            let container = document.querySelector("#weather")
            let div:HTMLElement = document.createElement("div")
            let info = data.locations["Barcelona"].values[0]
            let nameCity = data.locations["Barcelona"].id
            let city = document.createElement("p")
            city.innerHTML = `${nameCity} `
            city.classList.add("mx-3")
            let temp = document.createElement("p")
            temp.innerHTML = ` ${info.temp} ºC`
            div.appendChild(city)
            div.appendChild(temp)
            div.classList.add("d-flex")
            div.classList.add("justify-content-end")
            container?.appendChild(div)
        })
        .catch(err => console.log(err))
}
document.addEventListener("DOMContentLoaded",weather);
