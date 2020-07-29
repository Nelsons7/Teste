var vetor = [];

function getRadomInt() {
    min = Math.ceil(0);
    max = Math.floor(101);
    var num = Math.floor(Math.random() * (max - min)) + min;
    while(num % 2 != 0){
        num = Math.floor(Math.random() * (max - min)) + min;
    }
    return num;
};


for ( let i = 0; i < 20; i++){
    vetor.push(getRadomInt());
}

document.getElementById("resultado").innerHTML = vetor;