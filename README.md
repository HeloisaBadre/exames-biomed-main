# Interpretador de Exames Laboratoriais

Site que permite interpretar valores de exames de laboratório de forma simples e intuitiva.

##  Descrição

Este projeto foi desenvolvido para ajudar pessoas a entender melhor seus resultados de exames laboratoriais, comparando valores com intervalos de referência padrão.

**Importante:** Este site possui **caráter educativo e informativo**. Ele **NÃO substitui** avaliação médica ou diagnóstico profissional.

##  Funcionalidades

-  Seleção de diversos exames laboratoriais
-  Comparação automática com valores de referência
-  Gráfico visual da posição do resultado no intervalo
-  Interface responsiva (funciona em celular)
-  Design moderno e intuitivo
-  Avisos médicos em destaque
-  Informações educativas sobre cada exame

##  Exames Disponíveis

### Hemograma
- Hemoglobina
- Leucócitos (Glóbulos Brancos)
- Plaquetas

### Bioquímica
- Glicose (Em Jejum)
- Colesterol Total
- HDL (Colesterol Bom)
- LDL (Colesterol Ruim)
- Triglicerídeos

### Outros Comuns
- TSH (Hormônio Estimulante da Tireoide)
- Creatinina
- Ureia

##  Como Usar

1. **Abra o arquivo `index.html`** em seu navegador
2. **Selecione um exame** na lista dropdown
3. **Digite o valor** do resultado do seu exame
4. **Clique em "Analisar resultado"**
5. Veja a interpretação com gráfico visual
6. Consulte a mensagem de recomendação

##  Tecnologias

- **HTML5** - Estrutura da página
- **CSS3** - Design e layout responsivo
- **JavaScript Puro** - Lógica de aplicação

Sem dependências externas! Tudo funciona diretamente no navegador.

##  Estrutura de Arquivos

```
├── index.html          # Estrutura da página
├── style.css           # Estilos e design
├── script.js           # Lógica da aplicação
├── dados_exames.js     # Banco de dados dos exames
└── README.md           # Este arquivo
```

##  Estrutura de Dados

Cada exame contém:

```javascript
{
  nome: "Nome do Exame",
  unidade: "mg/dL",
  minimo: 70,
  maximo: 99,
  descricao: "Descrição do exame",
  mensagemBaixo: "Mensagem se valor estiver baixo",
  mensagemAlto: "Mensagem se valor estiver alto",
  mensagemNormal: "Mensagem se valor estiver normal"
}
```

##  Como Adicionar Novos Exames

Edite o arquivo `dados_exames.js` e adicione um novo objeto ao dicionário `exames`:

```javascript
const exames = {
  // ... exames existentes ...
  
  seu_exame: {
    nome: "Nome do Seu Exame",
    unidade: "unidade",
    minimo: 0,
    maximo: 100,
    descricao: "Descrição do exame",
    mensagemBaixo: "Mensagem para valor baixo",
    mensagemAlto: "Mensagem para valor alto",
    mensagemNormal: "Mensagem para valor normal"
  }
};
```

##  Personalização

### Cores
As cores principais podem ser alteradas em `style.css` nas variáveis CSS:

```css
:root {
    --cor-primaria: #1e88e5;        /* Azul */
    --cor-sucesso: #4caf50;         /* Verde */
    --cor-aviso: #ff9800;           /* Laranja */
    --cor-erro: #f44336;            /* Vermelho */
}
```

### Intervalos de Referência
Altere os valores `minimo` e `maximo` em `dados_exames.js` para adequar aos seus padrões de referência.


## Aviso Importante

Este sistema é **apenas informativo**. Ele:

-  **NÃO** realiza diagnóstico médico
-  **NÃO** substitui avaliação profissional
-  **NÃO** deve ser usado como base para tratamento

Sempre consulte um profissional de saúde para interpretação completa dos seus exames.

##  Fluxo da Aplicação

1. Usuário seleciona exame → Sistema carrega informações do exame
2. Usuário digita valor → Sistema ativa botão de análise
3. Usuário clica "Analisar" → Sistema compara com referência
4. Resultado é exibido com:
   - Status (Baixo/Normal/Alto)
   - Gráfico de posição
   - Mensagem explicativa
   - Recomendação de consulta médica

##  Interpretação dos Resultados

### Resultado NORMAL 
- Valor está dentro do intervalo de referência
- Mensagem informativa tranquilizadora

### Resultado ALTO 
- Valor está acima do máximo
- Mensagem explicativa sobre a elevação
- Recomendação de avaliação médica

### Resultado BAIXO 
- Valor está abaixo do mínimo
- Mensagem explicativa sobre a redução
- Recomendação de avaliação médica
