const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/first.txt", "utf-8");

writeFileSync("./content/result-sync.txt", `Here is the result of the first: ${first}\n Here is the result of the second: ${second}`);
console.log("Done with this task, starting the next one...");