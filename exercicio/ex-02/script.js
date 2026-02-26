"use strict";
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularTotal(Number(input.value));
}
function calcularTotal(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularTotal(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
const minhaConta = {
    valor: 150,
    data: "2026-02-26"
};
const mensalidadeFaculdade = minhaConta;
console.log(mensalidadeFaculdade);
