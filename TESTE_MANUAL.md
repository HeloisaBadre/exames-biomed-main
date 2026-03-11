<!-- ARQUIVO DE TESTE MANUAL DO SITE -->
<!-- 
  Este arquivo contém instruções visuais de como testar o site
  Salve como TESTE_MANUAL.md
-->

# 🧪 Guia de Teste Manual Completo

## ✅ Antes de Começar

Certifique-se que você tem:
- [ ] Pasta `exames-biomed-main` com todos os arquivos
- [ ] `index.html` acessível
- [ ] Navegador atualizado (Chrome, Firefox, Safari ou Edge)
- [ ] 15-20 minutos para testes completos

---

## 🔧 Testes de Funcionalidade Básica

### Teste 1: Página Carrega Corretamente
```
✅ ESPERADO:
- Título aparece: "🔬 Interpretador de Exames Laboratoriais"
- Subtítulo aparece
- Formulário visível
- Dropdown preenchido com exames
- Rodapé com aviso médico

⏱️ Tempo: 30 segundos
```

### Teste 2: Seleção de Exame
```
📋 PASSOS:
1. Clique no dropdown de exames
2. Veja a lista aparecer
3. Selecione "Glicose"
4. Verifique unidade "mg/dL" aparece

✅ ESPERADO:
- Campo de valor fica habilitado
- Unidade aparece ao lado
- Informação sobre exame aparece

⏱️ Tempo: 30 segundos
```

### Teste 3: Entrada de Valor
```
📋 PASSOS:
1. Com "Glicose" selecionado
2. Clique no campo de valor
3. Digite "85"
4. Observe o botão

✅ ESPERADO:
- Campo aceita números
- Botão "Analisar resultado" fica azul e habilitado
- Aceita números com decimal (ex: 85.5)

⏱️ Tempo: 30 segundos
```

### Teste 4: Análise de Resultado - NORMAL
```
📋 PASSOS:
1. Exame: "Glicose"
2. Valor: "85"
3. Clique: "Analisar resultado"

✅ ESPERADO:
- Desaparece formulário
- Aparece seção de resultado
- Status: "Resultado: NORMAL ✅"
- Cor verde clara
- Gráfico mostra barra preenchida até o valor
- Mensagem diz: "...dentro do intervalo normal"
- Informações mostram:
  * Exame: Glicose
  * Seu valor: 85 mg/dL
  * Intervalo: 70 - 99 mg/dL

⏱️ Tempo: 1 minuto
```

### Teste 5: Análise de Resultado - ALTO
```
📋 PASSOS:
1. Clique: "Testar outro exame"
2. Selecione: "Colesterol Total"
3. Digite: "250"
4. Clique: "Analisar resultado"

✅ ESPERADO:
- Status: "Resultado: ALTO ⚠️"
- Cor laranja/amarela
- Gráfico mostra barra além do máximo
- Marcador (▼) posicionado à direita
- Mensagem sobre elevação
- Recomendação de consulta médica

⏱️ Tempo: 1 minuto
```

### Teste 6: Análise de Resultado - BAIXO
```
📋 PASSOS:
1. Clique: "Testar outro exame"
2. Selecione: "Hemoglobina"
3. Digite: "10"
4. Clique: "Analisar resultado"

✅ ESPERADO:
- Status: "Resultado: BAIXO ⚠️"
- Cor vermelha/rosa
- Gráfico mostra barra até valor baixo
- Marcador (▼) posicionado à esquerda
- Mensagem sobre baixo valor
- Menção a anemia potencial

⏱️ Tempo: 1 minuto
```

### Teste 7: Reset do Formulário
```
📋 PASSOS:
1. Com resultado visível
2. Clique: "Testar outro exame"

✅ ESPERADO:
- Resultado desaparece
- Formulário volta
- Campo de valor vazio e desabilitado
- Dropdown volta a padrão
- Cursor vai para dropdown

⏱️ Tempo: 30 segundos
```

---

## 📱 Testes de Responsividade

### Teste 8: Desktop (1920x1080)
```
📋 PASSOS:
1. Abra site em tela cheia
2. Complete um teste
3. Verifique layout

✅ ESPERADO:
- Página usa largura máxima
- Margens laterais
- Todos elementos bem espaçados
- Gráfico legível
- Texto bem tamanho

⏱️ Tempo: 1 minuto
```

