let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let btns=["red","green","purple","yellow"];
let h2=document.querySelector("h2");
document.addEventListener("click",function()
{
   if(!start)
   {
    start=true;
    levelUp();
   }
});
function gameFlash(btn)
{
      
     btn.classList.add("flash");
     setTimeout(function()
     {
       btn.classList.remove("flash");
       
     },100);
}
function userFlash(btn)
{
      
     btn.classList.add("userFlash");
     setTimeout(function()
     {
       btn.classList.remove("userFlash");
       
     },100);
}
function levelUp()
{
   level++;
   h2.innerText=`level ${level}`;
   //random button flash krenge
   let random=Math.floor(Math.random()*3);
   let random_color=btns[random];
   let random_button=document.querySelector(`.${random_color}`);
   gameSeq.push(random_color);
   gameFlash(random_button);
}
function checkAns()
{
    let idx=level-1;
    if(userSeq[idx]===gameSeq[idx])
    {
    if(userSeq.length==gameSeq.length)
    {
        levelUp();
    }
    else{

    }
    }
    else
    {
        h2.innerText=`game over ! press any key to start`;
    }
}
function btnPress()
{
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}

