function toNumber(value: number | string){
  if(typeof value === 'number' ){
    return value
  }else if(typeof value === 'string'){
    return Number(value)
  }else{
    throw "value deve ser um numero ou uma string"
  }
}

console.log(toNumber('299'))