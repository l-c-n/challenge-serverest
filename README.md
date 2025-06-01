# 🚀 Cypress Serverest - Testes Automatizados

Projeto de automação E2E com [Cypress](https://www.cypress.io/) para validação do frontend e API REST da aplicação Serverest.

---

## 🌐 Aplicação Alvo

- **Frontend:** [https://front.serverest.dev](https://front.serverest.dev)
- **API Swagger:** [https://serverest.dev](https://serverest.dev)

---

## 🧪 Cenários de Teste Implementados

### ✅ Frontend (E2E)
- Cadastro de novo usuário administrador
- Login de usuário
- Cadastro de produto (com validações e upload de imagem)
- Consulta de lista de usuários

### ✅ API
- Criação de usuário via API
- Login e validação de token
- Cadastro de produto com autenticação via token

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## ▶️ Executar Testes

### UI Interativa (modo visual)
```bash
npm run cy:open
```

### Headless (modo terminal)
```bash
npm test
```

---

## 📷 Upload de Arquivos

Este projeto utiliza o plugin `cypress-file-upload` para testar campos do tipo `file`.  
Imagens usadas estão na pasta `cypress/fixtures`.

---



## 🧠 Requisitos

- Node.js (v16+ recomendado)
- NPM ou Yarn
- Google Chrome (ou Electron)

---

## 📁 Estrutura do Projeto

```
cypress-serverest/
├── cypress/
│   ├── e2e/                # Testes organizados por área
│   │   ├── frontend/
│   │   └── api/
│   ├── fixtures/           # Dados e arquivos usados nos testes (ex: imagens)
│   ├── support/            # Comandos customizados e configuração

├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências e scripts
```

---
