// Elementos do DOM
const exameSelect = document.getElementById('exame-select');
const valorInput = document.getElementById('valor-input');
const unidadeDisplay = document.getElementById('unidade-display');
const analisarBtn = document.getElementById('analisar-btn');
const resultadoSection = document.getElementById('resultado-section');
const infoExameSection = document.getElementById('info-exame-section');
const novoTesteBtn = document.getElementById('novo-teste-btn');

// Variável para armazenar o exame selecionado
let exameSelecionado = null;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    preencherSelectExames();
    adicionarEventListeners();
});

// Preencher o select com os exames
function preencherSelectExames() {
    examesOrdenados.forEach(chaveExame => {
        const exame = exames[chaveExame];
        const option = document.createElement('option');
        option.value = chaveExame;
        option.textContent = exame.nome;
        exameSelect.appendChild(option);
    });
}

// Adicionar event listeners
function adicionarEventListeners() {
    exameSelect.addEventListener('change', selecionarExame);
    valorInput.addEventListener('input', validarCampos);
    valorInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !analisarBtn.disabled) {
            analisarResultado();
        }
    });
    analisarBtn.addEventListener('click', analisarResultado);
    novoTesteBtn.addEventListener('click', resetarFormulario);
}

// Quando um exame é selecionado
function selecionarExame() {
    const chaveExame = exameSelect.value;
    
    if (!chaveExame) {
        exameSelecionado = null;
        valorInput.disabled = true;
        valorInput.value = '';
        unidadeDisplay.textContent = '';
        analisarBtn.disabled = true;
        infoExameSection.classList.add('hidden');
        return;
    }
    
    exameSelecionado = exames[chaveExame];
    valorInput.disabled = false;
    valorInput.value = '';
    valorInput.focus();
    unidadeDisplay.textContent = exameSelecionado.unidade;
    
    // Mostrar informações sobre o exame
    mostrarInfoExame();
    
    validarCampos();
}

// Mostrar informações sobre o exame selecionado
function mostrarInfoExame() {
    if (!exameSelecionado) return;
    
    document.getElementById('info-titulo').textContent = `Sobre: ${exameSelecionado.nome}`;
    document.getElementById('info-descricao').textContent = exameSelecionado.descricao;
    infoExameSection.classList.remove('hidden');
}

// Validar se campos estão preenchidos
function validarCampos() {
    const temExame = exameSelect.value !== '';
    const temValor = valorInput.value.trim() !== '';
    
    analisarBtn.disabled = !(temExame && temValor);
}

// Analisar o resultado
function analisarResultado() {
    if (!exameSelecionado) return;
    
    const valor = parseFloat(valorInput.value);
    
    // Validar valor
    if (isNaN(valor)) {
        alert('Por favor, digite um valor numérico válido.');
        valorInput.focus();
        return;
    }
    
    // Determinar resultado
    let status = '';
    let statusClass = '';
    let mensagem = '';
    
    if (valor < exameSelecionado.minimo) {
        status = 'BAIXO';
        statusClass = 'baixo';
        mensagem = exameSelecionado.mensagemBaixo;
    } else if (valor > exameSelecionado.maximo) {
        status = 'ALTO';
        statusClass = 'alto';
        mensagem = exameSelecionado.mensagemAlto;
    } else {
        status = 'NORMAL';
        statusClass = 'normal';
        mensagem = exameSelecionado.mensagemNormal;
    }
    
    // Exibir resultado
    exibirResultado(valor, status, statusClass, mensagem);
}

// Exibir resultado na página
function exibirResultado(valor, status, statusClass, mensagem) {
    // Atualizar status visual
    const resultadoStatus = document.getElementById('resultado-status');
    
    resultadoStatus.textContent = `Resultado: ${status}`;
    resultadoStatus.className = `resultado-status ${statusClass}`;
    
    // Atualizar informações
    document.getElementById('resultado-exame').textContent = exameSelecionado.nome;
    document.getElementById('resultado-valor').textContent = 
        `${valor} ${exameSelecionado.unidade}`;
    document.getElementById('resultado-intervalo').textContent = 
        `${exameSelecionado.minimo} - ${exameSelecionado.maximo} ${exameSelecionado.unidade}`;
    
    // Atualizar mensagem
    const resultadoMensagem = document.getElementById('resultado-mensagem');
    resultadoMensagem.innerHTML = `
        <p>${mensagem}</p>
        <p class="recomendacao">
            <strong>Recomendação:</strong> Procure um profissional de saúde para avaliação completa e adequada.
        </p>
    `;
    
    // Desenhar gráfico
    desenharGraficoResultado(valor, statusClass);
    
    // Mostrar seção de resultado
    resultadoSection.classList.remove('hidden');
    resultadoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Desenhar gráfico de posição do resultado
function desenharGraficoResultado(valor, statusClass) {
    const posicaoValorDiv = document.getElementById('posicao-valor');
    
    // Calcular percentual de posição
    const range = exameSelecionado.maximo - exameSelecionado.minimo;
    const posicaoAbs = valor - exameSelecionado.minimo;
    const percentual = Math.min(100, Math.max(0, (posicaoAbs / range) * 100));
    
    // Limpar e recriar o gráfico
    posicaoValorDiv.innerHTML = '';
    
    // Label do valor do usuário (topo)
    const labelValor = document.createElement('div');
    labelValor.className = 'label-valor';
    labelValor.textContent = `Seu valor: ${valor}`;
    posicaoValorDiv.appendChild(labelValor);
    
    // Barra de progresso
    const barraProgresso = document.createElement('div');
    barraProgresso.className = 'barra-progresso';
    posicaoValorDiv.appendChild(barraProgresso);
    
    // Preenchimento até o valor
    const preenchimento = document.createElement('div');
    preenchimento.className = `preenchimento ${statusClass}`;
    preenchimento.style.width = percentual + '%';
    barraProgresso.appendChild(preenchimento);
    
    // Marcador de posição
    const marcador = document.createElement('div');
    marcador.className = `marcador-posicao ${statusClass}`;
    marcador.style.left = percentual + '%';
    marcador.innerHTML = '▼';
    posicaoValorDiv.appendChild(marcador);
    
    // Labels da escala (embaixo)
    const labelsDiv = document.createElement('div');
    labelsDiv.className = 'escala-labels-posicao';
    labelsDiv.innerHTML = `
        <div class="label-escala">
            <div class="label-texto">Baixo</div>
            <span class="label-valor-numerico">${exameSelecionado.minimo}</span>
        </div>
        <div class="label-escala">
            <div class="label-texto"></div>
        </div>
        <div class="label-escala">
            <div class="label-texto">Alto</div>
            <span class="label-valor-numerico">${exameSelecionado.maximo}</span>
        </div>
    `;
    posicaoValorDiv.appendChild(labelsDiv);
}

// Resetar formulário
function resetarFormulario() {
    exameSelect.value = '';
    valorInput.value = '';
    valorInput.disabled = true;
    unidadeDisplay.textContent = '';
    analisarBtn.disabled = true;
    exameSelecionado = null;
    resultadoSection.classList.add('hidden');
    infoExameSection.classList.add('hidden');
    exameSelect.focus();
}
