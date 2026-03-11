# Documentação Técnica - Interpretador de Exames Laboratoriais

## Visão Geral

Este é um aplicativo web educativo desenvolvido com **HTML5, CSS3 e JavaScript puro** que permite aos usuários interpretar resultados de exames laboratoriais comparando-os com valores de referência padrão.

## Arquitetura

### Componentes Principais

```
┌─────────────────────────────────────────────┐
│              index.html                     │
│         (Estrutura da página)               │
└────────────────┬────────────────────────────┘
                 │
        ┌────────┴─────────┐
        │                  │
    ┌───▼────┐        ┌───▼─────┐
    │style.css│       │script.js │
    │(Design) │       │(Lógica)  │
    └─────────┘       └───┬──────┘
                          │
                    ┌─────▼──────────┐
                    │dados_exames.js │
                    │(Banco de dados)│
                    └────────────────┘
```

## Estrutura de Arquivos

### 1. `index.html`
- Contém toda a estrutura semântica da página
- Define todos os elementos da interface do usuário
- Carrega os scripts e estilos

**Seções principais:**
- `<header>` - Título e subtítulo
- `<main>` - Conteúdo principal com formulário
- `<footer>` - Aviso médico

### 2. `style.css`
- 600+ linhas de CSS3
- Design responsivo com mobile-first
- Variáveis CSS para cores e espaçamentos
- Animações suaves para UX melhorada

**Recursos CSS:**
- Gradientes lineares
- Flexbox para layouts
- Media queries para responsividade
- Transições suaves

### 3. `script.js`
- Lógica principal da aplicação
- Manipulação do DOM
- Validação de entrada
- Cálculo e exibição de resultados

**Funções principais:**
- `preencherSelectExames()` - Popula dropdown com exames
- `selecionarExame()` - Manipula seleção de exame
- `analisarResultado()` - Realiza comparação de valores
- `desenharGraficoResultado()` - Gera visualização gráfica
- `resetarFormulario()` - Limpa formulário

### 4. `dados_exames.js`
- Banco de dados em formato objeto JavaScript
- Contém informações de 11 exames iniciais
- Facilmente expansível para novos exames

**Estrutura de dados:**
```javascript
const exames = {
  chaveExame: {
    nome: string,
    unidade: string,
    minimo: number,
    maximo: number,
    descricao: string,
    mensagemBaixo: string,
    mensagemAlto: string,
    mensagemNormal: string
  }
}
```

## Fluxo de Dados

```
1. User Input
   └─> Seleciona exame
   └─> Digita valor

2. Validation
   └─> Verifica se campos estão preenchidos
   └─> Valida tipo de dado (número)

3. Processing
   └─> Busca dados do exame em dados_exames.js
   └─> Compara valor com intervalos
   └─> Determina status (baixo/normal/alto)

4. Output
   └─> Atualiza DOM com resultado
   └─> Desenha gráfico
   └─> Exibe mensagem contextualizada
```

## Lógica de Comparação

```javascript
if (valor < minimo) {
  status = 'BAIXO'
} else if (valor > maximo) {
  status = 'ALTO'
} else {
  status = 'NORMAL'
}
```

## Elementos DOM Principais

| ID | Tipo | Função |
|---|---|---|
| `exame-select` | Select | Seleção de exame |
| `valor-input` | Input | Entrada do valor |
| `analisar-btn` | Button | Dispara análise |
| `resultado-section` | Section | Container do resultado |
| `resultado-status` | Div | Status visual (NORMAL/ALTO/BAIXO) |
| `posicao-valor` | Div | Gráfico de posição |
| `resultado-mensagem` | Div | Mensagem explicativa |
| `novo-teste-btn` | Button | Reseta formulário |

## Responsividade

### Breakpoints
- **Desktop:** > 768px
- **Tablet:** 481px - 768px  
- **Mobile:** < 480px

### Ajustes por dispositivo
- Fonte reduzida em mobile
- Padding reduzido em telas pequenas
- Input com tamanho de fonte 16px para evitar zoom no iOS
- Layout vertical em mobile para inputs

## Cores (CSS Variables)

```css
--cor-primaria: #1e88e5       /* Azul */
--cor-secundaria: #0d47a1     /* Azul escuro */
--cor-sucesso: #4caf50        /* Verde */
--cor-aviso: #ff9800          /* Laranja */
--cor-erro: #f44336           /* Vermelho */
--cor-background: #f5f7fa     /* Cinza claro */
--cor-card: #ffffff           /* Branco */
```

## Fluxo de Usuário Detalhado

### 1. Carregamento Inicial
```
DOMContentLoaded
└─> preencherSelectExames()
    └─> Itera sobre examesOrdenados
    └─> Cria <option> para cada exame
    └─> Adiciona ao select
```

### 2. Seleção de Exame
```
exameSelect.change
└─> selecionarExame()
    ├─> Busca chave do exame
    ├─> Carrega dados em exameSelecionado
    ├─> Habilita input de valor
    ├─> Atualiza unidade exibida
    ├─> Mostra informações do exame
    └─> Valida campos
```

