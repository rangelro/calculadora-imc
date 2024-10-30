function calcular(){
    var peso = document.getElementById("peso").value;
    var altura =  document.getElementById("altura").value;

    var imc= peso/(altura*altura);

    var resultado = document.getElementById("resultado");

    resultado.innerHTML='<p> IMC: ' +imc + '</p>';
     
    if(imc < 18.5){
        resultado.innerHTML+="<p>abaixo do peso</p>";
    } 
    else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML+="<p>peso normal</p>"
    }else if(imc >= 25 && imc < 30){
        resultado.innerHTML+="<p>sobrepeso</p>"
    }else if(imc >= 30 && imc < 35){
        resultado.innerHTML+="<p>obesidade grau 1</p>"
    } else if(imc >= 35){
        resultado.innerHTML+="<p>obesidade grau 2</p>"
    }

    
}