function insert(numero){
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero;
}

function limpar(){

    document.getElementById('resultado').innerHTML = "";

}

function del(){
    
    var result =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0,result.length -1);

}

function calcular(){
    var result =  document.getElementById('resultado').innerHTML;
    if(result){
        document.getElementById('resultado').innerHTML = eval(result);
    }else{
        document.getElementById('resultado').innerHTML = 'null';
    }

}