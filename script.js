document.addEventListener("DOMContentLoaded", init);

//variables
const btnIncrease = document.querySelector("button");
const progressBar = document.querySelector("#block");
const percentage = document.querySelector("#percentage");
let status_ = false;
let interval = null;

function init() {
  btnChangeColor();
  barIncrease();
}

function barIncrease() {
  let progressNum = 0;

  //Do so the bar moves linearly upwards instead of jumping WITHOUT css animation!
  btnIncrease.addEventListener("mousedown", () => {
    status_ = true;
    update();
  });

  btnIncrease.addEventListener("mouseup", () => {
    status_ = false;
    update();
  });

  function update() {
    if (status_ === true) {
      interval = setInterval(() => {
        if (progressNum <= 99) {
          progressNum++;
        }

        progressBar.style.height = `${progressNum}px`;
        percentage.textContent = `${progressNum} %`;
      }, 30);
    } else {
      clearInterval(interval);
    }
  }
}

function btnChangeColor() {
  //make the color of the button change as you hold it in, in rythm with the progressbar
  let r = 255;
  let g = 0;
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
