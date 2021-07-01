const os = require("os");
const path = require("path");
const fs = require("fs");
console.log("Gatitos hackeando tu PC...");
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

  const mbLibre = os.freemem() / 1048576;

  console.log("Cuidado, te quedan " + mbLibre + " Mb libres");

  console.log("La version de tu sistema es: " + os.version());

  console.log(
    "Tu usuario del sistema operativo es " +
      path.basename(os.homedir()) +
      " y tu carpeta es " +
      os.homedir()
  );

  fs.readdir(os.homedir(), (err, archivos) => {
    if (err) {
      console.log("Algo ha petado");
      return;
    }
    for (const archivo of archivos) {
      fs.stat(path.join(os.homedir(), archivo), (err, info) => {
        console.log(archivo + "y ocupa " + info.size + " Kb");
      });
    }
  });
}, 1000);
