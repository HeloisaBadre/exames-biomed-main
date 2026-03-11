# ⚡ QUICK START - Inicie em 30 segundos!

## 🏃 Passo 1: Abra o Site (10 segundos)

### Windows 🪟
```
1. Localize a pasta: exames-biomed-main
2. Procure por "index.html"
3. Clique duplo para abrir
✅ Pronto! Site abre no navegador
```

### macOS 🍎
```
1. Localize a pasta: exames-biomed-main
2. Clique duplo em "index.html"
✅ Pronto! Safari abre automaticamente
```

### Linux 🐧
```bash
# Na pasta do projeto:
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

---

## 🧪 Passo 2: Teste Rápido (20 segundos)

### Cenário 1: Valor NORMAL ✅

```
1. Selecione: "Glicose"
2. Digite: 85
3. Clique: "Analisar resultado"

Resultado esperado:
✅ "Resultado: NORMAL ✅"
✅ Gráfico mostra posição no intervalo
✅ Mensagem: "...dentro do intervalo normal"
```

### Cenário 2: Valor ALTO ⚠️

```
1. Clique: "Testar outro exame"
2. Selecione: "Colesterol Total"
3. Digite: 250
4. Clique: "Analisar resultado"

Resultado esperado:
⚠️ "Resultado: ALTO ⚠️"
⚠️ Gráfico mostra acima do intervalo
⚠️ Mensagem com aviso de consulta
```

### Cenário 3: Valor BAIXO ⚠️

```
1. Clique: "Testar outro exame"
2. Selecione: "Hemoglobina"
3. Digite: 10
4. Clique: "Analisar resultado"

Resultado esperado:
⚠️ "Resultado: BAIXO ⚠️"
⚠️ Gráfico mostra abaixo do intervalo
⚠️ Mensagem com informação
```

---

## 📱 Teste em Móvel (Opcional)

```
1. Abra site no celular
2. Digite um valor
3. Verifique se layout se adapta
4. Tudo deve funcionar perfeitamente
```

---

## 📊 Exames Disponíveis para Testar

### Clique para copiar valor e testar:

| Exame | Valor Teste Normal | Valor Teste Baixo | Valor Teste Alto |
|-------|-------------------|-------------------|-----------------|
| **Glicose** | `85` | `50` | `150` |
| **Hemoglobina** | `14` | `10` | `18` |
| **Leucócitos** | `7` | `3` | `15` |
| **Plaquetas** | `250` | `100` | `500` |
| **Colesterol Total** | `180` | `100` | `250` |
| **HDL** | `50` | `30` | `100` |
| **LDL** | `100` | `50` | `180` |
| **Triglicerídeos** | `100` | `50` | `200` |
| **TSH** | `2` | `0.2` | `6` |
| **Creatinina** | `0.9` | `0.5` | `1.5` |
| **Ureia** | `15` | `5` | `30` |

---

## ✅ Verificação Rápida

Quando abrir o site, você deve ver:

```
☑️ Título: "🔬 Interpretador de Exames Laboratoriais"
☑️ Campo de seleção de exame preenchido
☑️ Campo de entrada de valor (desabilitado até selecionar)
☑️ Botão "Analisar resultado" (desabilitado até preencher)
☑️ Rodapé com aviso médico
```

---

## 🐛 Se algo não funcionar

### Problema: Página em branco
```
❌ Solução: Certifique-se que todos os arquivos 
   estão na mesma pasta
```

### Problema: Botão não funciona
```
❌ Solução: Digite um valor numérico e selecione 
   um exame, depois clique
```

### Problema: Estilos estranhos
```
❌ Solução: Limpe cache: Ctrl+F5 (Windows) 
   ou Cmd+Shift+R (Mac)
```

### Problema: Gráfico não aparece
```
❌ Solução: Abra console F12, verifique se há erros
   Recarregue a página
