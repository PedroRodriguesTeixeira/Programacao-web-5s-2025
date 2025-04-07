function main(){

    let matriz = [

        [1,2],
        [3,4],
        [5,6]

    ]

    
    for(let i = 0; i< matriz.length; i++){
        let linha1 = ""
        for(let j = 0; j < matriz[0].length; j++){
            linha1 += matriz[i][j] + " | "
        }
        
        console.log(linha1)

    }

    console.log()

    transporMatriz(matriz);
}

function transporMatriz(A){

    for(var i = 0; i<A[0].length; i++){
        let linha2 = ""
        for( var j = 0; j<A.length; j++){
            linha2 += A[j][i] + " | "
        }
        console.log(linha2)
    }


}

main();
