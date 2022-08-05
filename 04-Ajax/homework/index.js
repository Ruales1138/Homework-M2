// Lista Amigos
const btnAmigos = document.querySelector("#boton");
const ul = document.querySelector("#lista");

btnAmigos.addEventListener("click", function(e) {
    ul.innerHTML = "";
    fetch("http://localhost:5000/amigos").then(res => res.json()).then(amigos => {
        for (let i = 0; i < amigos.length; i++) {
            let li = `<li>${amigos[i].name}</li>`;
            ul.innerHTML += li;
        }
    })
})

// Buscar Amigos
const inputAmigo = document.querySelector("#input");
const btnAmigo = document.querySelector("#search");
const spanAmigo = document.querySelector("#amigo");

btnAmigo.addEventListener("click", function() {
    let idAmigo = inputAmigo.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`).then(res => res.json()).then(amigo => {
        inputAmigo.value = "";
        spanAmigo.innerHTML = amigo.name;
    })
})

// Borrar Amigo
const inputDelete = document.querySelector("#inputDelete")
const btnDelete = document.querySelector("#delete")
const spanSucces = document.querySelector("#succes")

btnDelete.addEventListener("click", function() {
    let idAmigo = inputDelete.value
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{method: "DELETE"}).then(res => res.json()).then(data => {
        inputDelete.value = ""
        spanSucces.innerText = "Borrado"
        showFriends()
    })
})
