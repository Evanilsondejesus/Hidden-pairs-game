const nomeuser = document.createElement("template");
nomeuser.innerHTML = `

<style> 
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

*{
padding: 0;
margin: 0;
}

:root {
--cor-primaria: #b5d1ec; 
    
  }




.user-information {
    position: fixed;
    top: 50%;  
    left: 50%;  
    transform: translate(-50%, -140%);
    font-size: 1.4rem;
    text-align: center;
    background-color: #4FA8FB;
    gap: 20px;
    padding: 2%;
    background: #4FA8FB;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
.user-information img{
display: block;
float: right; 
cursor: pointer;
}


.info_ganhador button:hover{
box-shadow: 0 0 4px 3px white;

}


button{ 
background: red;
padding: 10px;
border: none;  
color: white;
display: block;
margin: auto;
font-family: "Itim", cursive;
font-weight: 400;
font-style: normal;
font-size: 1rem;
cursor: pointer;


} 
 


input{
padding: 10px;
margin: 0.6rem;
display: block;
background: #FCD0D0;
border: none;
font-family: "Roboto Mono", monospace;
font-style: normal;
font-weight: 400;
font-size: 20px;
outline: none;
}
input:hover{
box-shadow: 0 0 4px 3px white;

}


 span{
    font-family: "Itim", cursive;
    font-weight: 400;
    font-style: normal;
} 

 
    

</style>


<div class="user-information" id="user-information"> 
<img src="imagens/x-lg.svg" id="close">

 <span>Nome</span>
<input type="text" placeholder="Digite seu nome" id="username">  
<button id="btn-salve">Salvar</button>
</div> 
    
    `;


document.body.appendChild(nomeuser.content.cloneNode(true));
const closeInformation = document.getElementById("close");
const username = document.getElementById("username");
const gameInsigh = document.getElementById('gameInsigh')
const userinfor = document.getElementById("user-information");
const board = document.getElementById("board");
board.style.display = "none";
const btnsalve = document.getElementById("btn-salve");
gameInsigh.style.display = "none";




btnsalve.addEventListener("click",()=>{
    userinfor.remove();
    board.style.display ="flex"; 
    gameInsigh.style.display = "flex";

setTimeout(() => {
      board.style.opacity = 1;
      gameInsigh.style.opacity = 1;
}, 250);


  if(username.value != "")sessionStorage.usename = username.value;
})




closeInformation.addEventListener("click", ()=>{
   userinfor.remove();
   gameInsigh.style.display = "flex";
   board.style.display ="flex";



setTimeout(() => {
  board.style.opacity = 1;
  gameInsigh.style.opacity = 1;

}, 250);
})