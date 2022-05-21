function insert(num){
    let numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num
}

function limpar(){
    document.getElementById('display').innerHTML = ""
}

function calc(){
    let numeros = document.getElementById('display').innerHTML;
    if(numeros){
        document.getElementById('display').innerHTML = eval(numeros)
    }else{
        document.getElementById('display').innerHTML = "null"
    }
}