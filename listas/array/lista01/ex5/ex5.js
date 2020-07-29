
var DiasDaSemana = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];

var alteraLetra =  function(){
    for (let i = 0; i < DiasDaSemana.length; i++){
        DiasDaSemana[i] = DiasDaSemana[i].charAt(0).toUpperCase() + DiasDaSemana[i].substring(1);
    }
    return DiasDaSemana;
};

DiasDaSemana = alteraLetra();

document.getElementById("resultado").innerHTML = DiasDaSemana;

for (let i = 0 ; i <DiasDaSemana.length;i++ ){
    DiasDaSemana[i] = DiasDaSemana[i].toUpperCase();
}

document.getElementById("original").innerHTML = DiasDaSemana;



// substring pega a partir da posição setada exemplo: 
// substring(1) pega da posicao do array 1 
// charAt() pega sempre uma posição ex: 
// charAt(0) pega a primeira posição do array



