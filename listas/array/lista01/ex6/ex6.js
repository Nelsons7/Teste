var vetor = [];
 
function getRadomInt() {
    var min = Math.ceil(0);
    var max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
};

var par = 0;
var impar = 0;
for ( let i = 0; i < 100; i++){
    var aux = 0;
    aux = getRadomInt();


    if (aux % 2 == 0) {
       par = par + aux;
       
    }else
      impar = par+ aux;
  
    vetor.push(aux);
}

document.getElementById("resultado1").innerHTML ="soma dos pares: "+ par;
document.getElementById("resultado2").innerHTML  = "soma dos impares: " +impar;

document.getElementById("original").innerHTML = vetor;

