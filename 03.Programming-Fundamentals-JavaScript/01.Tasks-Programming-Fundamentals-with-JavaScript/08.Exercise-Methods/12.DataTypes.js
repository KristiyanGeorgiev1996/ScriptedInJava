const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
  
  if (inputLines.length === 2) {
    processInput(inputLines);
    rl.close();
  }
});

function processInput(inputs) {
  const dataType = inputs[0];
  const value = inputs[1];

  switch (dataType) {
    case "int":
      const intValue = parseInt(value);
      console.log(intValue * 2);
      break;

    case "real":
      const realValue = parseFloat(value);
      console.log((realValue * 1.5).toFixed(2));
      break;

    case "string":
      console.log(`$${value}$`);
      break;

    default:
      console.log("Invalid data type entered.");
      break;
  }
}
