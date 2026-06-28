# Kairos Personalizados

**Kairos Personalizados** é uma plataforma online que permite a criação e personalização de produtos como canecas, garrafas, copos e outros itens, utilizando artes próprias do usuário. O objetivo é oferecer uma experiência simples, intuitiva e criativa para transformar ideias em produtos reais.

---

## Sobre o projeto

O Kairos Personalizados foi desenvolvido para facilitar a personalização de produtos físicos de forma digital. O usuário pode enviar sua arte, ajustar posicionamento, visualizar prévias e criar produtos únicos de forma rápida.

A ideia central é conectar criatividade com personalização real de produtos.

---

## Funcionalidades

- Upload de imagens e artes personalizadas    
- Catálogo de produtos (canecas, garrafas, copos etc.)  
- Pré-visualização do produto final  
- Sistema de pedidos  
- Cadastro e login de usuários  

---

## Tecnologias utilizadas

- Frontend: React + Vite  
- Backend: Node.js / Express  
- Banco de dados: MySQL  
- Armazenamento de imagens: Cloudinary
- Autenticação: JWT  

---

## Estrutura.
```bash
└── Kairos/
    ├── src/
    │   ├── config
    │   ├── auth
    │   ├── controllers
    │   ├── migrations
    │   ├── model
    │   ├── routes
    │   ├── services
    │   └── util
    └──app.js
```
## Como funciona

1. O usuário acessa a plataforma  
2. Escolhe um produto (ex: caneca)  
3. Faz upload da sua arte ou imagem  
4. Finaliza o pedido  
5. O sistema salva os dados para produção  

---

## Instalação

```bash
git clone https://github.com/seu-usuario/kairos_personalizados.git

cd kairos_personalizados

npm install

npm run dev
