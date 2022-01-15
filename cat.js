const fs = require('fs');
function cat(fileName) {
    fs.readFile(fileName, 'utf8', (err,data) => {
    if (err) {
        console.error(err)
    return
    } else{
        console.log(data)
        process.stdout.write("prompt > ");
    }
})
}


module.exports = {cat}