class Node {
    constructor(element) {
        this.value = element;
        this.next = undefined;
    }
}

class Lista {
    constructor() {
        this.head = undefined;
        this.count = 0;
    }

    push(element) {
        const node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }

        this.count++;
    }

    getElementAt(position) {
        if (position >= 0 && position <= this.count) {
            let node = this.head;
            for (let i = 0; i < position && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insertAt(element, position) {
        if (position >= 0 && position <= this.count) {
            const node = new Node(element);
            if (position === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(position) {
        if (position >= 0 && position <= this.count) {
            const current = this.head;
            if (position === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this.head;

        for (let i = 0; this.count && current != null; i++) {
            if (current.value == element) {
                return i;
            } else {
                current = current.next;
            }
        }
        return -1;
    }

    naoRepete(){
        for(let i = 0; i < this.count; i++){
            
            for(let j = i + 1 ; j < this.count; j++){

                let val1 = this.getElementAt(i).value;
                let val2 = this.getElementAt(j).value;

                if( val1 == val2 ){
                   return true;
                }           
            }       
        }
        return false;
    }

    isEmpty() {
        if (this.count === 0) {
            return true;
        } else {
            return false;
        }
    }

    size(){
        return this.count;
    }

    print(){
        document.getElementById("mostraLista").innerHTML = "";
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++){
            let atual = current;
            exibeFila(atual.value, i);
            current = current.next;
        }

    }
    
    removeElementValue(element){
        if(this.naoRepete(element) == true){
            let posicao = this.indexOf(element);
            this.removeAt(posicao);
            return true;
        } else {
            return false;
        }
    }

    firstElement(){
        return this.head.value; 
    }

    lastElement(){
        let val;
        for(let i = 0; i < this.count; i++){
            val = this.getElementAt(i).value;  
        }
        return val;
    }

    clear(){
        this.head = undefined;
        this.count = 0;
    }
}

const lista = new Lista();

lista.push(25);
lista.push(30);
lista.push(40);
lista.push(50);
lista.print();