function getIndexView(req,res){
    res.render('index.html');
}

function postAgendarConsulta(req,res){
    let form_invalido = false;
    let campos_invalidos = [];

    let dados_consulta = req.body;

    if (req.body.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if (req.body.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if (req.body.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }
    if (req.body.data_nascimento.length == 0){
        form_invalido = true;
        campos_invalidos.push("Data de nascimento")
    }
    if (req.body.telefone.length == 0){
        form_invalido = true;
        campos_invalidos.push("Telefone")
    }
    if (req.body.cep.length == 0){
        form_invalido = true;
        campos_invalidos.push("CEP")
    }
    if (req.body.endereco.length == 0){
        form_invalido = true;
        campos_invalidos.push("Endereço")
    }
    if (req.body.clinica.length == 0){
        form_invalido = true;
        campos_invalidos.push("Clínica")
    }
    if (req.body.especialidade.length == 0){
        form_invalido = true;
        campos_invalidos.push("Especialidade")
    }
    if (req.body.data_consulta.length == 0){
        form_invalido = true;
        campos_invalidos.push("Data da consulta")
    }
    if (req.body.hora_consulta.length == 0){
        form_invalido = true;
        campos_invalidos.push("Hora da consulta")
    }

    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
}

module.exports = {
    getIndexView,
    postAgendarConsulta
}