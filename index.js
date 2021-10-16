var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Dectecting button Press
for (var i = 0; i < numberOfDrumButtons; i++) {

  var buttonPressed = document.querySelectorAll(".drum")[i];
  buttonPressed.addEventListener("click", activeButton);

  function activeButton() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }

}
//Dectecting keypress
document.addEventListener("keypress", activeKey);
// here wecannot write makeSound(event.key) in place of activeKey directly b/c here we cannot give parameter in bracket()
function activeKey(){
makeSound(event.key);
buttonAnimation(event.key);
}

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/a.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/intro.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/jack.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/wow.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/nikal.mp3");
      crash.play();
      break;

    case "k":
      var bass = new Audio("sounds/maa.mp3");
      bass.play();
      break;

    case "l":
      var snare = new Audio("sounds/water.mp3");
      snare.play();
      break;

    default:
      console.log(key);


  }
}

function buttonAnimation(currentKey)
{
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
