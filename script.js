//initiates the functions when the document is loaded
document.addEventListener("DOMContentLoaded", init);

//variables
const btnIncrease = document.querySelector("button");
const progressBar = document.querySelector("#block");
const percentage = document.querySelector("#percentage");

let status_ = false;
let interval = null;
let progressNum = 0;

function init() {
  barIncrease();
  btnChangeColor(progressNum);
}

function barIncrease() {
  //mouse event-listeners
  btnIncrease.addEventListener("mousedown", () => {
    status_ = true;
    update();
  });

  btnIncrease.addEventListener("mouseup", () => {
    status_ = false;
    update();
  });

  function update() {
    //clears interval every time update is run. So it won't run infinitely
    clearInterval(interval);

    //sets an interval so that the bar will progress towards hundred and decrease if mouse isn't held down
    interval = setInterval(() => {
      if (status_ && progressNum <= 99) {
        progressNum++;
      } else if (!status_ && progressNum > 0) {
        progressNum--;
      } else if (progressNum === 100) {
        //call another function that changes something
      }

      //UI stuff
      progressBar.style.height = `${progressNum}px`;
      percentage.textContent = `${progressNum} %`;
    }, 30);
  }
}

function btnChangeColor(num) {
  //make the color of the button change as you hold it in, in rythm with the progressbar
  let r = 0;
  let g = 0;
  let b = 0;

  //convert progressionNum into 255 rgb so the black hole will light up as the bar fills
  btnIncrease.addEventListener("mousedown", () => {
    //Does so the color doesn't exceed the given rgb ranges of 0 or 255. For both green and red
    if (r === 0) {
      r = 0;
    } else if (r === 255) {
      r = 255;
    }

    if (g === 0) {
      g = 0;
    } else if (g === 255) {
      g = 255;
    }
    //.
  });
}
