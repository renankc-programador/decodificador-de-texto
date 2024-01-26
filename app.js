//A letra "a" é convertida para "ai"
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

// Função para limpar o texto inicial quando a <textarea> é clicada
function limparTextoInicial() {
    let caixaTexto = document.getElementById('caixaTextoUsuario');
    if (caixaTexto.value === 'Digite seu texto aqui...') {
        caixaTexto.value = '';
    }
}

function criptografar() {
    let textoEntradaCripto = document.getElementById('caixaTextoUsuario').value;
    let novoTextoI = textoEntradaCripto.replace(/i/gi, 'imes');
    let novoTextoA = novoTextoI.replace(/a/gi, 'ai');
    let novoTextoE = novoTextoA.replace(/e/gi, 'enter');
    let novoTextoO = novoTextoE.replace(/o/gi, 'ober');
    let novoTextoU = novoTextoO.replace(/u/gi, 'ufat');

    document.getElementById('resultado').innerHTML = novoTextoU;
}

function descriptografar() {
    let textoEntradaDescripto = document.getElementById('caixaTextoUsuario').value;
    let novoTextoA = textoEntradaDescripto.replace(/ai/gi, 'a');
    let novoTextoE = novoTextoA.replace(/enter/gi, 'e');
    let novoTextoI = novoTextoE.replace(/imes/gi, 'i');
    let novoTextoO = novoTextoI.replace(/ober/gi, 'o');
    let novoTextoU = novoTextoO.replace(/ufat/gi, 'u');

    document.getElementById('resultado').innerHTML = novoTextoU;
}

function copiarTexto() {
    let textoCopiado = document.getElementById('resultado');
    navigator.clipboard.writeText(textoCopiado.innerHTML);
} 