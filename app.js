let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo.trim() === '') {
        alert('agrega un nombre valido.');
        return;
    }
    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = '';
    inputAmigo.focus();
}
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaHTML.appendChild(elementoLista);
    }
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega 1 amigo almenos, O no tienes ? :( .');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceSorteado];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.textContent = '¡El amigo secreto es: ' + amigoSecreto + '! siii';
}