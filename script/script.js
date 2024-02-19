function Init() {
const level = document.getElementById("level")
const point = document.getElementById("point")
let elapsedCards=0;
const board =document.getElementById("board");
board.innerHTML ="";

 


var card_collection = [
    {
    img: "imagens/android.png",
    name: "android"
    
    },
    
    {
      img: "imagens/android.png",
      name: "android"
      
      },



    {
    img: "imagens/chrome.png",
    name: "chrome"
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
      img: "imagens/git.png",
      name: "git"
      },



    {
    img: "imagens/linux.png",
    name: "linux"
    
    },
    
    
    {
      img: "imagens/linux.png",
      name: "linux"
      
      },
      




    
    {
    img: "imagens/stackoverflow.png",
    name: "stackoverflow"
    
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
    img: "imagens/github.png",
    name: "github"
    
    },
    
    
];

  //Card Collection
card_collection.sort(() => 0.5 - Math.random())
var current_letter= [];
 //iniciar baralhando as cartas
    
for (let n = 0; n < card_collection.length; n++) {
  var newlatter = document.createElement("div")
  newlatter.setAttribute('data-id', n)
  newlatter.setAttribute('name', card_collection[n].name)
  newlatter.classList.add("cartas");
  newlatter.addEventListener('click', click_letter)
  board.appendChild(newlatter)
      
    
    
  }
       
        
function click_letter() {
var id_letter = this.getAttribute('data-id');
this.style.backgroundImage = `url(${card_collection[id_letter].img})`;
current_letter.push(id_letter)
     
    
    
     //cadas dua cadas  viradas ou clicadas faz verificação
    
    if (current_letter.length == 2) {
      
      
    var letter1 = document.querySelectorAll(".cartas")[current_letter[0]] //pegar o elemento
    var letter1_img = window.getComputedStyle(letter1).backgroundImage; // pegar imagen do elemento
 
  
    var letter2 = document.querySelectorAll(".cartas")[current_letter[1]]
    var letter2_img = window.getComputedStyle(letter2).backgroundImage;
     



    //verifica si clicou na mesma imagens
    
    if(current_letter[0] ==current_letter[1] ){

      letter1 .style.backgroundImage = 'url(imagens/card.svg)'
      letter2.backgroundImage = 'url(imagens/card.svg)'
     
    current_letter = []
}else{
  setTimeout(() => { Checks_letters(letter2_img, letter1_img,letter1,letter2)}, 300); //verifica as cartas selecionadas
 /* existe pequeno bug si o usuario clicar antes de 0.5 segundos */
    
  }}
    
 }
       
    
 
 


    //Checks Letters
function Checks_letters(letter2_img, letter1_img,letter1,letter2) { 
 if (letter2_img == letter1_img) {
current_letter = []
elapsedCards++
if(elapsedCards >5) Congratulations()


 } else{
      letter1.style.backgroundImage = 'url(imagens/card.svg)'
      letter2.style.backgroundImage = 'url(imagens/card.svg)'
      current_letter = []
     
     
      
     }
 }
     
function Congratulations() {
  
const nomeuser = document.createElement("template");
nomeuser.innerHTML = `
<style> 
  @import url('https://fonts.googleapis.com/css2?family=Itim&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
  
  *{
  padding: 0;
  margin: 0;
  } 
    
   
  .winner_info{
  display:flex;
  flex-direction: column;
  position: fixed;
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -140%);
  font-size: 1.4rem;
  text-align: center; 
  background-color:#4fa8fb6b;
  gap: 20px;
  padding: 2%;
}


.winner_info span{
font-size: 2rem;
color: white;
}
.winner_info img{
display: block;
float: right; 
cursor: pointer;
}
      
  
</style>
  
  
  <div class="winner_info" id="congratutions"> 
  <img src="imagens/congratutions.png" >
   
<span id="userplayer">Voce</span>
  </div> 
      
      `;
  
  
  
  document.body.appendChild(nomeuser.content.cloneNode(true));
  const informacao =document.getElementById("congratutions");
  const userplayer =document.getElementById("userplayer");
  


 if(sessionStorage.usename != undefined) userplayer.innerText = sessionStorage.usename ;





  setTimeout(() => {
point.innerText= Number(point.innerText)+10
Number(level.innerText ++)

Init()
informacao.remove()
  }, 2000);





}
    

      
    }


    Init()