<<<<<<< HEAD

function main(){

    console.log(verificarNumeroPrimo(0)); //false
    console.log(verificarNumeroPrimo(1)); //false
    console.log(verificarNumeroPrimo(2)); //true
    console.log(verificarNumeroPrimo(3)); //true
    console.log(verificarNumeroPrimo(7)); //true
    console.log(verificarNumeroPrimo(83)); //true
    console.log(verificarNumeroPrimo(100)); //false
    console.log(verificarNumeroPrimo(991)); //true
    console.log(verificarNumeroPrimo(104729)); //true
    console.log(verificarNumeroPrimo(14348907)); //false

}

function verificarNumeroPrimo(n){

    var d = 0;

    if(n <= 1){
        return false
    } else if(n <= 3){
        return true
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
=======

function main(){

    console.log(verificarNumeroPrimo(0)); //false
    console.log(verificarNumeroPrimo(1)); //false
    console.log(verificarNumeroPrimo(2)); //true
    console.log(verificarNumeroPrimo(3)); //true
    console.log(verificarNumeroPrimo(7)); //true
    console.log(verificarNumeroPrimo(83)); //true
    console.log(verificarNumeroPrimo(100)); //false
    console.log(verificarNumeroPrimo(991)); //true
    console.log(verificarNumeroPrimo(104729)); //true
    console.log(verificarNumeroPrimo(14348907)); //false

}

function verificarNumeroPrimo(n){

    var d = 0;

    if(n <= 1){
        return false
    } else if(n <= 3){
        return true
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
>>>>>>> 9cfa0d5c3eef9a11e6fdb3bba46af0a041bf66eb
