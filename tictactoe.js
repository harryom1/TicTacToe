console.log("Tic Tac Toe");
let music=new Audio("music.mp3");
let chance=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");

let turn="X";
let finish=false;

const changeTurn= ()=>{
    
    return turn==="X"?"0":"X";

}

const checkWin = ()=>{
  let boxtext=document.getElementsByClassName('boxtext');
  let wins=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
  ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
      document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
      finish=true;
      document.getElementsByTagName("img")[0].style.width='150px';
    }
  })

}

let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
  let boxText=element.querySelector(".boxtext");
  element.addEventListener('click',()=>{
    if(boxText.innerText===''){
      boxText.innerText=turn;
      turn=changeTurn();
      chance.play();
      checkWin();
      if(!finish)
     document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
    }
  })
})



reset.addEventListener('click',()=>{
 let boxText=document.querySelectorAll('.boxtext');
 Array.from(boxText).forEach(element=>{
  element.innerText='';
 });
 turn="X";
 finish=false;
 document.querySelector('.info').innerText="Turn For "+turn;
 document.getElementsByTagName("img")[0].style.width='0px';
})

