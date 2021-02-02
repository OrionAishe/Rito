const button = document.querySelector('.submit');
const altura = document.querySelector('.altura');
const resultado = document.querySelector('.resultado')

button.onclick= () => {
let result = altura.value/1.54;
result = Math.round(result * 100) / 100
if(result > 0){
    resultado.textContent = `Você tem ${result} Ritos de altura!;
}
else{
    resultado.textContent = `${altura.value} não é um Número`;
}
}