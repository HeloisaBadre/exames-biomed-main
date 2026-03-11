# 🚀 Guia de Instalação e Deployment

## Instalação Local

### Opção 1: Abrir Diretamente (Mais Simples)

1. **Localize o arquivo `index.html`**
   - Navegue até a pasta do projeto
   - Você verá todos os arquivos

2. **Abra `index.html` no navegador**
   - Clique duplo em `index.html`
   - Ou: Clique com direito > Abrir com > Seu navegador preferido
   - Ou: Arraste o arquivo para a janela do navegador

3. **Pronto!** ✅
   - O site está funcionando localmente
   - Tudo é processado no seu navegador
   - Sem necessidade de internet

### Opção 2: Servidor Local Python (Recomendado)

**Por quê?** Alguns navegadores têm restrições com arquivos locais.

#### Windows PowerShell:
```powershell
# Navegue até a pasta do projeto
cd "C:\Caminho\Para\exames-biomed-main"

# Python 3.x
python -m http.server 8000

# Ou Python 2.x
python -m SimpleHTTPServer 8000
```

Acesse: `http://localhost:8000`

#### macOS / Linux:
```bash
cd ~/Caminho/Para/exames-biomed-main

# Python 3.x
python3 -m http.server 8000

# Ou Python 2.x
python -m SimpleHTTPServer 8000
```

Acesse: `http://localhost:8000`

### Opção 3: Servidor Local Node.js

```bash
# Instale globalmente (uma única vez)
npm install -g http-server

# Na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

### Opção 4: Live Server (VS Code)

1. Abra a pasta do projeto no VS Code
2. Instale a extensão "Live Server" (Ritwick Dey)
3. Clique com direito em `index.html`
4. Selecione "Open with Live Server"

## Estrutura de Pastas Recomendada

```
exames-biomed-main/
├── index.html
├── style.css
├── script.js
├── dados_exames.js
├── README.md
├── DOCUMENTACAO_TECNICA.md
├── EXEMPLOS_EXAMES.js
├── TESTES.html
├── GUIA_INSTALACAO.md (este arquivo)
└── img/ (opcional)
    └── favicon.ico (opcional)
```

## Deployment em Produção

### Opção 1: GitHub Pages (Gratuito)

1. **Crie uma conta no GitHub**
   - https://github.com/signup

2. **Crie um novo repositório**
   - Nome: `exames-biomed` (ou outro nome)
   - Marque "Public"
   - Clique em "Create repository"

3. **Upload dos arquivos**

   **Via Git (recomendado):**
   ```bash
   cd C:\Caminho\Para\exames-biomed-main
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/exames-biomed.git
   git push -u origin main
   ```

   **Via GitHub Web:**
   - Upload files > Arraste os arquivos > Commit

4. **Ativar GitHub Pages**
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

5. **Seu site estará em:**
   ```
   https://seu-usuario.github.io/exames-biomed/
   ```

### Opção 2: Netlify (Muito Simples)

1. **Acesse:** https://netlify.com

2. **Clique em "Sign Up"**

3. **Conecte seu repositório GitHub**

4. **Configure:**
   - Build command: (deixe vazio)
   - Publish directory: . (ponto)

5. **Deploy**
   - Clique em "Deploy"
   - Seu site estará online em minutos

6. **Seu site estará em:**
   ```
   https://seu-site-aleatorio.netlify.app/
   ```

### Opção 3: Vercel (Alternativa Netlify)

1. **Acesse:** https://vercel.com

2. **Clique em "Sign Up"**

3. **Importe seu repositório GitHub**

4. **Configure:**
   - Framework: Other (Static Site)
   - Deploy

5. **Seu site estará em:**
   ```
   https://seu-projeto.vercel.app/
   ```

### Opção 4: Hospedagem Tradicional (Cpanel)

1. **Acesse seu painel de controle (Cpanel)**

2. **File Manager > public_html**

3. **Upload dos arquivos:**
   - Faça upload de todos os arquivos
   - Certifique-se de que `index.html` está no diretório raiz

4. **Seu site estará em:**
   ```
   https://seu-dominio.com/
   ```

### Opção 5: AWS S3 + CloudFront (Escalável)

```bash
# 1. Configure AWS CLI
aws configure

# 2. Crie um bucket S3
aws s3 mb s3://exames-biomed-seu-nome

# 3. Upload dos arquivos
aws s3 sync . s3://exames-biomed-seu-nome/ --delete

# 4. Habilite website hosting no S3
# (via console AWS)

