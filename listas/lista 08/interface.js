function btn_addElemento() {
    let inputElemento = document.getElementById("entrada").value;
    let avisos = document.getElementById("avisos");

    if(inputElemento == ""){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Elemento deve ser preenchido</div>";
    } else {
        lista.push(inputElemento); 
        avisos.innerHTML = ""; 
        document.getElementById("entrada").value = ""; 
    }

    lista.print();  
}
function btn_addPos(){
    var tamanho = lista.size();

    let inputElemento = document.getElementById("entrada").value;
    let posicao = document.getElementById("entrada").value;
    let avisos = document.getElementById("avisos");

    if(inputElemento == "" || posicao == ""){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! os Campos Elemento  e Posição devem ser preenchidos</div>";
    } else if(!isNaN(posicao) == false){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Posição deve ser numérico e inteiro</div>";
        document.getElementById("posicao").focus();
    } else if(posicao > tamanho){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Posição deve ser menor ou igual a "+ tamanho + "</div>";
        document.getElementById("entrada").focus();
    } else {
        lista.insertAt(inputElemento, posicao);
        avisos.innerHTML = ""; 
        document.getElementById("entrada").value = ""; 
        document.getElementById("posicao").value = ""; 
    }
    lista.print();
}
function btn_rmElement(){
    let inputElemento = document.getElementById("entrada").value;
    let avisos = document.getElementById("avisos");

    if(inputElemento == ""){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Remover deve ser preenchido</div>";
        document.getElementById("entrada").focus();
    } else {  
        removido = lista.removeElementValue(inputElemento);
        if( removido == true ){
            avisos.innerHTML = "<div class='alert alert-success' role='alert'>Elemento removido com sucesso!</div>";
            document.getElementById("entrada").value = "";
        } else {
            avisos.innerHTML = "<div class='alert alert-warning' role='alert'>Elemento Não existe</div>";
        }

        lista.print();
    }
}

function btn_rmPosition(){
    let position = document.getElementById("entrada").value;
    let avisos = document.getElementById("avisos");
    let tamanho = lista.size();

    tamanho = tamanho - 1;

    if(position == ""){
        document.getElementById("entrada").focus();
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Posição deve ser preenchido</div>";
    } else if(!isNaN(position) == false){
        document.getElementById("entrada").focus();
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Posição deve ser numérico e inteiro</div>";
    } else if(position > tamanho){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>ERRO! o Campo Posição deve ser menor ou igual a "  + tamanho + "</div>";
        document.getElementById("entrada").focus();
    } else {
        lista.removeAt(position);
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>Elemento removido com sucesso!</div>";
        document.getElementById("entrada").value = "";
        avisos.innerHTML = "";
    } 
    lista.print();
}


function btn_Empty(){
    let tamanho = lista.isEmpty();
    let avisos = document.getElementById("avisos");

    if(tamanho == true){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>A Lista ESTÁ Vazia!</div>";
    } else {
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>A Lista não está vazia</div>";
    }
}
function btn_First(){
    let tamanho = lista.size();
    let primeiro = lista.firstElement();
    let avisos = document.getElementById("avisos");

    if(tamanho < 1){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>A Lista ESTÁ Vazia!</div>";
    } else {
        avisos.innerHTML = "";
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>O primeiro elemento é " + primeiro + "</div>";
    }
}

function btn_Last(){
    let tamanho = lista.size();
    let ultimo = lista.lastElement();
    let avisos = document.getElementById("avisos");

    if(tamanho < 1){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>A Lista ESTÁ Vazia!</div>";
        
    } else {
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>O ultimo elemento é " + ultimo + "</div>";
    }
}

function btn_inverte(){
    let elemento1 = document.getElementById("inverter1").value;
    let elemento2 = document.getElementById("inverter2").value;
    let avisos = document.getElementById("avisos");
    
    if(elemento1 == "" || elemento2 == ""){
        document.getElementById("inverter1").focus();
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>Os Campos Inverter Elementos devem ser preenchidos!</div>";
    } else {
        let teste = lista.inverter(elemento1, elemento2); 
        avisos.innerHTML = "Os Valores " + elemento1 + " e " + elemento2 + " " + teste + " Existe";
        document.getElementById("inverter1").value = "";
        document.getElementById("inverter2").value = "";
    }
}


function btn_CheckIguals(){
    let repete = lista.naoRepete();
    let avisos = document.getElementById("avisos");

    if(lista.naoRepete()){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>Há Elementos repetidos na Lista!</div>";
    } else {
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>Não Há Elementos repetidos na Lista!</div>";
    }
}


function btn_Clear(){
    let avisos = document.getElementById("avisos");
    let tamanho = lista.size();

    if(tamanho < 1){
        avisos.innerHTML = "<div class='alert alert-warning' role='alert'>A Lista já esta Vazia</div>";
    } else {
        lista.clear();
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>A lista foi limpada!</div>";
        lista.print();
    }
}
function exibeFila(item){

    let node = document.createElement("div");   
    let texto = document.createTextNode(item);
    node.appendChild(texto);
    let listas = document.getElementById("mostraLista");
    listas.appendChild(node, listas.childNodes[0]);

}