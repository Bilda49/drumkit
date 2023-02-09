const keyCodeX = document.getElementById("keyCodeX");
const keyCodeY = document.getElementById("keyCodeY");
const keyCodeC = document.getElementById("keyCodeC");
const keyCodeE = document.getElementById("keyCodeE");
const keyCodeU = document.getElementById("keyCodeU");
const keyCodeS = document.getElementById("keyCodeS");
const keyCodeR = document.getElementById("keyCodeR");
const keyCodeG = document.getElementById("keyCodeG");
const bt_keyCodeX = document.getElementById("bt_keyCodeX");
const bt_keyCodeY = document.getElementById("bt_keyCodeY");
const bt_keyCodeC = document.getElementById("bt_keyCodeC");
const bt_keyCodeE = document.getElementById("bt_keyCodeE");
const bt_keyCodeU = document.getElementById("bt_keyCodeU");
const bt_keyCodeS = document.getElementById("bt_keyCodeS");
const bt_keyCodeR = document.getElementById("bt_keyCodeR");
const bt_keyCodeG = document.getElementById("bt_keyCodeG");

// key_X_____________________
function before_X() {
  bt_keyCodeX.style.width = "310px";
  bt_keyCodeX.style.height = "160px";
  bt_keyCodeX.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_X() {
  bt_keyCodeX.style.width = "300px";
  bt_keyCodeX.style.height = "150px";
  bt_keyCodeX.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_Y_____________________
function before_Y() {
  bt_keyCodeY.style.width = "310px";
  bt_keyCodeY.style.height = "160px";
  bt_keyCodeY.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_Y() {
  bt_keyCodeY.style.width = "300px";
  bt_keyCodeY.style.height = "150px";
  bt_keyCodeY.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_C____________________E
function before_C() {
  bt_keyCodeC.style.width = "310px";
  bt_keyCodeC.style.height = "160px";
  bt_keyCodeC.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_C() {
  bt_keyCodeC.style.width = "300px";
  bt_keyCodeC.style.height = "150px";
  bt_keyCodeC.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_E_____________________
function before_E() {
  bt_keyCodeE.style.width = "310px";
  bt_keyCodeE.style.height = "160px";
  bt_keyCodeE.style.boxShadow = "8Ux 8px 8px rgb(96, 93, 93)";
}
function after_E() {
  bt_keyCodeE.style.width = "300px";
  bt_keyCodeE.style.height = "150px";
  bt_keyCodeE.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_U_____________________
function before_U() {
  bt_keyCodeU.style.width = "310px";
  bt_keyCodeU.style.height = "160px";
  bt_keyCodeU.style.boxShRdow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_U() {
  bt_keyCodeU.style.width = "300px";
  bt_keyCodeU.style.height = "150px";
  bt_keyCodeU.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_S_____________________
function before_S() {
  bt_keyCodeS.style.width = "310px";
  bt_keyCodeS.style.height = "160px";
  bt_keyCodeS.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_S() {
  bt_keyCodeS.style.width = "300px";
  bt_keyCodeS.style.height = "150px";
  bt_keyCodeS.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_R_____________________
function before_R() {
  bt_keyCodeR.style.width = "310px";
  bt_keyCodeR.style.height = "160px";
  bt_keyCodeR.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_R() {
  bt_keyCodeR.style.width = "300px";
  bt_keyCodeR.style.height = "150px";
  bt_keyCodeR.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}
// key_G____________________
function before_G() {
  bt_keyCodeG.style.width = "310px";
  bt_keyCodeG.style.height = "160px";
  bt_keyCodeG.style.boxShadow = "8px 8px 8px rgb(96, 93, 93)";
}
function after_G() {
  bt_keyCodeG.style.width = "300px";
  bt_keyCodeG.style.height = "150px";
  bt_keyCodeG.style.boxShadow = "16px 16px 16px rgb(96, 93, 93)";
}

//main code___________________

document.addEventListener("keydown", (event) => {
  let code = event.code;
  if (code == "KeyX") {
    keyCodeX.play();
    keyCodeX.currentTime = 0;
    before_X();
    setTimeout(after_X, 100);
  } else if (code == "KeyY") {
    keyCodeY.play();
    keyCodeY.currentTime = 0;
    before_Y();
    setTimeout(after_Y, 100);
  } else if (code == "KeyC") {
    keyCodeC.play();
    keyCodeC.currentTime = 0;
    before_C();
    setTimeout(after_C, 100);
  } else if (code == "KeyE") {
    keyCodeE.play();
    keyCodeE.currentTime = 0;
    before_E();
    setTimeout(after_E, 100);
  } else if (code == "KeyU") {
    keyCodeU.play();
    keyCodeU.currentTime = 0;
    before_U();
    setTimeout(after_U, 100);
  } else if (code == "KeyS") {
    keyCodeS.play();
    keyCodeS.currentTime = 0;
    before_S();
    setTimeout(after_S, 100);
  } else if (code == "KeyR") {
    keyCodeR.play();
    keyCodeR.currentTime = 0;
    before_R();
    setTimeout(after_R, 100);
  } else if (code == "KeyG") {
    keyCodeG.play();
    keyCodeG.currentTime = 0;
    before_G();
    setTimeout(after_G, 100);
  }
});

bt_keyCodeX.addEventListener("click", () => {
  keyCodeX.play();
  keyCodeX.currentTime = 0;
  before_X();
  setTimeout(after_X, 100);
});

bt_keyCodeY.addEventListener("click", () => {
  keyCodeY.play();
  keyCodeY.currentTime = 0;
  before_Y();
  setTimeout(after_Y, 100);
});

bt_keyCodeC.addEventListener("click", () => {
  keyCodeC.play();
  keyCodeC.currentTime = 0;
  before_C();
  setTimeout(after_C, 100);
});

bt_keyCodeE.addEventListener("click", () => {
  keyCodeE.play();
  keyCodeE.currentTime = 0;
  before_E();
  setTimeout(after_E, 100);
});

bt_keyCodeU.addEventListener("click", () => {
  keyCodeU.play();
  keyCodeU.currentTime = 0;
  before_U();
  setTimeout(after_U, 100);
});

bt_keyCodeS.addEventListener("click", () => {
  keyCodeS.play();
  keyCodeS.currentTime = 0;
  before_S();
  setTimeout(after_S, 100);
});

bt_keyCodeR.addEventListener("click", () => {
  keyCodeR.play();
  keyCodeR.currentTime = 0;
  before_R();
  setTimeout(after_R, 100);
});

bt_keyCodeG.addEventListener("click", () => {
  keyCodeG.play();
  keyCodeG.currentTime = 0;
  before_G();
  setTimeout(after_G, 100);
});