### Teste 9: Tablet (768px)
```
📋 PASSOS:
1. F12 > Redimensione para 768px
2. Ou abra em tablet real
3. Complete um teste

✅ ESPERADO:
- Layout ainda funciona bem
- Fontes legíveis
- Botões clicáveis
- Gráfico visível
- Sem scroll horizontal

⏱️ Tempo: 1 minuto
```

### Teste 10: Smartphone (480px)
```
📋 PASSOS:
1. F12 > Redimensione para 480px
2. Ou abra em celular
3. Complete um teste

✅ ESPERADO:
- Layout vertical
- Fontes reduzidas mas legíveis
- Elementos empilhados
- Botões com tamanho adequado para toque
- Sem problemas de zoom

⏱️ Tempo: 2 minutos
```

---

## ⌨️ Testes de Navegação por Teclado

### Teste 11: Tab através dos elementos
```
📋 PASSOS:
1. Recarregue página
2. Pressione Tab várias vezes
3. Observe o foco

✅ ESPERADO:
- Foco vai para dropdown
- Depois para input
- Depois para botão
- Ordem lógica

⏱️ Tempo: 30 segundos
```

### Teste 12: Enter para enviar
```
📋 PASSOS:
1. Selecione exame com Tab
2. Digite valor com Tab
3. Pressione Enter

✅ ESPERADO:
- Resultado é analisado
- Mesmo que clicar botão

⏱️ Tempo: 30 segundos
```

---

## 🔢 Testes de Validação de Input

### Teste 13: Valor Decimal
```
📋 PASSOS:
1. Exame: "TSH"
2. Valor: "2.5"
3. Clique: "Analisar"

✅ ESPERADO:
- Aceita número decimal
- Compara corretamente
- Resultado é NORMAL

⏱️ Tempo: 30 segundos
```

### Teste 14: Valor com Zero
```
📋 PASSOS:
1. Exame: "Glicose"
2. Valor: "0"
3. Clique: "Analisar"

✅ ESPERADO:
- Aceita valor
- Identifica como BAIXO
- Mensagem apropriada

⏱️ Tempo: 30 segundos
```

### Teste 15: Valor Muito Alto
```
📋 PASSOS:
1. Exame: "Glicose"
2. Valor: "1000"
3. Clique: "Analisar"

✅ ESPERADO:
- Aceita valor
- Identifica como ALTO
- Mensagem de aviso

⏱️ Tempo: 30 segundos
```

### Teste 16: Valor nos Limites
```
📋 PASSOS:
1. Exame: "Glicose"
2. Valor: "70" (mínimo exato)
3. Clique: "Analisar"

✅ ESPERADO:
- Resultado: NORMAL
- Valor está no limite

📋 PASSOS:
1. Exame: "Glicose"
2. Valor: "99" (máximo exato)
3. Clique: "Analisar"

✅ ESPERADO:
- Resultado: NORMAL
- Valor está no limite

⏱️ Tempo: 1 minuto
```

---

## 🎨 Testes de Apresentação Visual

### Teste 17: Cores
```
✅ VERIFICAR:
- Resultado NORMAL: Verde ✅
- Resultado ALTO: Laranja/Amarelo ⚠️
- Resultado BAIXO: Vermelho ⚠️
- Botões: Azul
- Fundo: Cinza claro

⏱️ Tempo: 30 segundos
```

### Teste 18: Gráfico Visual
```
✅ VERIFICAR:
- Barra cinza de fundo
- Barra colorida de preenchimento
- Marcador (▼) no valor
- Labels de min/max
- Posição correta do marcador

⏱️ CENÁRIOS:
1. Valor baixo (10%): Marcador à esquerda
2. Valor normal (50%): Marcador no meio
3. Valor alto (90%): Marcador à direita

⏱️ Tempo: 1 minuto
```

### Teste 19: Animações
```
✅ VERIFICAR:
- Página desliza para baixo (header)
- Resultado aparece suave
- Gráfico preenche gradualmente
- Transições suaves ao interagir

⏱️ Tempo: 30 segundos
```

---

## 📊 Testes de Conteúdo

