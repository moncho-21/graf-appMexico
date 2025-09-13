# graf-appMexico
# Prompts generados en ChatGPT


## index.html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bandera de México</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Bandera de México</h1>

  <!-- Controles arriba -->
  <div class="controls-container">
    <!-- Verde -->
    <div class="controls">
      <label for="greenRange">Esperanza</label>
      <input type="range" id="greenRange" min="0" max="255" value="153">
      <p id="greenCode">#009900</p>
    </div>

    <!-- Blanco -->
    <div class="controls">
      <label>Unidad</label>
      <p id="whiteCode">#FFFFFF</p>
    </div>

    <!-- Rojo -->
    <div class="controls">
      <label for="redRange">Sangre de nuestros héroes nacionales</label>
      <input type="range" id="redRange" min="0" max="255" value="157">
      <p id="redCode">#9D0000</p>
    </div>
  </div>

  <!-- Bandera abajo -->
  <div class="flag-container">
    <div class="color-box" id="greenBox"></div>
    <div class="color-box" id="whiteBox">
      <pre>
@@@@@
@@@@@
@@@@@
      </pre>
    </div>
    <div class="color-box" id="redBox"></div>
  </div>

  <!-- Label debajo de la bandera -->
  <p class="flag-label">Colores de la Bandera de México</p>

  <script src="script.js"></script>
</body>
</html>

## style.css

body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

/* Controles arriba en fila */
.controls-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Bandera pegada */
.flag-container {
  display: flex;
  justify-content: center;
  gap: 0;
}

.color-box {
  width: 200px;
  height: 200px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* Label debajo de la bandera */
.flag-label {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

input[type="range"] {
  width: 180px;
  margin: 5px 0;
}


## script.js

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
