const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");
const { request } = require("./request")

//Output a prompt
process.stdout.write("prompt > ");

//The stdin 'data' event fires after a user types in a line

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    let fileArr = cmd.split(' ')
    let order = fileArr[0]
    let fileName = fileArr[1]
    if (cmd === "pwd") {
      pwd();
    } else if (cmd === "ls") {
      ls();
    } else if(order === "cat") {
      cat(fileName)
    } else if (order === "curl"){
      request(fileName)
    } else {
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
    }
  });


