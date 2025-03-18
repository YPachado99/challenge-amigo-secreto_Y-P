// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    function agregarAmigo() {
        let input = document.getElementById('amigo');

        if (!input) {
            console.error("El input con id='amigo' no se encontró en el DOM.");
            return;
        }

        let nombre = input.value.trim();

        if (nombre === "") {
            alert('Debes ingresar un nombre');
            return;
        }

        amigos.push(nombre);
        console.log("Lista de amigos: ", amigos);
        input.value = "";
        actualizarLista();
    }

    function actualizarLista() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        for (let amigo of amigos) {
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSorteado = amigos[indiceAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; 
        let li = document.createElement('li');
        li.textContent = `Amigo sorteado: ${amigoSorteado}`;
        resultado.appendChild(li);
    }

    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});
