const boton = document.getElementById("btn")
const chiste = document.getElementById("chiste")

const llamadaAPI = () =>{
    fetch("https://icanhazdadjoke.com/slack")
        .then(res => res.json())
        .then(data => {
            if (chiste instanceof HTMLElement) {
                chiste.innerText = data.attachments[0].text; // Actualiza el texto del elemento con el chiste obtenido
            }
        })
        .catch(err => console.error(err))
}
boton?.addEventListener("click",llamadaAPI)