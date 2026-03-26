let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winshow=document.querySelector(".show");
let msg=document.querySelector(".msg")
let newbtn=document.querySelector("#newgame");

let turn0=true;
let count=0;

boxes.forEach((box) =>{
    
box.addEventListener("click", ()=>
{
   if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkwinner();
 count++;
});
});

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const disablebtn=()=>{
    for(let box of boxes)
    {
      box.disabled=true;
    }
}

const enablebtn=()=>{
    for(let box of boxes)
    {
      box.disabled=false;
      winshow.classList.add("hide");
      count=0;
      box.innerText="";
    }
}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pat1val= boxes[pattern[0]].innerText;
        let pat2val=boxes[pattern[1]].innerText;
        let pat3val=boxes[pattern[2]].innerText;

        if(pat1val !="" && pat2val!="" && pat3val!=""){
        if(pat1val===pat2val && pat2val===pat3val){
            console.log("Winner", pat1val);
            winnerr(pat1val);
        }
    }
    }
}

const winnerr=(final)=>{
    msg.innerText=`Congratulations! Winner is ${final}`;
    winshow.classList.remove("hide");
    disablebtn();
}

newbtn.addEventListener("click",enablebtn);
resetbtn.addEventListener("click",enablebtn);