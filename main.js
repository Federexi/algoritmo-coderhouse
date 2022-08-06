const personas = []

let nombreHTMLelemento = document.getElementById("nombre")
let montoHTMLelemento = document.getElementById("monto")
let totalHTMLelemento = document.getElementById("total")
let listaPersonasHTMLelemento = document.getElementById("personitas")
let aporteHTMLelemento = document.getElementById("aporte")

document.getElementById("calcular").addEventListener("click", ingresarPersona)

function ingresarPersona(){

    let persona = nombreHTMLelemento.value;
    let monto = montoHTMLelemento.value;

    personas.push({
        nombre:persona,
        monto: parseInt(monto),
    });

    nombreHTMLelemento.value = "";
    montoHTMLelemento.value = "";

    definirTotal();
}
function definirTotal(){

    let lista = "";
    let total = 0;

    for(let i = 0; i < personas.length; i++){
        total += personas[i].monto
        lista += `${personas[i].nombre}: ${personas[i].monto} <br>`;
    }

    let iva = 1.21

    totalHTMLelemento.innerHTML = total * iva;
    listaPersonasHTMLelemento.innerHTML = lista;
    aporteHTMLelemento.innerHTML = (total * iva) / personas.length;
}