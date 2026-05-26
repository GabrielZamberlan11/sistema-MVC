require ('dotenv').config();

const express= require('express');
const cors= require('cors');
const PORT= process.env.PORT || 3001;
const pessoaRoutes= require('./src/routes/pessoasRoutes')
const produtosRoutes= require('./src/routes/produtosRoutes')

const server= express();
server.use(cors());
server.use(express.json());

server.use(materiasRoutes)
server.use(pessoaRoutes)
server.use(produtosRoutes)
server.use(alunosRoutes)

server.listen(PORT,()=>console.log(`O servidor esta rodando em: http://localhost:${PORT}`));