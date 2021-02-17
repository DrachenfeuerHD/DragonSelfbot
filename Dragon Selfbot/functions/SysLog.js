exports.sysLog = function sysLog(let) {
    const clc = require("cli-color");
    console.log(clc.greenBright("[SYSTEM] ") + clc.white(let))
}
exports.fsysLog = function fsysLog(let) {
    const clc = require("cli-color");
    console.log(clc.redBright("[SYSTEM] ") + clc.white(let))
}