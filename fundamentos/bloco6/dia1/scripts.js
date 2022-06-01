const button = document.querySelector("#submit")
const nome = document.querySelector("#name")
const paragrafo = document.querySelector('#paragraph')

button.addEventListener('click', logUser)

function logUser() {
    console.log(nome.value);
    paragrafo.innerHTML = nome.value
}