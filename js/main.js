let bootcamp = "Bootcamp 592066 - Martin Maidana "
console.log(bootcamp);

let link = document.querySelector('link')

let retro = () => {
    link.setAttribute("href", "css/estilos-retro.css")
}

let futurista = () => {
    link.setAttribute("href", "css/estilos-futuro.css")
}

document.querySelector('#retro').addEventListener('click', retro)

document.querySelector('#futuro').addEventListener('click', futurista)











