
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let winmsg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");


let turnO = true; //playerO, playerX
let count = 0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];

const resetGame = () =>{
    turnO = true;
   enableBoxes();
   msgcontainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        count++;
       if(turnO){
        //playerO
        box.innerText = "O";
        turnO = false;
       }else{
        //playerX
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    if(count === 9){
        msgcontainer.classList.remove("hide");
        winmsg.innerText = `Game was a Draw!`;
    }else{
        winmsg.innerText = `Congratulations! Winner is ${winner}`;
    }
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }

    }

};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


