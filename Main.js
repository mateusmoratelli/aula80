
console.log('inicio...');

var listaNomes = [];
 
function enviarNome() {
    var novoNome = document.getElementById("nomes").value ;
    listaNomes.push(novoNome);
    document.getElementById("nomes1").innerHTML = listaNomes;
    document.getElementById("nomes").value = ""
}

function mostrar(){
    
    var listaUI = ""

    for(j=0; j<listaNomes.length; j++){
        listaUI = listaUI +  "<li>" + listaNomes[j] +"</li>"
    }

    
    document.getElementById("nomes2").innerHTML = listaUI
}

function organizar(){
    var listaOrganizada = listaNomes.sort();
    var listaUI = ""

    for(j=0; j<listaOrganizada.length; j++){
        listaUI = listaUI +  "<li>" + listaOrganizada[j] +"</li>"
    }
    document.getElementById("lisaOrganizar").innerHTML = listaUI;
}

function pesquisar(){
    var s= document.getElementById("pesquisar").value;
    var found=0;
    var j;
    for(j=0; j<listaNomes.length; j++){
        if(s==listaNomes[j]){
            found=found+1;
        }
    }
document.getElementById("h3Pesquisar").innerHTML="Nome encontrado " + found + " vez(es)";
console.log("Nome encontrado " + found + " vez(es)");
}