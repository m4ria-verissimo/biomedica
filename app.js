

function abrirModal(){
    //para ativar o modal, temos que por display "block" lembrando que tem que ser a div maior
    document.getElementById("modalAviso").style.display = "block";
    //criamos uma funcao para fechar o modal e aparecer oq texto que colocamos, no caso o "modalAviso"
    document.querySelector(".fechar").onclick = function() {
  document.getElementById("modalAviso").style.display = "none";
}
}

function contato(){
    //para ativar o modal, temos que por display "block" lembrando que tem que ser a div maior
    document.getElementById("modalContato").style.display="block";
    //com id que criamos para vc fechar o model, criamos a funcao para fechar o modal e aparecer oq texto que colocamos, no caso o
    // "modalContato" que no caso é a div maior
    document.getElementById("fecharcntt").onclick=function(){
    //exibe o fechar do modal e na funcao exibe o mmodal-conteudo
        document.getElementById("modalContato").style.display="none";
    }
}
