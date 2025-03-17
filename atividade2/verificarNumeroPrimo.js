
function main(){

    var numero = 14348907
    console.log(verificarNumeroPrimo(numero))

}

function verificarNumeroPrimo(n){

    var d = 0;

    if(n <= 1){
        return false
    } else if(n%2==0){
        return false
    } else if(n%3==0){
        return false
    }

    for(d = 2; d*d <= n; d++){
        if(n%d == 0){
            return false
        }
        return true
    }
    

}

main();