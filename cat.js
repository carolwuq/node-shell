
const fs = require("fs");

const fileName = ''
function cat() {
  fs.readFile(fileName, "utf8", (err, file) => {
    process.stdout.write(file);
  });
}

module.exports = { cat };
