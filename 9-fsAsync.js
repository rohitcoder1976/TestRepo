
const { readFile, writeFile, write } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        writeFile("./content/result-async.txt", `Here is the result of the first: ${first}\n Here is the result of the second: ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            // returns undefined
            console.log("Done with this task");
        });
    });
});

console.log("Starting the next task...");