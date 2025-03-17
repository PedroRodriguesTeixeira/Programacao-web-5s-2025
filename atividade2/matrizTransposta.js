

function main(){

    let matriz = [

        [1,2],
        [3,4],
        [5,6]

    ]

    transporMatriz(matriz);
}

function transporMatriz(A){

    for(var i = 0; i<A[0].length; i++){
        let linha = ""
        for( var j = 0; j<A.length; j++){
            linha += A[j][i] + " | "
        }
        console.log(linha)
    }


}

main();