let buttons = document.querySelectorAll(".game-btn");
let reset = document.querySelector("#reset");
let startGame = document.querySelector("#start");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector("#msg");

let turnO = true;       //Turn of player O
let successPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

for(let btn of buttons){
    //console.log(btn);
    btn.addEventListener("click",function(e){
     // console.log("button was clicked");
        if(turnO){
            btn.innerHTML = "O";
            turnO = false;
        }else{
            btn.innerHTML = "X"
            turnO = true;
        }

        btn.disabled = true;  //so that player cann't change the text
         inspectWinner();
        
    })
    
}

// inspect winner
function inspectWinner(){
for(let pattern of successPattern){
    // console.log(pattern);
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(buttons[pattern[0]].innerHTML,buttons[pattern[1]].innerHTML,buttons[pattern[2]].innerHTML);
    let pos1 =  buttons[pattern[0]].innerHTML;
    let pos2 = buttons[pattern[1]].innerHTML;
    let pos3 = buttons[pattern[2]].innerHTML;

    if(pos1!= "" && pos2!= "" && pos3!= ""){    // position should not be equal to empty after that we check winning condition
        if(pos1 === pos2 && pos2 === pos3){     //winner condition
            // console.log(" winner is :" + pos1);
             showwinnwer(pos1);
            
        }
     }
      
}
}

function disabledbtn(){
    for(let btn of buttons){
        btn.disabled = true;
    }

}

function refersh(){
    for(let btn of buttons){
        btn.innerHTML = "";
        btn.disabled = false;
        turnO = true;
        msgContainer.classList.add("msg-container");
        
    }

}

reset.addEventListener("click" ,function(e){
    //  console.log("reset button was clicked");
     refersh();
     
})

startGame.addEventListener("click", function(e){
    // console.log("start button was clicked");
    refersh();
    
})

let showwinnwer = (winner) => {
    winnerMsg.innerHTML= ` the winner is ${winner}`;
    msgContainer.classList.remove("msg-container");
    disabledbtn();    // after winnig buttons should not be clickable
}




