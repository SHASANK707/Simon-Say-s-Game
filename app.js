let gameseq=[];
let userseq = [];
let btns = ["red","blue","yellow","green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started")
        started = true;

        levelup();
    }
}

);

function btnflash(btn){
    btn.classList.add("systemflash");
    setTimeout(function (){
        btn.classList.remove("systemflash");
    }, 1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randindx = Math.floor(Math.random() * 3);
    let randcolor =btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx){

    if(userseq[idx]=== gameseq[idx]){
       // console.log("Same Value");
       if(userseq.length == gameseq.length){
        setTimeout(levelup,500);
        
       }
    }
    else{
        h2.innerHTML = `Game Over!! your score was <b>${level}</b><br/> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },200)
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    //console.log(usercolor)
    userseq.push(usercolor);
    checkans(userseq.length-1)
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}