### Teste 20: Aviso Médico
```
✅ VERIFICAR:
- Aviso aparece no rodapé
- Texto diz "educativo e informativo"
- Diz "não substitui" diagnóstico
- Bem destaque (cor, tamanho)

⏱️ Tempo: 30 segundos
```

### Teste 21: Mensagens Apropriadas
```
✅ VERIFICAR para cada resultado:

NORMAL:
- [ ] Mensagem positiva
- [ ] Sem alarmismo
- [ ] Recomenda profissional
- [ ] Tom tranquilizador

ALTO:
- [ ] Explica elevação
- [ ] Sem sarcasmo
- [ ] Recomenda médico
- [ ] Tom informativo

BAIXO:
- [ ] Explica redução
- [ ] Possíveis causas
- [ ] Recomenda médico
- [ ] Tom informativo

⏱️ Tempo: 1 minuto
```

### Teste 22: Informação do Exame
```
✅ VERIFICAR:
- Ao selecionar exame, informação aparece
- Descrição clara e educativa
- Compreensível para leigo
- Foco em educação

EXEMPLO (Glicose):
"A glicose é o açúcar no sangue, 
principal fonte de energia do corpo."

⏱️ Tempo: 30 segundos
```

---

## 🔍 Testes de Compatibilidade

### Teste 23: Chrome/Edge
```
📋 PASSOS:
1. Abra site no Chrome/Edge
2. Complete teste
3. Verifique tudo funciona

✅ ESPERADO:
- Sem erros no console
- Layout perfeito
- Gráfico desenha bem

⏱️ Tempo: 2 minutos
```

### Teste 24: Firefox
```
📋 PASSOS:
1. Abra site no Firefox
2. Complete teste
3. Verifique tudo funciona

✅ ESPERADO:
- Sem erros no console
- Layout perfeito
- Cores corretas

⏱️ Tempo: 2 minutos
```

### Teste 25: Safari
```
📋 PASSOS:
1. Abra site no Safari
2. Complete teste
3. Verifique tudo funciona

✅ ESPERADO:
- Sem erros
- Input campo não causa zoom excessivo
- Tudo funciona

⏱️ Tempo: 2 minutos
```

---

## 📋 Teste de Todos os Exames

```
TESTE CADA EXAME UMA VEZ COM VALOR NORMAL:

1. [ ] Hemoglobina - 14
2. [ ] Leucócitos - 7
3. [ ] Plaquetas - 250
4. [ ] Glicose - 85
5. [ ] Colesterol Total - 180
6. [ ] HDL - 50
7. [ ] LDL - 100
8. [ ] Triglicerídeos - 100
9. [ ] TSH - 2
10. [ ] Creatinina - 0.9
11. [ ] Ureia - 15

✅ ESPERADO:
- Todos retornam NORMAL
- Gráfico desenha
- Mensagem apropriada

⏱️ Tempo: 5 minutos
```

---

## 🆘 Testes de Tratamento de Erro

### Teste 26: Sem Exame Selecionado
```
📋 PASSOS:
1. Carregue página
2. Digite valor sem selecionar exame
3. Tente clicar botão

✅ ESPERADO:
- Botão permanece desabilitado
- Não há ação
- Nenhum erro

⏱️ Tempo: 30 segundos
```

### Teste 27: Sem Valor
```
📋 PASSOS:
1. Selecione exame
2. Deixe valor vazio
3. Tente clicar botão

✅ ESPERADO:
- Botão permanece desabilitado
- Não há ação
- Nenhum erro

⏱️ Tempo: 30 segundos
```

---

## 📋 Checklist Final

- [ ] Todos os 27 testes passaram
- [ ] Sem erros no console (F12)
- [ ] Funciona em desktop
- [ ] Funciona em tablet
- [ ] Funciona em smartphone
- [ ] Todos os 11 exames funcionam
- [ ] Gráfico desenha sempre
- [ ] Mensagens são apropriadas
- [ ] Aviso médico é claro
- [ ] Navegação por teclado funciona
- [ ] Sem problemas de performance

---

## 🎯 Resultado

Se passou em TODOS os testes:

✅ **PROJETO APROVADO PARA PRODUÇÃO**

---

**Tempo total de testes:** ~30 minutos

**Desenvolvido em: Março 2026**
