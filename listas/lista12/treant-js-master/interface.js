function btnAdd(){
    if(document.getElementById("entrada").value != ""){
        let x = document.getElementById("entrada").value;
        document.getElementById("entrada").value = "";
        avisos.innerHTML = "<div class='alert alert-success' role='alert'>Valor adicionado:" + x +"  </div>" ;
        tree.inserir(x);
        tree.print();
    }else {
        avisos.innerHTML = "<div class='alert alert-danger' role='alert'>Por favor preencha os campos! </div>" ;
    }
    document.getElementById("entrada").focus();
}

function btnClear() {
    tree.getClear();
    tree.print();
}

function btnMin() {
    let min = tree.valorMin();
    avisos.innerHTML = "<div class='alert alert-warning' role='alert'>Menor valor: " + min +" </div>" ;
    
}

function btnMax() {
    let max = tree.valorMax();
    avisos.innerHTML = "<div class='alert alert-info' role='alert'>Maior valor: " + max +" </div>" ;
}

function btnSearch() {
    if(document.getElementById("entrada").value != ""){
        let value = document.getElementById("entrada").value;
        let search = tree.search(value);
        if(search == true){
            avisos.innerHTML = "<div class='alert alert-success' role='alert'>Valor Encontrado</div>" ;
        } else {
            avisos.innerHTML = "<div class='alert alert-danger' role='alert'>Valor Não Encontrado</div>" ;
        }
    }

}
function btnBalancear(){
    tree.balancear();
}