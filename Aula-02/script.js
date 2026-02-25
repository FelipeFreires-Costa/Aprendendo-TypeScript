"use strict";
const produto = "Livro";
const preco = 200;
const carro = {
    marca: "audi",
    portas: 5,
};
const nintendo = {
    nome: 'nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
