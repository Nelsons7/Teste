let vet = [];

class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
        vet.push(key);
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    inserir(key) {
        if (this.root == null ) {
            this.root = new Node(key);
        } else {
            this.inserirNode(this.root, key);
        }
    }
    
    inserirNode(node, key) {
        if (parseInt(key, 10) < parseInt(node.key, 10)){
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.inserirNode(node.left, key);
            } 
        }
        if (parseInt(key, 10) > parseInt(node.key, 10)){
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.inserirNode(node.right, key)
            } 
        }
    }

    getRoot() {
        return this.root;
    }

    getClear() {
        this.root = null;
        
    }

    valorMax() {
        let current = this.root;
        let getKey;
        while(current.right != null){
            current = current.right
            getKey = current.key;
        }
        return getKey; 
    }

    valorMin() {
        let current = this.root;
        let getKey;
        while(current.left != null){
            current = current.left
            getKey = current.key;
        }
        return getKey;
    }
        
    search(key){
        let current = this.root;
        
        if (key == current.key){
            return true;
        }
       
        do{  
            
            if (key > current.key) {
                current = current.right
                
                if(current == null){
                    return false;
                }
                if (key == current.key){
                    return true;
                } else if (current.right == null && current.left == null || current.key == null) {
                    return false;
                }
            }
          
            if(key < current.key){
                current = current.left
                if(current == null){
                    return false;
                }
                if (current.key == key){
                    return true;
                } else if (current.right == null && current.left == null || current.key == null) {
                    return false;
                }
            }
            
        } while(current.right != null || current.left != null);
    }


    getNodeJson(node){
        let obj = new Object();
        obj.text = new Object();
        obj.text.name = node.key;

        obj.children = new Array();

        let nullLeaf = new Object();
        nullLeaf.text = new Object();
        nullLeaf.text.name = "null";

        if(node.left == null){
            obj.children.push(nullLeaf);
        } else {
            obj.children.push(this.getNodeJson(node.left));
        }

        if(node.right == null){
            obj.children.push(nullLeaf);
        } else {
            obj.children.push(this.getNodeJson(node.right));
        }

        return obj;
    }

    getTreeJson(){
        let obj = new Object();
        obj.chart = new Object();
        obj.chart.container = "#tree-simple";
 
        obj.nodeStructure = new Object();
        if(this.root != null){
            obj.nodeStructure = this.getNodeJson(this.root);
        } else {
            avisos.innerHTML = "<div class='alert alert-danger' role='alert'>Árvore está vazia!  </div>" ;
        }

        return obj;
    }

    print(){
        console.log(JSON.stringify(tree, null, 2));

        let simple_chart_config = this.getTreeJson();

        Treant(simple_chart_config);

        
    }
    // balancear(){
    //     let meio = Math.round(vet.length / 2);
    //     let valMeio = 0 ;

    //     let ladoEsq = [];
    //     let ladoDir = [];

    //     for (let i = 0; i < vet.length; i++ ){
            
    //         if(meio == i ){
    //             valMeio = vet[i -1];
    //         }
    //         if(ladoDir > valMeio){
    //             ladoDir.splice([ladoDir,ladoEsq]);
    //         }
            
    //     }
    //     this.getClear();
    //     this.inserir(valMeio);
    //     this.print();

        
        
    // }

}

const tree = new BinarySearchTree()
tree.inserir(13);
tree.inserir(15);
tree.inserir(25);
tree.inserir(11);
tree.inserir(8);
tree.inserir(16);
tree.inserir(22);
tree.inserir(26);
tree.inserir(2);
tree.inserir(1);
tree.inserir(14);
tree.print();