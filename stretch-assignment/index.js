// lets get some selector hooks
const blocks = document.querySelector(".blocks");
const blockItems = document.querySelectorAll(".block");
const blockRed = document.querySelector(".block--red");
const blockBlue = document.querySelector(".block--blue");
const blockGreen = document.querySelector(".block--green");
const blockPink = document.querySelector(".block--pink");
const blockGray = document.querySelector(".block--gray");

blocks.style.cssText = "display: flex; flex-direction: column;";

for (let i = 0; i < blockItems.length; i++) {
  blockItems[i].addEventListener("click", event => {
    blockRed.style.order = "-9";
    blockBlue.style.order = "-9";
    blockGreen.style.order = "-9";
    blockPink.style.order = "-9";
    blockGray.style.order = "-9";
    event.target.style.order = -10;

  });
}
