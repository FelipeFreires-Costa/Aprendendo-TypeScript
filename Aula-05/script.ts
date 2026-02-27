//funcao para preencher dados

interface Produto {
  nome: string;
  preco: number;
  teclado: boolean
}

function preencherDados(dados: Produto){
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'nao'}</p>
  </div>
  `
}

preencherDados({
  nome: 'computador',
  preco: 2000,
  teclado: true
})
preencherDados({
  nome: 'notebook',
  preco: 3000,
  teclado: false
})