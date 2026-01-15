const fs = require("fs");

// // Sync file write
// fs.writeFileSync("./test/test.txt", "This is test file");

// Async file write
// fs.writeFile("./basic.txt", "This is Async file content", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File is created");
//   }
// })
fs.appendFileSync("test.txt", new Date().toLocaleString());

const file = fs.readFileSync("test.txt", "utf-8");
console.log(file);
