   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */



 document.querySelectorAll(".center-content p")[0].innerHTML = "bom dia meus amigos eu sou mauro e estou aqui para aprender DOM javascrito"

document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)"


function Branco() {
    let vermelho = document.getElementsByClassName('center-content')[0];
    vermelho.style.background = "yellow";
  }
  Branco();
  

  function titulo() {
    let title = document.getElementsByTagName('h1')[0];
    title.innerHTML = "Vamo que vamo";
  }
  titulo();


  function maiusculo() {
    let frase = document.getElementsByTagName('p')[0];
    frase.innerHTML = frase.innerHTML.toLocaleUpperCase();
  }
  maiusculo();

  function printar() {
    let frases = document.getElementsByTagName('p');
    for (let index = 0; index < frases.length; index += 1) {
      console.log(frases[index].innerHTML);
    }
  }
  printar();