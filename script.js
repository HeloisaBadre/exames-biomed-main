// Elementos do DOM
const sexoSelect = document.getElementById('sexo-select');
const idadeSelect = document.getElementById('idade-select');
const tipoExameSelect = document.getElementById('tipo-exame-select');
const camposExamesContainer = document.getElementById('campos-exames-container');
const testarBtn = document.getElementById('testar-btn');
const resultadoSection = document.getElementById('resultado-section');
const resultadosContainer = document.getElementById('resultados-container');
const novoTesteBtn = document.getElementById('novo-teste-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Variáveis de estado
let sexoSelecionado = '';
let idadeSelecionada = '';
let tipoExameSelecionado = '';
let valoresExames = {};

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    adicionarEventListeners();
    inicializarDarkMode();
});

// Inicializar Dark Mode
function inicializarDarkMode() {
    const darkModeAtivo = localStorage.getItem('darkMode') === 'ativo';
    if (darkModeAtivo) {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', alternarDarkMode);
}

// Alternar Dark Mode
function alternarDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeAtivo = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeAtivo ? 'ativo' : 'inativo');
}

// Adicionar event listeners
function adicionarEventListeners() {
    sexoSelect.addEventListener('change', aoSelecionarSexo);
    idadeSelect.addEventListener('change', aoSelecionarIdade);
    tipoExameSelect.addEventListener('change', aoSelecionarTipoExame);
    testarBtn.addEventListener('click', analisarTodosExames);
    novoTesteBtn.addEventListener('click', resetarFormulario);
}

// Quando sexo é selecionado
function aoSelecionarSexo() {
    sexoSelecionado = sexoSelect.value;
    
    if (!sexoSelecionado) {
        tipoExameSelect.disabled = true;
        tipoExameSelect.value = '';
        camposExamesContainer.classList.add('hidden');
        camposExamesContainer.innerHTML = '';
        testarBtn.disabled = true;
        return;
    }
    
    tipoExameSelect.disabled = false;
    tipoExameSelect.focus();
}

// Quando idade é selecionada
function aoSelecionarIdade() {
    idadeSelecionada = idadeSelect.value;
    // Recarregar campos se um tipo de exame já foi selecionado
    if (tipoExameSelecionado) {
        preencherCamposExame(tipoExameSelecionado);
    }
}

// Quando tipo de exame é selecionado
function aoSelecionarTipoExame() {
    tipoExameSelecionado = tipoExameSelect.value;
    valoresExames = {};
    
    if (!tipoExameSelecionado) {
        camposExamesContainer.classList.add('hidden');
        camposExamesContainer.innerHTML = '';
        testarBtn.disabled = true;
        return;
    }
    
    // Preencher campos de exame
    preencherCamposExame();
    camposExamesContainer.classList.remove('hidden');
    testarBtn.disabled = false;
}

// Preencher campos de input para cada exame do tipo selecionado
function preencherCamposExame() {
    camposExamesContainer.innerHTML = '';
    
    const tipoExame = tiposExames[tipoExameSelecionado];
    if (!tipoExame) return;
    
    const exames = tipoExame.exames;
    
    Object.keys(exames).forEach(chaveExame => {
        const exame = exames[chaveExame];
        
        const div = document.createElement('div');
        div.className = 'form-group';
        
        const label = document.createElement('label');
        label.htmlFor = `exame-${chaveExame}`;
        label.textContent = exame.nome;
        
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-group';
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `exame-${chaveExame}`;
        input.className = 'campo-exame';
        input.placeholder = `Ex: 100`;
        input.step = '0.01';
        input.dataset.chave = chaveExame;
        input.dataset.exame = JSON.stringify(exame);
        input.addEventListener('input', () => {
            valoresExames[chaveExame] = input.value;
        });
        
        const unidade = document.createElement('span');
        unidade.className = 'unidade';
        unidade.textContent = exame.unidade;
        
        inputContainer.appendChild(input);
        inputContainer.appendChild(unidade);
        
        div.appendChild(label);
        div.appendChild(inputContainer);
        camposExamesContainer.appendChild(div);
    });
}

