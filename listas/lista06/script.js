class Fila{
    constructor(){
        this.items = []; 
        this.cont = 0; 
        this.menorCont = 0 
    }

    push(elemento){
        this.items[this.cont] = elemento;
        this.cont++;
    }

    pop(){

        if(this.isEmpty()){
            return undefined;
        }

        const result = this.items[this.menorCont];
        delete this.items[this.menorCont];
        this.menorCont++;
        return result;
    }

    isEmpty(){
        return this.cont - this.menorCont === 0;
    }

    size(){
        return this.cont - this.menorCont;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.menorCont];
    }

    lastElement(){
        return this.items[this.items.length - 1];
    }

    clear(){
        this.items = [];
        this.cont = 0; 
        this.menorCont = 0 
    }

    print(){
        document.getElementById("resposta").innerHTML = "";
        this.items.forEach(printFila);
    }
}

function printFila(item, index){

    let node = document.createElement("button");
    node.className = "btn btn-outline-success btn-block d-inline p-2";
    node.setAttribute("id", "botoesClicaveis");
    node.setAttribute("name", item);
    node.setAttribute("onclick", "removePrimeiro(this.name)");
    let text = document.createTextNode(item);
    node.appendChild(text);
    let list = document.getElementById("resposta");
    list.appendChild(node, list.childNodes[0]);
}

function addButton(){
    let valor = document.getElementById("entrada").value; 
    document.getElementById("entrada").autofocus;
    if(valor == "" || valor == null){
        document.getElementById("avisos").innerHTML = "<div class='alert alert-danger'>ERRO! Insira um valor.</div>";
    } else {
        fila.push(valor);
        fila.print();
        document.getElementById("entrada").value = "";
        document.getElementById("avisos").innerHTML = "<div class='alert alert-success'>Valor Adicionado a fila!</div>";
        document.getElementById("pop").disabled = false;
    }
}

let enter = document.addEventListener('keypress', function(e){
    if(e.which == 13){
       addButton();
    }
 }, false);

function removeButton(){
    if(fila.size() < 1){
        document.getElementById("pop").disabled = true;
        document.getElementById("avisos").innerHTML = "<div class='alert alert-danger'>Não há valores na fila para serem excluídos!<br> Botão Remover foi bloqueado</div>";
    } else {
        fila.pop();
        fila.print();
        document.getElementById("avisos").innerHTML = "<div class='alert alert-warning'>Removido com Sucesso!</div>";
    }
}

function primeiroValor() {
    if(fila.size() > 0){
        var prValor = fila.peek();
        document.getElementById("avisos").innerHTML = "<div class='alert alert-info'>O Primeiro elemento da Fila é " + prValor + "</div>";
    } else {
        document.getElementById("avisos").innerHTML = "<div class='alert alert-warning'>A Fila está vazia!</div>";
    }    
}

function tamanhoFila() {
    if(fila.size() > 0){
        var tamanho = fila.size();
        document.getElementById("avisos").innerHTML = "<div class='alert alert-info'>O tamanho da fila é " + tamanho + "</div>";
    } else {
        document.getElementById("avisos").innerHTML = "<div class='alert alert-warning'>A Fila está vazia!</div>";
    }    
}

function filaVazia() {
    if(fila.size() > 0){
        document.getElementById("avisos").innerHTML = "<div class='alert alert-danger'>A Fila NÃO ESTÁ VAZIA!</div>";
    } else {
        document.getElementById("avisos").innerHTML = "<div class='alert alert-warning'>A Fila ESTÁ VAZIA!</div>";
    }    
}

function ultimoElemento(){
    if(fila.size() > 0){
        var ultValor = fila.lastElement();
        document.getElementById("avisos").innerHTML = "<div class='alert alert-info'>O Ultimo elemento da Fila é " + ultValor + "</div>";
    } else {
        document.getElementById("avisos").innerHTML = "<div class='alert alert-danger'>A Fila ESTÁ VAZIA! <br> Não foi possivel reconhecer o ultimo valor!</div>";
    }
}

function limparFila(){

    if(fila.isEmpty() == true){
        document.getElementById("avisos").innerHTML = "<div class='alert alert-warning'>A Fila já está vazia!</div>";
    } else {
        document.getElementById("entrada").value = "";
        document.getElementById("avisos").innerHTML = "<div class='alert alert-success'>Fila Limpa</div>";
        fila.clear();
        fila.print();
    }
}

function removePrimeiro(nomeBotao){
    var priValor = fila.peek();
    if(priValor == nomeBotao){
        document.getElementById("entrada").innerHTML = "";
        fila.pop();
        fila.print();
        document.getElementById("avisos").innerHTML = "<div class='alert alert-success'>Elemento removido</div>";
        
    } else {
        document.getElementById("avisos").innerHTML = "<div class='alert alert-danger'>Este não é o primeiro elemento! Impossível Remove-lo!</div>";
    }
}

const fila = new Fila();

fila.push(10);
fila.push(20);
fila.push(30);

fila.print();
