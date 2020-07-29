// Exercicio 00
var vet = [8, 12, 32, 41, 46, 100];

console.log("Vetor Normal = " + vet);

document.getElementById("original").innerHTML = "Vetor = " + vet;

function dobraArray(elemento){
    return elemento * 2;
}

var vet2 = vet.map(dobraArray);

console.log("Vetor dobrado = " + vet2);

document.getElementById("resultado").innerHTML = "Dobro do Vetor = " + vet2;


// Exercicio 01

var vet = [1, 2, 3, 4, 5];

console.log("Vetor Normal = " + vet);


document.getElementById("original1").innerHTML = "Vetor Normal = " + vet;

var vetS = [""];

function trasnformaString( elemento ){
    return vetS = elemento;
}

vetS = vet.map(trasnformaString);

console.log("Vetor String = " + vetS);

document.getElementById("resultado1").innerHTML = "Vetor String = " + vetS;

// Exercicio 02

var vet = []; // Veto normal
var vet2 = []; // Vetor vertical
function aleatorio() {
    return Math.floor(Math.random() * 101);
};

for(let i = 0; i < 10; i++){
    vet.push(aleatorio());
}; 

document.getElementById("original2").innerHTML = "Vetor = " + vet;

function imprimeColorido(elemento) {
    if(elemento % 2 == 0){
        vet2 = vet2 + "<span style='color: red'>" + elemento + "</span><br>";
    } else {
        vet2 = vet2 + "<span style='color: blue'>" + elemento + "</span><br>";
    }   
};

vet.forEach(imprimeColorido);
document.getElementById("resultado2").innerHTML = "Vetor vertical Colorido: <br>" + vet2;


// Exercicio 03

var vet = []; 
var vetPar = []; 
var vetImpar = []; 
function aleatorio() {
    return Math.floor(Math.random() * 101);
};

for(let i = 0; i < 20; i++){
    vet.push(aleatorio());
}; 

console.log(vet);
document.getElementById("original3").innerHTML = "Vetor = " + vet;


function pares(elemento){
    return elemento % 2 == 0;
}

vetPar = vet.filter(pares);
console.log(vetPar);
document.getElementById("resultado31").innerHTML =  "Par = " + vetPar;

function impares(elemento){
    return elemento % 2 != 0;
}

vetImpar = vet.filter(impares);
console.log(vetImpar);
document.getElementById("resultado32").innerHTML = "Impar = " + vetImpar;

// Exercicio 04


var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

document.getElementById("original4").innerHTML = "Todos os meses = " + meses;

var mesesMenor = [""];
var mesesMaior = [""];

function menorQue6(elemento){
    return elemento.length <= 6;
}

mesesMenor = meses.filter(menorQue6);
console.log(mesesMenor);
document.getElementById("resultado41").innerHTML = "Meses menor que 6 = " + mesesMenor;

function maiorQue6(elemento){
    return elemento.length > 6;
}

mesesMaior = meses.filter(maiorQue6);
console.log(mesesMaior);
document.getElementById("resultado42").innerHTML = "Meses maior que 6 = " + mesesMaior;

// Exercicio 05

var nomes = ["andre", "felipe", "maria", "daniel", "naiara"];
var sobrenomes = ["batista", "silva", "carolina", "pimentel", "silva"];
var nomeSobrenome = [""];

document.getElementById("original5").innerHTML = "Nomes = " + nomes;
document.getElementById("resultado51").innerHTML = "Sobrenomes = " + sobrenomes;

function juntaNome() {
    for(let i = 0; i < nomes.length; i++){
        nomes[i] = " " + nomes[i] + " " + sobrenomes[i];
    }
    return nomes;
 };
nomeSobrenome = juntaNome();
console.log(nomeSobrenome);
document.getElementById("resultado52").innerHTML = "Nome e Sobrenome = " + nomeSobrenome;

// Exercicio 06

var shiftLetters = function(string) {
    let vetTxt = string.split('');
    let Vet1 = vetTxt.map(x => String.fromCharCode(x.charCodeAt(0)+1));
    return Vet1.join('');
};

var texto = "abcd";
var resultado = shiftLetters(texto);

console.log(texto);
document.getElementById("original6").innerHTML = "Texto = " + texto;
console.log(resultado);
document.getElementById("resultado6").innerHTML = "Resultado = " + resultado;

// Exercicio 07


var texto;
var isPresent = function(string, alvo) {
    texto = string.split('');
    document.getElementById("original7").innerHTML = "String = " + texto;
    document.getElementById("resultado71").innerHTML = "Alvo = " + alvo;
    var pre = function(valor){
        return alvo == valor;
    }
    var result = texto.some(pre);
    return result;
}

var resultado = isPresent('abcd', 'd');

if(resultado == true){
    msg = "SIM";
} else{
    msg = "NÃO";
}

document.getElementById("resultado72").innerHTML = "O alvo contem na String: " + msg;


// Exercicio 08

var vet1 = [];
var vet2 = []; 
var vet3 = []; 
function aleatorio() {
    return Math.floor(1 + Math.random() * 51);
};

for(let i = 0; i < 10; i++){
    vet1.push(aleatorio());
    vet2.push(aleatorio());
}; 

console.log(vet1);
document.getElementById("original8").innerHTML = "Vetor 1 = " + vet1;

console.log(vet2);
document.getElementById("resultado81").innerHTML = "Vetor 2 = " + vet2;

vet3 = vet1.filter(value => -1 !== vet2.indexOf(value));
console.log(vet3);
document.getElementById("resultado82").innerHTML = "Vetor 3 = " + vet3;


// Exercicio 09

var cidades = ["Ituiutaba","Uberlândia","Goiânia,","Paris","Flórida","Novo México","São Paulo"];

var meses = ["Janeiro","Fevereiro","Março","Abril","Maio", "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

var anos = [];

for (let i = 1900; i < 2018; i++){ 
    anos.push(i)
}

var fenomenos = ["Chuva","Neve","Neblina","Vento","Granizo","Tempestade"];

var intensidades = ["pouco intensidade","muito forte","levemente forte", "pesada"];

function randAnos() {
    return Math.floor(Math.random() * 119);
};

function randCidades() {
    return Math.floor(Math.random() * 11);
};

function randMeses() {
    return Math.floor(Math.random() * 12);
};

function randFenomenos() {
    return Math.floor(Math.random() * 6);
};

function randItensidade() {
    return Math.floor(Math.random() * 3);
};

c = randCidades();
m = randMeses();
a = randAnos();
f = randFenomenos();
i = randItensidade();

var msg = (`Em ${meses[m]} de ${anos[a]} foi registrado na cidade de ${cidades[c]} uma ${fenomenos[f]} ${intensidades[i]}`);

console.log(msg);
document.getElementById("original9").innerHTML = "Mensagem = " + msg;


// Exercicio 10

var meses = ["Janeiro","Fevereiro","Março","Abril","Maio", "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var cores = ["red", "pink", "green", "brown", "purple", "white ", "black", "violet", "gray", "yellow ", "blue", "orange"]
var mesesColorido = [""];
for (let i = 0; i < 12; i++){
    mesesColorido = mesesColorido + "<span style='color: " + cores[i] +"'>" + meses[i] + "</span><br>"
}

document.getElementById("original10").innerHTML = mesesColorido;


