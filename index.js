const os = require("os");
setTimeout((sistemaOp) => {
  if (process.platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (process.platform === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  } else if (process.platform === "linux") {
    console.log("Tú molas");
  }
});

const mbLibre = os.freemem() / 1048576;

console.log("Cuidado, te quedan " + mbLibre + "Mb de RAM libre");
