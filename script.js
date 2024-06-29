const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
const b7=document.getElementById("b7");
const b8=document.getElementById("b8");
const b9=document.getElementById("b9");
const btn=document.querySelector(".reset");

var count;
var player;
var p1,p2,p3;

function monitor(data){
     const btn=document.getElementById(data);

if(btn.textContent===''){
     if(count%2===0){
      player='player 1';
        btn.innerHTML='X';
        winnercheck(btn.id);
        count++;
     }
     else if(count%2===1){
      player='player 2';
        btn.innerHTML='O';
        winnercheck(btn.id);
        count++;
     }
     else{
        btn.innerHTML='X';
        count=1;
     }

}
}

function winnercheck(cid){
     const check=[
        [b1,b2,b3],
        [b4,b5,b6],
        [b7,b8,b9],
        [b1,b4,b7],
        [b2,b5,b8],
        [b3,b6,b9],
        [b1,b5,b9],
        [b3,b5,b7],
     ]

     for(let i=0 ; i<check.length ;i++){
      const [pos1,pos2,pos3]=check[i];
       if(pos1.textContent != '' 
       && pos1.textContent===pos2.textContent 
         && pos2.textContent===pos3.textContent){
            console.log(player+ ' win the match');
            pos1.style.border='5px solid lightgreen';
            pos2.style.border='5px solid lightgreen';
            pos3.style.border='5px solid lightgreen';
            btn.style.border='2px solid green'
            p1=pos1;
            p2=pos2;
            p3=pos3;

            for(let i=0 ; i<check.length ;i++){
               const [pos1,pos2,pos3]=check[i];
               if(pos1.textContent===''){
                  pos1.innerHTML='-';
               }if(pos2.textContent===''){
                  pos2.innerHTML='-';
               }if(pos3.textContent===''){
                  pos3.innerHTML='-';
               }
            }
         }
     }
}

function button(){
    b1.innerHTML='';
    b2.innerHTML='';
    b3.innerHTML='';
    b4.innerHTML='';
    b5.innerHTML='';
    b6.innerHTML='';
    b7.innerHTML='';
    b8.innerHTML='';
    b9.innerHTML='';
    btn.style.border='2px solid white'
    p1.style.border='1px solid white';
    p2.style.border='1px solid white';
    p3.style.border='1px solid white';
    count= -1;
}