let bootcamp = "Bootcamp 592066 - Martin Maidana "
console.log(bootcamp);

/* /* --color-fondo:#1f2023;
    --verde: #4d6d63;
    --verde-claro:#a6c1b9;
    --verde-oscuro:#2b3d37;
    --blanco-letras:#e8eaed;
    --verde-claro2: #d6e2de; */



// primer fieldset
let fieldset = document.getElementsByClassName('fieldset')[0]
let legend = document.getElementsByClassName('fieldset__legend')[0]
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido')
let documento = document.querySelector('#documento')
let nacionalidad = document.querySelector('#nacionalidad')
let info = document.querySelector('#info')
let masculino = document.querySelector('#masculino')
let femenino = document.querySelector('#femenino')
let otro = document.querySelector('#otro')

let oscuro = () => {
    legend.style.backgroundColor="#2b3d37"
    fieldset.style.backgroundColor="#a6c1b9"

    fieldset1.style.backgroundColor="#d6e2de"
    legend1.style.backgroundColor="#4d6d63"

    fieldset2.style.backgroundColor="#d6e2de"
    legend2.style.backgroundColor="#4d6d63"
}


nombre.addEventListener("focus", oscuro) 
apellido.addEventListener("focus", oscuro) 
documento.addEventListener("focus", oscuro) 
nacionalidad.addEventListener("focus", oscuro) 
info.addEventListener("focus", oscuro) 
masculino.addEventListener("focus", oscuro) 
femenino.addEventListener("focus", oscuro) 
otro.addEventListener("focus", oscuro) 

// segundo fieldset

let fieldset1 = document.getElementsByClassName('fieldset')[1]
let legend1 = document.getElementsByClassName('fieldset__legend')[1]

let telefono = document.querySelector('#telefono')
let email = document.querySelector('#email')

let oscuro1 = () => {
    fieldset.style.backgroundColor="#d6e2de"
    legend.style.backgroundColor="#4d6d63"

    fieldset1.style.backgroundColor="#a6c1b9"
    legend1.style.backgroundColor="#2b3d37"

    fieldset2.style.backgroundColor="#d6e2de"
    legend2.style.backgroundColor="#4d6d63"
}

telefono.addEventListener("focus", oscuro1)
email.addEventListener("focus", oscuro1)

// ulitmo fieldset 

let fieldset2 = document.getElementsByClassName('fieldset')[2]
let legend2 = document.getElementsByClassName('fieldset__legend')[2]

let basquet = document.querySelector('#basquet')
let boxeo = document.querySelector('#boxeo')
let futbol = document.querySelector('#futbol')
let tenis = document.querySelector('#tenis')
let basquet2 = document.querySelector('#basquet2')
let futbol2 = document.querySelector('#futbol2')
let rugby = document.querySelector('#rugby')
let voley = document.querySelector('#voley')


let oscuro2 = () => {
    fieldset.style.backgroundColor="#d6e2de"
    legend.style.backgroundColor="#4d6d63"
    fieldset1.style.backgroundColor="#d6e2de"
    legend1.style.backgroundColor="#4d6d63"
    fieldset2.style.backgroundColor="#a6c1b9"
    legend2.style.backgroundColor="#2b3d37"
}

basquet.addEventListener("focus", oscuro2)
futbol.addEventListener("focus", oscuro2)
boxeo.addEventListener("focus", oscuro2)
tenis.addEventListener("focus", oscuro2)
basquet2.addEventListener("focus", oscuro2)
futbol2.addEventListener("focus", oscuro2)
rugby.addEventListener("focus", oscuro2)
voley.addEventListener("focus", oscuro2)











