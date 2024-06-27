var drumbtns = document.querySelectorAll(".drum");
for (var i = 0; i < drumbtns.length; i++) {
  drumbtns[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    keyboardmakeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

window.addEventListener("keydown", (event) => {
  keyboardmakeSound(event.key);
  buttonAnimation(event.key);
  
});

function keyboardmakeSound(key) {
  if (key === "w") {
    const drum1 = new Audio("./sounds/tom-1.mp3");
    if (!drum1.paused) {
      drum1.currentTime = 0;
    }
    drum1.play();
  }
  if (key === "a") {
    const drum2 = new Audio("./sounds/tom-2.mp3");
    if (!drum2.paused) {
      drum2.currentTime = 0;
    }
    drum2.play();
  }
  if (key === "s") {
    const drum3 = new Audio("./sounds/tom-3.mp3");
    if (!drum3.paused) {
      drum3.currentTime = 0;
    }
    drum3.play();
  }
  if (key === "d") {
    const drum4 = new Audio("./sounds/tom-4.mp3");
    if (!drum4.paused) {
      drum4.currentTime = 0;
    }
    drum4.play();
  }
  if (key === "j") {
    const drum5 = new Audio("./sounds/crash.mp3");
    if (!drum5.paused) {
      drum5.currentTime = 0;
    }
    drum5.play();
  }

  if (key === "k") {
    const drum6 = new Audio("./sounds/kick-bass.mp3");
    if (!drum6.paused) {
      drum6.currentTime = 0;
    }
    drum6.play();
  }

  if (key === "l") {
    const drum7 = new Audio("./sounds/snare.mp3");
    if (!drum7.paused) {
      drum7.currentTime = 0;
    }
    drum7.play();
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}