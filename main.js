// reset the value on click on reset button
function reset() {
  //first div
  document.querySelector(".dice_count1").innerHTML = " ";
  document.querySelector(".sec1 div").innerHTML = "0";
  document.querySelector(".sec1 h3").innerHTML = "0";

  //sec div
  document.querySelector(".sec2 p").innerHTML = " ";
  document.querySelector(".sec2 h6").innerHTML = "0";

  // theird div
  document.querySelector(".dice_count2").innerHTML = " ";
  document.querySelector(".sec3 div").innerHTML = "0";
  document.querySelector(".sec3 h3").innerHTML = "0";

  //first player calculation
  plOnediceCount = 0;
  plOneTotleScore = 0;
  countOne = 0;
  plOneRandomOne = 1;
  plOneRandomTwo = 1;
  diceOnw = 1;
  diceCountOne = 1;

  // sec player calculation
  plTwoRandomOn = 1;
  plTwoRandomTwo = 1;
  plTwodiceCount = 0;
  counttwo = 0;
  plTwoTotleScore = 0;
  diceTwo = 1;
  diceCounttwo = 1;
}

// reset the player name
function nameRest() {
  document.querySelector(".sec1 h2").innerHTML = "Player 1"; // player 1
  document.querySelector(".sec3 h2").innerHTML = "Player 1"; // player 2
}
//colling reset function on click
document.querySelector(".reset").addEventListener("click", reset);

//chang player name as a defalt name
document.querySelector(".reset").addEventListener("click", nameRest);

// set win score
function setScore() {
  reset();
  let score = prompt("Set win score");
  document.querySelector(".sec2 h6").innerHTML = score;
}
document.querySelector(".set_score").addEventListener("click", setScore);
// replay function for player one
function replayOne() {
  let plOneName = document.querySelector(".sec1 h2").innerHTML;
  reset();
  alert(`${plOneName} Win`);
  setScore();
}
// replay function for player two
function replayTwo() {
  let plTwoName = document.querySelector(".sec3 h2").innerHTML;
  reset();
  alert(`${plTwoName} Win`);
  setScore();
}
// for dice 1
countOne = 0;
diceOnw = 1;
function diceOne() {
  // dice count
  let diceCountOne = diceOnw++;
  document.querySelector(
    ".dice_count1"
  ).innerHTML = `You'r dice ${diceCountOne} time`;
  //win Score
  let plOneWinScore = document.querySelector(".sec2 h6").innerHTML;

  // create random number for dice
  let plOneRandomOne = Math.floor(Math.random() * 6) + 1;
  let plOneRandomTwo = Math.floor(Math.random() * 6) + 1;

  //count of both Dice
  let plOnediceCount = plOneRandomOne + plOneRandomTwo;

  //set first dice uning random number
  document
    .querySelector(".img1")
    .setAttribute("src", `./dice${plOneRandomOne}.png`);

  //set Sce dice uning random number
  document
    .querySelector(".img2")
    .setAttribute("src", `./dice${plOneRandomTwo}.png`);

  //change dice count on web
  document.querySelector(".sec1 div").innerHTML = plOnediceCount;

  //count and change total number
  let plOneTotleScore = (countOne += plOnediceCount);
  document.querySelector(".sec1 h3").innerHTML = plOneTotleScore;

  if (plOneTotleScore >= plOneWinScore) {
    setTimeout(replayOne, 300);
  } else {
    document.querySelector(".sec2 p").innerHTML = `Player2 dice`;
  }
}
function plOneChek() {
  let plOneChekScore = document.querySelector(".sec2 h6").innerHTML;

  if (plOneChekScore <= 0) {
    alert("Please set Wining Score");
    setScore();
  } else {
    diceOne();
  }
}

document.querySelector(".Player1").addEventListener("click", plOneChek);
document.addEventListener("keydown", function (event) {
  if (event.key === "1") {
    plOneChek();
  }
});

// for dice 2
counttwo = 0;
diceTwo = 1;
function dicetwo() {
  // dice count
  let diceCounttwo = diceTwo++;
  document.querySelector(
    ".dice_count2"
  ).innerHTML = `You'r dice ${diceCounttwo} time`;
  let plTwoWinScore = document.querySelector(".sec2 h6").innerHTML;
  let plTwoRandomOn = Math.floor(Math.random() * 6) + 1;
  let plTwoRandomTwo = Math.floor(Math.random() * 6) + 1;
  let plTwodiceCount = plTwoRandomOn + plTwoRandomTwo;
  document
    .querySelector(".img1")
    .setAttribute("src", `./dice${plTwoRandomOn}.png`);
  document
    .querySelector(".img2")
    .setAttribute("src", `./dice${plTwoRandomTwo}.png`);
  document.querySelector(".sec3 div").innerHTML = plTwodiceCount;
  let plTwoTotleScore = (counttwo += plTwodiceCount);
  document.querySelector(".sec3 h3").innerHTML = plTwoTotleScore;

  if (plTwoTotleScore >= plTwoWinScore) {
    setTimeout(replayTwo, 300);
  } else {
    document.querySelector(".sec2 p").innerHTML = `Player1 dice`;
  }
}
//
function plTwoChek() {
  let plTwoChekScore = document.querySelector(".sec2 h6").innerHTML;

  if (plTwoChekScore <= 0) {
    alert("Please set Wining Score");
    setScore();
  } else {
    dicetwo();
  }
}

document.querySelector(".Player2").addEventListener("click", plTwoChek);

//key press

document.addEventListener("keydown", function (event) {
  if (event.key === "2") {
    plTwoChek();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    setScore();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    reset();
  }
});
