const button = document.querySelector('.submit');
const altura = document.querySelector('.altura');
const resultado = document.querySelector('.resultado');

button.onclick= () => {
    let result = Math.round((parseFloat(altura.value.replace(",", "."))/154) * 100) / 100;
    if(result > 0){
        resultado.textContent = `Você tem ${result} Rito Gomes de altura!`;
    }
    else{
        resultado.textContent = `${altura.value} não é um Número`;
    }
}