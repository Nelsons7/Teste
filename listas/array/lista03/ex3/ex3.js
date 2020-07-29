class Pilha{

    constructor(){
        this.itens = [];
    }
    inserir(elemento){
        this.itens.push(elemento);
    }
    inserirNum(elemento){
        this.itens = [1, 3, 5, 6, 7, 10];
    }
    inserirString(elemento){
        this.itens = ["andre", "carol", "willian", "filipe", "jheymison"];
    }
    inserirTodos(elemento){
        this.itens = [1, "segunda", 5, "janeiro", 7, "verde"];
    }
    tiposElementos(){

        typeof texto == "string";
        typeof " " === 'string';
        typeof 1 === 'number';
        // typeof {a:1} === 'object';

        if(this.itens == texto){
            console.log("number");
        }else {
            console.log("String");
        }
    }


}
var pilha = new Pilha();
pilha.inserir(1);
pilha.inserir(3);
pilha.inserir(5);
pilha.inserir(6);
pilha.inserir(10);
console.log(pilha);

// var pilha2 = new Pilha();
// pilha2.inserirString();
// console.log(pilha2);

// var pilha3 = new Pilha();
// pilha3.inserirTodos();
// console.log(pilha3);

pilha.tiposElementos();


