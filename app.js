// Globals

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info bout env where the program is being executed

// Git
// git init (initializes repository)
// git config --global.init default branch main (sets default branch to main)
// git config --global user.name/email
// git add. (tracks all files)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems);