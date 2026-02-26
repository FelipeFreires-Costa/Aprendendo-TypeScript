const input = document.querySelector('input')

const total = localStorage.getItem('total')

if (input && total){
  input.value = total
  calcularTotal(Number(input.value))
}



function calcularTotal(value: number){
    const p = document.querySelector('p')
    if(p){

      p.innerText = `ganho total: ${value + 100 - value * 0.2}`
    }

}

function totalMudou(){
    if(input){
      localStorage.setItem('total', input.value)
      calcularTotal(Number(input.value))
    }
}

if(input){
  input.addEventListener('keyup', totalMudou)
}

interface PagamentoPix {
  valor: number;
  data: string;
}

interface PagamentoBoleto {
  valor: number;
  data: string;
}

const minhaConta: PagamentoPix = {
  valor: 150,
  data: "2026-02-26"
};

const mensalidadeFaculdade: PagamentoBoleto = minhaConta;

console.log(mensalidadeFaculdade)