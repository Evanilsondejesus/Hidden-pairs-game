
var colecao = [
    {
    img: "imagens/android.png",
    name: "android"
    
    },
    {
    img: "imagens/chrome.png",
    name: "chrome"
    },
    {
    img: "imagens/git.png",
    name: "git"
    },
    {
    img: "imagens/linux.png",
    name: "git"
    
    },
    
    
    
    {
    img: "imagens/stackoverflow.png",
    name: "stackoverflow"
    
    },
    
    
    {
    img: "imagens/github.png",
    name: "github"
    
    },
    //
    
    {
    img: "imagens/android.png",
    name: "android"
    
    },
    {
    img: "imagens/chrome.png",
    name: "chrome"
    },
    {
    img: "imagens/git.png",
    name: "git"
    },
    {
    img: "imagens/linux.png",
    name: "git"
    
    },
    
    
    
    {
    img: "imagens/stackoverflow.png",
    name: "stackoverflow"
    
    },
    
    
    {
    img: "imagens/github.png",
    name: "github"
    
    },
    
    
    
    
    
    
    
    
    
    
    
    
      ];
      colecao.sort(() => 0.5 - Math.random())
    
    var teste = [];
    var combinados = [];
    
    
    const cartas = document.getElementsByClassName('conteiner')[0];
     
    
    
     
    
    
      for (let n = 0; n < colecao.length; n++) {
      
    
    
      var elementos = document.createElement("div")
      //elementos.innerHTML = colecao[n].animal;
      elementos.setAttribute('data-id', n)
      elementos.setAttribute('name', colecao[n].name)
    
    
    
      elementos.classList.add("cartas");
      
      
      elementos.addEventListener('click', novo)
      cartas.appendChild(elementos)
      
    
    
      }
      
      
      
        
      
    function novo() {
    var comb = this.getAttribute('data-id');
     var ss = this;
    this.style.backgroundImage = `url(${colecao[comb].img})`;
     
    teste.push(comb)
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (teste.length == 2) {
       
    
    
    
    
    
    
    
    
    
    
    
    
    var n1 = document.querySelectorAll(".cartas")[teste[0]]
    var yu = window.getComputedStyle(n1).backgroundImage;
    
    
    
    var n2 = document.querySelectorAll(".cartas")[teste[1]]
    var yu2 = window.getComputedStyle(n2).backgroundImage;
    
     
    
    //teste = []
    
    // var n2 = teste[1]
    
    
    
    if(teste[0] == teste[1]){
    n1.style.backgroundImage = 'url(imagens/board.png)'
      n2.style.backgroundImage = 'url(imagens/board.png)'
       
      teste = []
      console.log('mesma imagem')
      }else{
    
    
    
        setTimeout(() => { combinadar(yu2, yu,n1,n2)}, 500);
    
    
    
    
      }
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
     
    
    
    
      
    }
       
    
    
    
    function combinadar(yu2, yu, n1, n2) {
    
    
    
    
    
      if (yu2 == yu) {
      
      console.log("sim"+ teste[1] + teste[0])  
      
      teste = []
      
      
      } else{
      
      // n1.style.backgroundImage = `url(${colecao[comb].img})`;
      n1.style.backgroundImage = 'url(imagens/board.png)'
      n2.style.backgroundImage = 'url(imagens/board.png)'
      
     console.log("não")
     
     teste = []
      
     }
     
     
    
    
    
    
    
    
    
    
      
    }
    
    
    
    
    
    
    
    
    
    
    
    
    