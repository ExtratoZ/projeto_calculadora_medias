const form = document.getElementById('form');
const imgAprovado = '<img src="images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovação: '));

let linhas = '';

addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('nota');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi adicionada`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';

        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia () {
    let mediaFinal = calculaMedia();

    document.getElementById('media_final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado_media').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia () {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas +=     notas[i];
    }

    return somaNotas/notas.length;
}