# 5. Configure CloudFront para cache global
# (via console AWS)
```

## Verificação de Instalação

### Checklist Local

- [ ] `index.html` pode ser aberto no navegador
- [ ] Página carrega sem erros no console
- [ ] Dropdown de exames está preenchido
- [ ] Campo de valor fica habilitado ao selecionar exame
- [ ] Botão "Analisar" só funciona com ambos os campos preenchidos
- [ ] Resultado aparece após clicar em "Analisar"
- [ ] Gráfico é desenhado corretamente
- [ ] Botão "Testar outro" limpa o formulário

### Teste dos Testes

1. Abra `TESTES.html` no navegador
2. Você verá um relatório de validação
3. Todos os testes devem passar (exceto UI, que são manuais)

## Otimização para Produção

### 1. Minificação (Opcional)

```bash
# Instale uglify-js
npm install -g uglify-js

# Minifique o JS
uglifyjs script.js -c -m -o script.min.js
```

Depois atualize `index.html`:
```html
<script src="script.min.js"></script>
```

### 2. Minificação de CSS

```bash
# Instale cssnano
npm install -g cssnano
```

### 3. Compressão Gzip

Maioria dos servidores modernos já aplicam Gzip automaticamente.

### 4. Cache Busting

Adicione versão aos arquivos:
```html
<link rel="stylesheet" href="style.css?v=1.0.0">
<script src="script.js?v=1.0.0"></script>
```

## Domínio Personalizado

### Com GitHub Pages

1. **Compre um domínio** (Godaddy, Namecheap, etc)

2. **Configure DNS para GitHub:**
   - A Records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Ou CNAME: seu-usuario.github.io

3. **Configure no GitHub:**
   - Settings > Pages > Custom domain
   - Digite seu domínio
   - Save

### Com Netlify

1. **Compre um domínio**

2. **Configure no Netlify:**
   - Site settings > Domain management
   - Add custom domain
   - Siga as instruções de DNS

## Monitoramento

### Google Analytics (Opcional)

1. **Crie conta em:** https://analytics.google.com

2. **Adicione ao `index.html` (antes de `</body>`):**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

3. **Substitua `GA_MEASUREMENT_ID`** pelo seu ID

## Segurança

✅ **Boas práticas implementadas:**
- Sem requisições externas de dados
- Processamento 100% local
- Sem armazenamento de informações sensíveis

⚠️ **Considerações:**
- Aviso claro sobre fins educativos
- Não armazena dados de pacientes
- Recomenda consulta com profissional

## Backup

### Via Git

```bash
# Clone de backup
git clone https://github.com/seu-usuario/exames-biomed.git backup-exames

# Ou faça push para múltiplos remotes
git remote add backup https://github.com/seu-usuario/backup-exames.git
git push backup main
```

### Via Zip

1. Selecione todos os arquivos
2. Clique com direito > Enviar para > Pasta compactada
3. Guarde em local seguro

## Solução de Problemas

### Problema: "CORS error"

**Solução:** Use um servidor local em vez de abrir direto o arquivo.

### Problema: Console mostra erro 404

**Verificação:**
- Todos os arquivos estão na mesma pasta?
- Nomes dos arquivos estão corretos?
- Path nos imports está correto?

### Problema: Site não carrega no celular

**Verificação:**
- Seu servidor está acessível externamente?
- Firewall não está bloqueando?
- Tente com GitHub Pages ou Netlify

### Problema: Estilos não aplicam

**Solução:**
- Limpe cache: Ctrl+F5 ou Cmd+Shift+R
- Verifique se `style.css` está na mesma pasta

## Escalabilidade Futura

Se planejar adicionar:

### Backend
- **Node.js + Express**
- **Python Flask/Django**
- **PHP Laravel**

### Banco de Dados
- **Firebase** (fácil, sem servidor)
- **MongoDB** (documentos)
- **PostgreSQL** (relacional)

### Autenticação
- Firebase Auth
- JWT tokens
- OAuth2

## Manutenção

### Atualizações de Referências

Os valores de referência podem mudar. Atualizar em `dados_exames.js`:

```javascript
glicose: {
    minimo: 70,  // Atualize aqui se necessário
    maximo: 99,
    // ... resto dos dados
}
```

### Adicionar Novos Exames

Veja `EXEMPLOS_EXAMES.js` para como adicionar sem quebrar nada.

## Suporte e Comunidade

### Reporte de Problemas
1. Crie issue no GitHub
2. Descreva o problema
3. Inclua print do console

### Contribuições
1. Fork o repositório
2. Crie branch para sua feature
3. Faça Pull Request

## Recursos Úteis

- **MDN Web Docs:** https://developer.mozilla.org/
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **Lighthouse (Performance):** Chrome DevTools > Lighthouse

## Licença e Créditos

Este projeto é de código aberto para fins educacionais.

---

**Última atualização:** Março 2026
