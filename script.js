let select = document.querySelector('#operacoes');
let resultado = document.querySelector('#resposta');

function calcularResultado() {
    let valor1Alterado = document.querySelector('#valor1').value;
    let valor2Alterado = document.querySelector('#valor2').value;

    valor1Alterado = parseFloat(valor1Alterado);
    valor2Alterado = parseFloat(valor2Alterado);
    
    let soma = valor1Alterado + valor2Alterado;
    let subtracao = valor1Alterado - valor2Alterado;
    let multiplicacao = valor1Alterado * valor2Alterado;
    let divisao = (valor2Alterado !== 0) ? (valor1Alterado / valor2Alterado) : null;

    if (divisao !== null && Number.isInteger(divisao)) {
        divisao = Math.round(divisao);
    } else if (divisao !== null) {
        divisao = divisao.toFixed(2);
    }

    if (select.value === 'mais') {
        resultado.innerHTML = `O resultado da soma é: ${soma}`;
    } else if (select.value === 'menos') {
        resultado.innerHTML = `O resultado da subtração é: ${subtracao}`;
    } else if (select.value === 'vezes') {
        resultado.innerHTML = `O resultado da multiplicação é: ${multiplicacao}`;
    } else if (select.value === 'divisao') {
        if (divisao === null) {
            resultado.innerHTML = `Não é possível dividir por zero!`;
        } else {
            resultado.innerHTML = `O resultado da divisão é: ${divisao}`;
        }
    }
}

document.querySelector('#valor1').addEventListener('input', calcularResultado);
document.querySelector('#valor2').addEventListener('input', calcularResultado);
select.addEventListener('change', calcularResultado);

calcularResultado();