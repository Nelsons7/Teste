
class Pilha{
    constructor(){
        this.items = [];
    }
    push(element){
        if(this.items.length == 0){
            this.items.push(element);
        } else {
            if(typeof(element) == typeof(this.items[0])){
                this.items.push(element);
            } else {
                teste = true;
            }
        } 
    }
    pop(){
        this.items.pop();
    }
    isEmpty(){
        if (this.items.length === 0 ){
            return true;
        }
        return false;
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }
    print(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = pilha.items;
        //limpa a impressão da pilha
        document.getElementById("resposta").innerHTML = "";
        //imprime a pilha
        this.items.forEach(printPilha);
        
    }
}//fim classe Pilha

function printPilha(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
    let node = document.createElement("div");//1
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    //document.getElementById("resposta").appendChild(node);//4
    let list = document.getElementById("resposta");//4
    list.insertBefore(node, list.childNodes[0]);//4

}

function addButton(){
    //1) pega o valor que está na caixa de texto
    //1.1) verificar se a caixa de texto não está vazia
    //2) add esse valor na pilha
    //3) imprime a pilha
    //4) limpar a caixa de texto
    //5) retorna o focus para a caixa de texto
    //6) faz o enter acionar a função add
    //
    
    let valor = document.getElementById("entrada").value; //1
    document.getElementById("entrada").autofocus;
    let val = Number(valor);
    
    if ( document.getElementById("entrada").value == "") { 
        alert("Por favor, preencha os campos corretamente."); return; 
    }else {
        if(isNaN(val)){
            pilha.push(valor);//String
            document.getElementById("entrada").value = "";//4
            pilha.print();//3
            document.getElementById("avisos").innerHTML = "Valor Adicionado a Pilha!";

        } else {
            document.getElementById("entrada").value = "";//4
            pilha.push(val);//numero
            pilha.print();//3
            document.getElementById("avisos").innerHTML = "Valor Adicionado a Pilha";
            
        }

        if(teste == true){
            document.getElementById("avisos").innerHTML = "Atenção: Tipo Diferente! Para inserir um novo tipo primeiro limpe a Pilha";
            teste = false;
        }
        pilha.print();
        document.getElementById("entrada").value = "";//4
        
    }
    
}
let enter = document.addEventListener('keypress', function(e){
    if(e.which == 13){
       addButton();
    }
 }, false);

function removeButton(){
    //1) remover o último elemento da pilha
    //2) imprime a pilha
    //3) se a pilha já estiver vazia, exibe um aviso
    if(pilha.isEmpty() == true){
        alert("Impossível remover!!"); return;
    }
    pilha.pop();//1
    pilha.print();//2
    
}

const pilha = new Pilha();

// pilha.push(13);
// pilha.push(52);
// pilha.push(74);
pilha.print();