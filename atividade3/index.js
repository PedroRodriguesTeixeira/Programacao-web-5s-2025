const calc = require('./calculadora'); 
const express = require('express');

const app = express();

app.get('/somar/:a/:b', (req,res)=>{
    res.send(`O valor de a + b é , ${calc.somar(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/subtrair/:a/:b', (req,res)=>{
    res.send(`O valor de a - b é , ${calc.subtrair(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/multiplicar/:a/:b', (req,res)=>{
    res.send(`O valor de a x b é , ${calc.multiplicar(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/divisao/:a/:b', (req,res)=>{
    res.send(`O valor de a / b é , ${calc.divisao(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' , PORT);
});