// Analisar todos os exames do tipo selecionado
function analisarTodosExames() {
    if (!sexoSelecionado || !tipoExameSelecionado) {
        alert('Por favor, selecione sexo e tipo de exame.');
        return;
    }
    
    const tipoExame = tiposExames[tipoExameSelecionado];
    const exames = tipoExame.exames;
    const resultados = [];
    
    let todosPreenchidos = true;
    
    Object.keys(exames).forEach(chaveExame => {
        const input = document.getElementById(`exame-${chaveExame}`);
        const valor = parseFloat(input.value);
        
        if (isNaN(valor) || input.value.trim() === '') {
            todosPreenchidos = false;
            return;
        }
        
        const exame = exames[chaveExame];
        const resultado = analisarExame(chaveExame, valor, exame);
        resultados.push(resultado);
    });
    
    if (!todosPreenchidos) {
        alert('Por favor, preencha todos os valores dos exames.');
        return;
    }
    
    // Exibir resultados
    exibirTodosResultados(resultados);
}

// Analisar um exame específico
function analisarExame(chaveExame, valor, exame) {
    let muitoBaixo, baixo, minimo, maximo, alto, muitoAlto;
    
    // Aplicar valores sexo-dependentes se necessário
    if (exame.sexoDependente) {
        muitoBaixo = exame[`muitoBaixo_${sexoSelecionado}`];
        baixo = exame[`baixo_${sexoSelecionado}`];
        minimo = exame[`minimo_${sexoSelecionado}`];
        maximo = exame[`maximo_${sexoSelecionado}`];
        alto = exame[`alto_${sexoSelecionado}`];
        muitoAlto = exame[`muitoAlto_${sexoSelecionado}`];
    } else if (exame.possuiIdades && idadeSelecionada && exame.idades[idadeSelecionada]) {
        // Valores dependentes de idade
        const faixaIdade = exame.idades[idadeSelecionada];
        
        // Verifique se é dependente de jejum
        if (exame.jejumDepende && faixaIdade.comJejum && faixaIdade.semJejum) {
            // Para agora, usar valores com jejum como padrão
            const valores = faixaIdade.comJejum;
            muitoBaixo = valores.muitoBaixo;
            baixo = valores.baixo;
            minimo = valores.minimo;
            maximo = valores.maximo;
            alto = valores.alto;
            muitoAlto = valores.muitoAlto;
        } else {
            muitoBaixo = faixaIdade.muitoBaixo;
            baixo = faixaIdade.baixo;
            minimo = faixaIdade.minimo;
            maximo = faixaIdade.maximo;
            alto = faixaIdade.alto;
            muitoAlto = faixaIdade.muitoAlto;
        }
    } else {
        muitoBaixo = exame.muitoBaixo;
        baixo = exame.baixo;
        minimo = exame.minimo;
        maximo = exame.maximo;
        alto = exame.alto;
        muitoAlto = exame.muitoAlto;
    }
    
    // Determinar status com base nas 5 categorias
    let status = '';
    let statusClass = '';
    let mensagem = '';
    let dicas = [];
    
    if (muitoBaixo !== undefined && valor < muitoBaixo) {
        status = 'MUITO BAIXO';
        statusClass = 'muito-baixo';
        mensagem = exame.mensagemMuitoBaixo || exame.mensagemBaixo;
        if (exame.dicas && exame.dicas.muito_baixo) {
            dicas = exame.dicas.muito_baixo;
        }
    } else if (baixo !== undefined && valor < baixo) {
        status = 'BAIXO';
        statusClass = 'baixo';
        mensagem = exame.mensagemBaixo;
        if (exame.dicas && exame.dicas.baixo) {
            dicas = exame.dicas.baixo;
        }
    } else if (valor < minimo) {
        status = 'BAIXO';
        statusClass = 'baixo';
        mensagem = exame.mensagemBaixo;
        if (exame.dicas && exame.dicas.baixo) {
            dicas = exame.dicas.baixo;
        }
    } else if (muitoAlto !== undefined && valor > muitoAlto) {
        status = 'MUITO ALTO';
        statusClass = 'muito-alto';
        mensagem = exame.mensagemMuitoAlto || exame.mensagemAlto;
        if (exame.dicas && exame.dicas.muito_alto) {
            dicas = exame.dicas.muito_alto;
        }
    } else if (alto !== undefined && valor > alto) {
        status = 'ALTO';
        statusClass = 'alto';
        mensagem = exame.mensagemAlto;
        if (exame.dicas && exame.dicas.alto) {
            dicas = exame.dicas.alto;
        }
    } else if (valor > maximo) {
        status = 'ALTO';
        statusClass = 'alto';
        mensagem = exame.mensagemAlto;
        if (exame.dicas && exame.dicas.alto) {
            dicas = exame.dicas.alto;
        }
    } else {
        status = 'NORMAL';
        statusClass = 'normal';
        mensagem = exame.mensagemNormal;
    }
    
    return {
        chaveExame,
        nome: exame.nome,
        valor,
        unidade: exame.unidade,
        minimo,
        maximo,
        status,
        statusClass,
        mensagem,
        descricao: exame.descricao,
        dicas
    };
}

