const input = document.querySelector('input')

const total = localStorage.getItem('total')
input.value = total
    calcularTotal(input.value)

function calcularTotal(value){
    const p = document.querySelector('p')
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`

}

function totalMudou(){
    const value = Number(input.value)
    localStorage.setItem('total', value)
    calcularTotal(value)
}

input.addEventListener('keyup', totalMudou)