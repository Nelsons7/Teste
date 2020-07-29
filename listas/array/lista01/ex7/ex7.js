var vetor = [];

function getRadomInt() {
    var min = Math.ceil(-10);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
};


for ( let i = 0; i < 10; i++){
    vetor.push(getRadomInt());
}

document.getElementById("resultado").innerHTML = vetor;