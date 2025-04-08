const express = require('express'); //carrego pacote
const app = express(); //utiliza a função carregada
const estoque = require('./estoque') //carregando o arquivo estoque

app.get('/', (req,res)=>{
    let html = "<h1>Aplicativo de estoque</h1>";
    html += "<h3>Rotas disponíveis:</h3>";
    html += "<p>/adicionar/:id/:nome/:qtd</p>";
    html += "<p>/listar</p>";
    html += "<p>/remover/:id</p>";
    html += "<p>/editar/:id/:qtd</p>";
    res.send(html);
});

///adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req,res)=>{
    let item = {
        id: Number(req.params.id), //pegando a requisição
        nome: req.params.nome,
        qnt: Number(req.params.qtd)
    }; //item é do tipo objeto e estamos preenchendo com os valores da requisição
    res.send(estoque.adicionar(item));
})

//listar
app.get('/listar', (req,res)=>{
    res.send(estoque.listar());
})

///remover/:id
app.get('/remover/:id', (req, res)=>{
    let idItem = Number(req.params.id)

    res.send(estoque.remover(idItem))
})

///editar/:id/:qtd
app.get('/editar/:id/:qtd', (req, res)=>{
    let id = Number(req.params.id);
    let qtd = Number(req.params.qtd);

    res.send(estoque.editar(id,qtd));
})

const PORT = 1234;
app.listen(PORT, () => {
    console.log("O app está rodando na porta 1234")
}) //escutando requisições em certa porta

// ()=>{} função e toda função recebe uma requisição e uma resposta
//{} objeto

//res.send envia uma requisição para o usuário.