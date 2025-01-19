
let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showwinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("clicked")) return;
    box.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    box.classList.add("clicked");
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;
    if (pos1val && pos1val === pos2val && pos2val === pos3val) {
      console.log("winner", pos1val);
      showwinner(pos1val);
      boxs.forEach((box) => {
        box.disabled = true;
      });
    }
  }
};

resetbtn.addEventListener("click", () => {
  // Reset game state
  turnO = true;
  msgcontainer.classList.add("hide");
  boxs.forEach((box) => {
    box.innerText = "";
    box.classList.remove("clicked");
    box.disabled = false;
  });
});

newgamebtn.addEventListener("click", () => {
  // Start a new game without resetting game state
  turnO = true;
  boxs.forEach((box) => {
    box.innerText = "";
    box.classList.remove("clicked");
    box.disabled = false;
  });
});

