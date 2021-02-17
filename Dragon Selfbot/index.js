const Discord = require("discord.js");
const clc = require("cli-color");
const ConsoleTitle = require("node-bash-title");
const ascii_text_generator = require('ascii-text-generator');
const fs = require('fs');
const { Console } = require("console");
var printHelp = require("./functions/PrintHelp.js")
const { cpuUsage } = require("process");
const Commands = require("./commands/Commands.js");
global.client;
client = new Discord.Client({DisableEveryone: true})

ConsoleTitle("Dragon Selfbot - Version 1.0")

client.on("ready", async() => {
    console.log(clc.red("▓█████▄  ██▀███   ▄▄▄        ▄████  ▒█████   ███▄    █      ██████ ▓█████  ██▓      █████▒▄▄▄▄    ▒█████  ▄▄▄█████▓"))
    console.log(clc.red("▒██▀ ██▌▓██ ▒ ██▒▒████▄     ██▒ ▀█▒▒██▒  ██▒ ██ ▀█   █    ▒██    ▒ ▓█   ▀ ▓██▒    ▓██   ▒▓█████▄ ▒██▒  ██▒▓  ██▒ ▓▒"))
    console.log(clc.red("░██   █▌▓██ ░▄█ ▒▒██  ▀█▄  ▒██░▄▄▄░▒██░  ██▒▓██  ▀█ ██▒   ░ ▓██▄   ▒███   ▒██░    ▒████ ░▒██▒ ▄██▒██░  ██▒▒ ▓██░ ▒░"))
    console.log(clc.red("░▓█▄   ▌▒██▀▀█▄  ░██▄▄▄▄██ ░▓█  ██▓▒██   ██░▓██▒  ▐▌██▒     ▒   ██▒▒▓█  ▄ ▒██░    ░▓█▒  ░▒██░█▀  ▒██   ██░░ ▓██▓ ░ "))
    console.log(clc.red("░▒████▓ ░██▓ ▒██▒ ▓█   ▓██▒░▒▓███▀▒░ ████▓▒░▒██░   ▓██░   ▒██████▒▒░▒████▒░██████▒░▒█░   ░▓█  ▀█▓░ ████▓▒░  ▒██▒ ░ "))
    console.log(clc.red(" ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░ ░▒   ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒    ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒░▓  ░ ▒ ░   ░▒▓███▀▒░ ▒░▒░▒░   ▒ ░░   "))
    console.log(clc.red(" ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░  ░   ░   ░ ▒ ▒░ ░ ░░   ░ ▒░   ░ ░▒  ░ ░ ░ ░  ░░ ░ ▒  ░ ░     ▒░▒   ░   ░ ▒ ▒░     ░    "))
    console.log(clc.red(" ░ ░  ░   ░░   ░   ░   ▒   ░ ░   ░ ░ ░ ░ ▒     ░   ░ ░    ░  ░  ░     ░     ░ ░    ░ ░    ░    ░ ░ ░ ░ ▒    ░      "))
    console.log(clc.red("   ░       ░           ░  ░      ░     ░ ░           ░          ░     ░  ░    ░  ░        ░          ░ ░           "))
    console.log(clc.red(" ░                                                                                             ░                   "))
    console.log(clc.redBright("\n\n[INFORMATION] ") + clc.white("Prefix: ") + clc.greenBright("!="))
    console.log(clc.redBright("[INFORMATION] ") + clc.white("Dragon Selfbot v1 | Logged in as ") + clc.greenBright(client.user.username) + clc.white(" | ID: ") + clc.greenBright(client.user.id))
    console.log(clc.blue("[CREDITS] ") + clc.white("Dragon Selfbot was coded by DrachenfeuerHD"))
    console.log(clc.yellow("[DISCLAIMER] ") + clc.white(" is not responsible for things that are done with this software"))
    console.log(clc.greenBright("[SYSTEM]") + clc.white("the bot is now operational."))
    console.log(clc.greenBright("[SYSTEM]") + clc.white(`Do !=help to view all commands.`))
    printHelp.printHelp()
})

client.on('message', function(message) {
    if(!message.author.equals(client.user) || !message.content.startsWith("!=")) return;

    var args = message.content.substring("!=".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            Commands.help(message);
            break;
        case "coinflip":
            Commands.coinflip(message);
            break;
        case "embed":
            Commands.embed(message);
            break;
        case "clear":
            Commands.clear(message);
            break;
        case "kickall":
            Commands.kickall(message);
            break;
        case "banall":
            Commands.banall(message);
            break;
        case "nuke":
            Commands.nuke(message);
            break;
    }
});
fs.readFile('Token.txt', 'utf8', function(err, contents) {
    client.login(contents)
 });