"use strict";
const numeros = [19, 43, 45, , 12, 59];
const valores = [10, 'taxas', 30, 'produto', 40, 2];
function maiorQue20(data) {
    return data.filter((n) => n > 20);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(maiorQue20(numeros));
console.log(filtrarValores(valores));
const dados = [
    ['senhor dos aneis', 60],
    ['guerra dos tronos', 130]
];
