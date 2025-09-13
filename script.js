const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");
const greenBox = document.getElementById("greenBox");
const redBox = document.getElementById("redBox");
const whiteBox = document.getElementById("whiteBox");
const greenCode = document.getElementById("greenCode");
const redCode = document.getElementById("redCode");
const whiteCode = document.getElementById("whiteCode");

updateGreen();
updateRed();
whiteBox.style.backgroundColor = "#FFFFFF";

greenRange.addEventListener("input", updateGreen);
redRange.addEventListener("input", updateRed);

function updateGreen() {
  let g = greenRange.value;
  let hex = rgbToHex(0, g, 0);
  greenBox.style.backgroundColor = hex;
  greenCode.textContent = hex;
}

function updateRed() {
  let r = redRange.value;
  let hex = rgbToHex(r, 0, 0);
  redBox.style.backgroundColor = hex;
  redCode.textContent = hex;
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  ).toUpperCase();
}
