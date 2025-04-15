const express = require("express");
const mustacheExpress = require('mustache-express');
const app = express();

const PORT = 1234

app.engine('html', mustacheExpress()) //declaracao do renderizador dos arquivos html.
app.set('view engine', 'html') //motor sendo configurado para renderizador
app.set('views', __dirname + '/views')

app.get('/ola/:nome', (req,res)=>{
    let nome = req.params.nome;
    res.render('index.html',{nome}); //render renderiza um arquivo hmtl
});

app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT);
});