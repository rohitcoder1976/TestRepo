const mod = require("./1-module");
const mod2 = require("./3-altSyntx");

console.log(mod2);

mod.sayHi(mod.user1);
mod.sayHi("John Adams");

require("./4-mindgrenade");