### 3. Análise de Resultado
```
analisarBtn.click
└─> analisarResultado()
    ├─> Valida se valor é número
    ├─> Compara com minimo/maximo
    ├─> Determina status
    └─> exibirResultado()
        ├─> Atualiza status visual
        ├─> Exibe informações
        ├─> desenharGraficoResultado()
        │   ├─> Calcula percentual de posição
        │   ├─> Cria barra de progresso
        │   └─> Posiciona marcador
        └─> Mostra resultado-section
```

## Validação

### Input de Valor
- Tipo: `number` com `step="0.01"`
- Validação: `parseFloat()` + `isNaN()`
- Desabilitado até exame ser selecionado

### Seleção de Exame
- Obrigatória para habilitar input
- Atualiza UI dinamicamente

### Botão de Análise
- Desabilitado até ambos campos preenchidos
- Pode ser acionado com Enter no input

## Gráfico de Posição

O gráfico visual mostra a posição do valor dentro do intervalo de referência:

```
Cálculo de posição:
range = maximo - minimo
posicaoAbs = valor - minimo
percentual = (posicaoAbs / range) * 100
```

**Elementos:**
- **Barra de fundo:** Escala completa (cinza)
- **Barra preenchida:** Do minimo até o valor (verde/laranja/vermelho)
- **Marcador:** Triângulo indicando posição exata
- **Labels:** Valores de referência e valor do usuário

## Acessibilidade

✅ **Implementado:**
- Semântica HTML apropriada
- Labels associadas a inputs
- Contraste de cores adequado
- Feedback visual claro
- Navegação por teclado

⚠️ **Melhorias futuras:**
- ARIA labels mais detalhadas
- Suporte a leitores de tela
- Modo alto contraste

## Performance

- **Sem dependências externas** → Carregamento mais rápido
- **DOM manipulation eficiente** → Queremos evitar reflows
- **CSS classes em vez de inline styles**
- **Event delegation onde possível**

**Tamanho dos arquivos:**
- `index.html` ~ 3KB
- `style.css` ~ 8KB
- `script.js` ~ 5KB
- `dados_exames.js` ~ 3KB
- **Total: ~19KB** (sem compressão)

## Segurança

✅ **Considerações:**
- Sem envio de dados para servidores
- Tudo processado localmente no navegador
- Aviso claro sobre fins educativos
- Sem armazenamento de dados sensíveis (atualmente)

⚠️ **Limitações:**
- Sem validação contra valores absurdos (user responsibility)
- Sem proteção contra alteração de código cliente

## Expansão de Funcionalidades

### Adicionar Novo Exame

1. Editar `dados_exames.js`:
```javascript
const exames = {
  // ... exames existentes ...
  novo_exame: {
    nome: "Nome do Novo Exame",
    unidade: "unidade",
    minimo: 0,
    maximo: 100,
    descricao: "Descrição",
    mensagemBaixo: "...",
    mensagemAlto: "...",
    mensagemNormal: "..."
  }
};
```

2. Executar `examesOrdenados.sort()` para ordenação alfabética automática

### Funcionalidades Futuras Sugeridas

1. **LocalStorage**
   - Salvar histórico de testes
   - Comparar resultados ao longo do tempo

2. **Backend**
   - Salvar dados de usuários (com consentimento)
   - Analytics

3. **Múltiplos Idiomas**
   - Criar objeto de traduções
   - Adicionar seletor de idioma

4. **PDF Export**
   - Gerar relatório imprimível

5. **Gráficos Avançados**
   - Chart.js para gráficos más complexos
   - Histórico gráfico

6. **API Externa**
   - Integrar com resultados de laboratórios
   - Sincronizar com prontuário eletrônico

## Compatibilidade

✅ **Navegadores suportados:**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

⚠️ **Internet Explorer:** Não suportado (ES6+)

## Testes Recomendados

### Manual Testing
- [ ] Testar cada exame
- [ ] Valores baixos, normais, altos
- [ ] Valores decimais
- [ ] Valores inválidos
- [ ] Responsividade em mobile
- [ ] Navegação por teclado

### Automatizado
```javascript
// Exemplo de teste unitário (Jest)
test('compara valor baixo corretamente', () => {
  const resultado = analisarValor(50, 70, 99);
  expect(resultado).toBe('BAIXO');
});
```

## Referências de Valores

Os valores de referência foram baseados em:
- Padrões internacionais (NCCLS, IFCC)
- Laboratórios brasileiros (ANVISA)
- Diretrizes clínicas

⚠️ **Importante:** Valores podem variar por:
- Método de análise
- Laboratório
- População (idade, sexo)
- Unidades de medida

## Troubleshooting

### Problema: Exames não aparecem
**Solução:** Verificar se `dados_exames.js` está carregado antes de `script.js`

### Problema: Gráfico não desenha
**Solução:** Verificar console por erros JavaScript

### Problema: Estilos não aplicam
**Solução:** Limpar cache do navegador (Ctrl+F5)

### Problema: Input desabilitado sempre
**Solução:** Verificar se exame foi selecionado corretamente

## Licença

Código aberto para fins educacionais.

---

**Última revisão:** Março 2026
