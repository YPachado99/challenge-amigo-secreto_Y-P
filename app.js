// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('nombreamigo');
    let nombre = input.value.trim();
    if (amigo === "") {
        alert('Debes ingresar un nombre');
        return;
    }

    amigos.push(nombre);
    console.log("Lista de amigos: " + amigos);
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(li);
    }
}