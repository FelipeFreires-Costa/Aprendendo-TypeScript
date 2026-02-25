const produto: string = "Livro"
const preco: number = 200

const carro :{
  marca: string,
  portas: number
} = {
  marca: "audi",
  portas: 5,
}

const nintendo = {
  nome: 'nintendo',
  preco: '2000'
}

function transformarPreco(produto: {nome: string; preco: string}){
  produto.preco = "R$" + produto.preco
  return produto
}

const produtoNovo = transformarPreco(nintendo)

console.log(produtoNovo)