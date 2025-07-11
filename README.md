
# 🧠 Let Me Ask - Full Stack App

[🇧🇷 Leia em Português](#-projeto-em-português) | [🇺🇸 Read in English](#-project-in-english)

---

## 📌 Projeto em Português

Este projeto é uma base completa de uma aplicação **Full-Stack**, inspirada no projeto **Let Me Ask**, desenvolvido em edições anteriores da NLW.

A proposta deste projeto foi construir do zero uma aplicação moderna, robusta e escalável, utilizando tecnologias atuais e boas práticas de desenvolvimento tanto no front-end quanto no back-end.

---

### 🚀 Tecnologias Utilizadas

#### 🖥️ Front-end
- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Query

#### 🌐 Back-end
- Node.js
- Fastify
- Zod (validação de dados)
- Biome (lint, formatter e types)

#### 🗄️ Banco de Dados
- PostgreSQL
- Docker

---

### 📦 Funcionalidades

- API REST estruturada com Fastify
- Validações robustas com Zod
- Consumo de dados com React Query
- Navegação com React Router DOM
- Interface moderna com Tailwind CSS + shadcn/ui
- Integração com banco de dados PostgreSQL via Docker
- Código limpo e padronizado com Biome

---

### 🛠️ Como Rodar o Projeto

#### Pré-requisitos

- Node.js v18+
- Docker
- Yarn ou npm

#### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/erikaperciliano/agents.git 
cd agents

# 2. Suba o banco de dados
docker-compose up -d

# 3. Instale as dependências
cd server && yarn install
cd ../web && yarn install

# 4. Configure o .env nas pastas server e web

# 5. Inicie os servidores
cd server && yarn dev
cd ../web && yarn dev
```

---

## 📘 Project in English

This project is a complete **Full-Stack** application base, inspired by the **Let Me Ask** project developed during previous NLW editions.

The goal of this project was to build from scratch a modern, robust, and scalable application using up-to-date technologies and best development practices for both the front-end and back-end.

---

### 🚀 Technologies Used

#### 🖥️ Front-end
- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Query

#### 🌐 Back-end
- Node.js
- Fastify
- Zod (data validation)
- Biome (lint, formatter, and types)

#### 🗄️ Database
- PostgreSQL
- Docker

---

### 📦 Features

- REST API structured with Fastify
- Strong validation using Zod
- Data fetching with React Query
- Navigation handled with React Router DOM
- Modern interface with Tailwind CSS + shadcn/ui
- PostgreSQL integration via Docker
- Clean, standardized code with Biome

---

### 🛠️ How to Run the Project

#### Prerequisites

- Node.js v18+
- Docker
- Yarn or npm

#### Steps

```bash
# 1. Clone the repository
git clone https://github.com/erikaperciliano/agents.git
cd agents

# 2. Start the database
docker-compose up -d

# 3. Install dependencies
cd server && yarn install
cd ../web && yarn install

# 4. Configure the .env files in both server and web folders

# 5. Start the servers
cd server && yarn dev
cd ../web && yarn dev
```

---

## 🤝 Contribuição | Contribution

Contribuições são bem-vindas!  
Feel free to open issues, suggestions, or pull requests.

---

## 🧑‍💻 Licença | License

Este projeto está sob a licença MIT.  
This project is licensed under the MIT License.  
Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.  
See the [LICENSE](./LICENSE) file for more details.
