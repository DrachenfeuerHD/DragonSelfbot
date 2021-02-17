const fs = require('fs');
let dprefix;
exports.printHelp = function printHelp() {
    this.Update
    const clc = require("cli-color");
    
    console.log(clc.blueBright("\n[HELP] ") + clc.greenBright(`!=help `) + clc.white("Shows all commands in the console"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=embed <Text> `) + clc.white("Creates an embed with your text"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=coinflip `) + clc.white("Flips a Coin"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=clear `) + clc.white("Clears the console"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=kickall `) + clc.white("Kicks everyone in the server"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=banall `) + clc.white("Bans everyone in the server"))
    console.log(clc.blueBright("[HELP] ") + clc.greenBright(`!=nuke `) + clc.white("Deletes everything and bans everyone in the server"))
}