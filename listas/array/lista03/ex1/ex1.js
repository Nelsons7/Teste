class Pilha{

    constructor(){
        this.itens = [];
    }
    
    inserir(elemento){
        this.itens.push(elemento);
    }

    elementoBase(){
        for(let i = 0; i < this.itens.length; i++){
            var elemento = this.itens[i];
        }
        return elemento;
    }
  
}
var pilha = new Pilha();

for(let i = 1; i <= 10; i++){
    pilha.inserir(i);
}
console.log(pilha);
console.log("O primeiro elemento é: "+ pilha.elementoBase(4));