// Exibir todos os resultados
function exibirTodosResultados(resultados) {
    resultadosContainer.innerHTML = '';
    
    resultados.forEach(resultado => {
        const card = document.createElement('div');
        card.className = `resultado-card ${resultado.statusClass}`;
        
        const statusDiv = document.createElement('div');
        statusDiv.className = `resultado-status ${resultado.statusClass}`;
        statusDiv.textContent = `Resultado: ${resultado.status}`;
        
        const titulo = document.createElement('h2');
        titulo.className = 'resultado-titulo';
        titulo.textContent = resultado.nome;
        
        const info = document.createElement('div');
        info.className = 'resultado-info';
        info.innerHTML = `
            <p><strong>Seu valor:</strong> <span>${resultado.valor} ${resultado.unidade}</span></p>
            <p><strong>Intervalo de referência:</strong> <span>${resultado.minimo} - ${resultado.maximo} ${resultado.unidade}</span></p>
        `;
        
        const grafico = document.createElement('div');
        grafico.className = 'resultado-grafico';
        grafico.innerHTML = criarGraficoHTML(resultado);
        
        const mensagem = document.createElement('div');
        mensagem.className = 'resultado-mensagem';
        let mensagemHTML = `<p>${resultado.mensagem}</p>`;
        
        // Adicionar dicas se o resultado não for normal
        if (resultado.status !== 'NORMAL' && resultado.dicas && resultado.dicas.length > 0) {
            mensagemHTML += `
                <div class="resultado-dicas">
                    <p class="dicas-titulo"><strong>Dicas para melhorar:</strong></p>
                    <ul class="dicas-lista">
                        ${resultado.dicas.map(dica => `<li>${dica}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        mensagemHTML += `
            <p class="recomendacao">
                <strong>Recomendação:</strong> Procure um profissional de saúde para avaliação completa e adequada.
            </p>
        `;
        
        mensagem.innerHTML = mensagemHTML;
        
        card.appendChild(statusDiv);
        card.appendChild(titulo);
        card.appendChild(info);
        card.appendChild(grafico);
        card.appendChild(mensagem);
        resultadosContainer.appendChild(card);
    });
    
    // Mostrar seção de resultado
    resultadoSection.classList.remove('hidden');
    resultadoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Remover classes de resultado anterior do body
    document.body.className = document.body.className.replace(/resultado-(muito-)?[a-z]+/g, '').trim();
}

// Criar HTML do gráfico para um resultado
function criarGraficoHTML(resultado) {
    const range = resultado.maximo - resultado.minimo;
    const posicaoAbs = resultado.valor - resultado.minimo;
    const percentual = Math.min(100, Math.max(0, (posicaoAbs / range) * 100));
    
    return `
        <div class="grafico-exame">
            <div class="grafico-label">Seu valor: ${resultado.valor} ${resultado.unidade}</div>
            <div class="grafico-barra-container">
                <div class="grafico-barra-background">
                    <div class="grafico-barra-preenchimento ${resultado.statusClass}" style="width: ${percentual}%"></div>
                </div>
                <div class="grafico-marcador ${resultado.statusClass}" style="left: ${percentual}%">▼</div>
            </div>
            <div class="grafico-labels-escala">
                <div class="grafico-label-min">
                    <span class="grafico-label-texto">Min</span>
                    <span class="grafico-valor">${resultado.minimo}</span>
                </div>
                <div class="grafico-label-max">
                    <span class="grafico-label-texto">Max</span>
                    <span class="grafico-valor">${resultado.maximo}</span>
                </div>
            </div>
        </div>
    `;
}

// Resetar formulário
function resetarFormulario() {
    sexoSelect.value = '';
    idadeSelect.value = '';
    tipoExameSelect.value = '';
    tipoExameSelect.disabled = true;
    camposExamesContainer.innerHTML = '';
    camposExamesContainer.classList.add('hidden');
    testarBtn.disabled = true;
    resultadoSection.classList.add('hidden');
    resultadosContainer.innerHTML = '';
    valoresExames = {};
    sexoSelecionado = '';
    idadeSelecionada = '';
    tipoExameSelecionado = '';
    document.body.className = document.body.className.replace(/resultado-(muito-)?[a-z]+/g, '').trim();
    sexoSelect.focus();
}
