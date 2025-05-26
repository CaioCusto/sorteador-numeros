function sortear() {
    limparErro();

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    if(isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        mostrarErro("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    if (de >= ate) {
        mostrarErro("O valor 'Do número' deve ser menor do que o valor 'até o número'.");
        return;
    }

    let intervalo = ate - de + 1;
    if (quantidade > intervalo) {
        mostrarErro(`Quantidade de números maior do que o intervalo possível. Por favor, reduza a quantidade ou ajuste os valores 'de' e 'até'.`);
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`

    habilitarBotaoReiniciar()
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
        botao.removeAttribute("disabled");
    }

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
        botao.setAttribute("disabled", "disabled");
    }

function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    desabilitarBotaoReiniciar();
}

function mostrarErro(msg) {
    const erroDiv = document.getElementById('mensagem-erro');
    erroDiv.innerText = msg;
    erroDiv.style.display = 'block';
}

function limparErro() {
    const erroDiv = document.getElementById('mensagem-erro');
    erroDiv.innerText = '';
    erroDiv.style.display = 'none';
}