

function abrirModal(){
    //para ativar o modal, temos que por display "block" lembrando que tem que ser a div maior
    document.getElementById("modalAviso").style.display = "block";
    //criamos uma funcao para fechar o modal e aparecer oq texto que colocamos, no caso o "modalAviso"
    document.querySelector(".fechar").onclick = function() {
  document.getElementById("modalAviso").style.display = "none";
}



}