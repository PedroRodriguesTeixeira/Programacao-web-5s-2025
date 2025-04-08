    let nomes = []
    let qnts = []

function adicionarProduto(nome, qnt){
    nomes.push(nome)
    qnts.push(qnt)
}
function listar(){
    console.log(nomes)
    console.log(qnts)
}
function removerProduto(){
}
function editar(){}

module.exports = {
    adicionarProduto,
    listar,
    removerProduto,
    editar
}