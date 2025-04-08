let itens = [];

function adicionar(item) {
    let itemValido = true;

    if (
        !isNumerico(item.id) ||
        isIdCadastrado(item.id) ||
        item.id <= 0 ||
        isNumerico(item.qtd) ||
        item.qtd < 0 ||
        item.nome.lenght <= 0

    ) {
        itemValido = false;
    }

    if (itemValido) {
        itens.push(item);
        return true;
    }

}

function listar() {
    return itens;
}
function remover(idItem) {
    let isDeleted = false;

    for (let chave = itens.length - 1; chave >= 0; chave--) {
        if (itens[chave].id == idItem) {
            itens.splice(chave, 1);
            isDeleted = true;
            break; 
        }
    }

    return isDeleted;
}
function editar(id, qtd) {
    let itemValido = true;

    if (
        !isIdCadastrado(id) ||
        !isNumerico(id) ||
        !isNumerico(qnt)

    ) {

        itemValido = false;
    }
    if (item_valido) {
        itens.forEach(item_cadastrado => {
            if (item_cadastrado.id == id) {
                item_cadastrado.qtd = qtd;
            }
        });
    }


    return itemValido;
}

function isIdCadastrado(id) {

    let id_cadastrado = false;

    itens.forEach(item_cadastrado => {
        if (item_cadastrado.id == id) {
            id_cadastrado = true;
        }
    });

    return id_cadastrado;
}

function isNumerico(n) {
    if (isNaN(n) || n == null) {
        return false;
    }
    return true;
}

module.exports = {
    adicionar,
    listar,
    editar,
    remover,
    isNumerico,
    isIdCadastrado
}

//Não precisa exportar o array de itens. Ele não deve ser acessado diretamente.
//Deve ser utilizado as funções.