```

---

## 🚀 Próximos Passos

### ✅ Tudo funcionando?

1. **Compartilhe com amigos**
   - Envie o link ou pasta
   - Peça feedback

2. **Faça deploy online (grátis)**
   - GitHub Pages: Veja `GUIA_INSTALACAO.md`
   - Netlify: Arraste e solte a pasta
   - Vercel: Clique e pronto

3. **Customize**
   - Adicione novos exames (veja `EXEMPLOS_EXAMES.js`)
   - Mude cores em `style.css`
   - Altere mensagens em `dados_exames.js`

4. **Leia documentação**
   - `README.md` - Guia de usuário
   - `DOCUMENTACAO_TECNICA.md` - Para desenvolvedores
   - `GUIA_INSTALACAO.md` - Para deploy

---

## 💡 Dicas Úteis

### Adicionar novo exame em 2 minutos:

**Abra `dados_exames.js` e adicione:**

```javascript
const exames = {
  // ... exames existentes ...
  
  meu_novo_exame: {
    nome: "Nome do Exame",
    unidade: "mg/dL",
    minimo: 0,
    maximo: 100,
    descricao: "Descrição breve",
    mensagemBaixo: "Está baixo",
    mensagemAlto: "Está alto",
    mensagemNormal: "Está normal"
  }
};
```

**Salve e recarregue** - Novo exame aparecerá no dropdown!

---

## 🎯 Checklist de Inicio

- [ ] Abri o site no navegador
- [ ] Consegui selecionar um exame
- [ ] Consegui digitar um valor
- [ ] Cliquei "Analisar resultado"
- [ ] Vi o resultado aparecer
- [ ] Vi o gráfico
- [ ] Vi a mensagem
- [ ] Testei "Testar outro exame"
- [ ] Verifiquei em móvel (opcional)
- [ ] Li o aviso médico no rodapé

**Se marcar tudo:** ✅ Projeto funciona perfeitamente!

---

## 📚 Documentação Rápida

| Arquivo | O que é | Por quê ler |
|---------|---------|-----------|
| `index.html` | Página principal | Para entender estrutura |
| `style.css` | Estilos | Para mudar cores/layout |
| `script.js` | Lógica | Para entender funcionamento |
| `dados_exames.js` | Exames | Para adicionar/editar exames |
| `README.md` | Guia de uso | Para entender funcionalidades |
| `DOCUMENTACAO_TECNICA.md` | Detalhes técnicos | Para modificar código |
| `GUIA_INSTALACAO.md` | Instalação/Deploy | Para colocar online |
| `EXEMPLOS_EXAMES.js` | Exemplos | Para adicionar mais exames |
| `TESTES.html` | Testes | Para validar funcionalidade |

---

## 🎓 Aprenda Enquanto Usa

### HTML5
- Abra `index.html` e veja a estrutura semântica

### CSS3
- Abra `style.css` e veja design responsivo

### JavaScript
- Abra `script.js` e veja como funciona

### Manipulação de DOM
- Veja como `script.js` atualiza a página

---

## 🌐 Compartilhe Online em 1 minuto

### GitHub Pages

```bash
# Na pasta do projeto:
git init
git add .
git commit -m "Site de exames"
git branch -M main
git remote add origin https://github.com/SEUUSER/exames.git
git push -u origin main
```

Seu site estará em: `https://SEUUSER.github.io/exames`

### Netlify (Mais fácil)

1. Acesse: https://netlify.com
2. Clique "Sign Up"
3. Arraste a pasta do projeto
4. Pronto! Site está online em segundos

---

## 🆘 Help Rápido

### "Onde estão os arquivos?"
```
Você deve ter uma pasta chamada:
exames-biomed-main/

Com esses arquivos:
├── index.html
├── style.css
├── script.js
├── dados_exames.js
└── (outros arquivos.md)
```

### "Como editar exames?"
```
Abra dados_exames.js com:
- Notepad (Windows)
- TextEdit (Mac)
- Seu editor favorito
```

### "Como mudar cores?"
```
Abra style.css e procure por:
--cor-primaria: #1e88e5
--cor-sucesso: #4caf50
etc...

Mude os valores (cores em hex)
```

### "Como adicionar exame?"
```
1. Abra dados_exames.js
2. Copie uma estrutura de exame existente
3. Cole antes da última chave fechada
4. Atualize os valores
5. Salve e recarregue a página
```

---

## ⭐ Funcionalidades Principais

```
✨ Seleciona exame
✨ Digita valor
✨ Compara com referência
✨ Mostra resultado (baixo/normal/alto)
✨ Desenha gráfico
✨ Exibe mensagem
✨ Funciona offline (sem internet!)
✨ Funciona em qualquer navegador
✨ Funciona em celular
✨ Sem dependências externas
```

---

## 🎉 Você está pronto!

Agora é só:

1. **Abrir** `index.html`
2. **Testar** com alguns valores
3. **Compartilhar** com o mundo
4. **Customizar** conforme necessário

**Divirta-se! 🚀**

---

*Para mais detalhes, leia os arquivos .md (documentação)*

**Criado em: Março 2026**
