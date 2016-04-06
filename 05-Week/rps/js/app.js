// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

var computerWeapon = "rock"

function choseRock(){
  console.log("You chose rock")
  if (computerWeapon == "rock"){
    alert("It's a tie!")
  } else if (computerWeapon == "scissors"){
    alert ("you win")
  } else if(computerWeapon == "paper"){
    alert("you lost")
  } else {
    alert("Oops, something went wrong. It's not a win/loss/or tie")
  }
}

$("#rock").click(choseRock)


function chosePaper(){
  console.log ("You chose paper")
  if (computerWeapon == "rock"){
    alert("you win!")
  } else if (computerWeapon == "scissors"){
    alert ("you lose")
  } else if(computerWeapon == "paper"){
    alert("It's a tie!")
  } else {
    alert("Oops, something went wrong. It's not a win/loss/or tie")
  }
}

$("#paper").click(chosePaper)

function choseScissors(){
  console.log ("You chose scissors")
  if (computerWeapon == "rock"){
    alert("you lose!")
  } else if (computerWeapon == "scissors"){
    alert ("It's a tie!")
  } else if(computerWeapon == "paper"){
    alert("you win")
  } else {
    alert("Oops, something went wrong. It's not a win/loss/or tie")
  }
}

$("#scissors").click(choseScissors)

});
