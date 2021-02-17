var sysLog = require("../functions/SysLog.js");
const discord = require('discord.js');
var getRandomInt = require("../functions/GetRandomInt.js");
var Main = require("../index.js");
var printHelp = require("../functions/PrintHelp.js");
const fs = require('fs');
const clc = require("cli-color");
module.exports = {
    coinflip: function(message) {
        message.delete()
        sysLog.sysLog("Deleted message");
        let r = getRandomInt.getRandomInt(2);
        if(r == 0) {
            let embed = new discord.RichEmbed().setDescription('The answer is \nHeads').setFooter('Dragon Selfbot by DrachenfeuerHD').setColor('#4af700')
            message.channel.send(embed)
            sysLog.sysLog("Flipped a coin: Heads");
        } else {
            let embed = new discord.RichEmbed().setDescription('The answer is \nTails').setFooter('Dragon Selfbot by DrachenfeuerHD').setColor('#4af700')
            message.channel.send(embed)
            sysLog.sysLog("Flipped a coin: Tails");
        }
    },
    help: function(message) {
        message.delete()
        printHelp.printHelp()
    },
    embed: function(message) {
        message.delete()
        sysLog.sysLog("Deleted message");
         let text = message.content.replace(`!=embed`, "")
         let embed = new discord.RichEmbed().setDescription(text).setFooter('Dragon Selfbot by DrachenfeuerHD').setColor('#4af700')
         message.channel.send(embed)
         sysLog.sysLog(`Sent a embed: ${text}`);
    },
    clear: function(message) {
        message.delete()
        sysLog.sysLog("Cleared the console")
        console.clear()
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
    },
    kickall: function(message) {
        message.delete()
        let members = message.guild.members;
        members.forEach(m => {
            m.kick().then(() => {
              sysLog.sysLog("Successfully kicked " + m.user.username)
            }).catch(r => {
                sysLog.fsysLog("Unable to kick " + m.user.username + ". Reason: " + r)
            });
        })
    },
    banall: function(message) {
        message.delete()
        let members = message.guild.members;
        members.forEach(m => {
            m.ban().then(() => {
              sysLog.sysLog("Successfully banned " + m.user.username)
            }).catch(r => {
                sysLog.fsysLog("Unable to bam " + m.user.username + ". Reason: " + r)
            });
        })
    },
    nuke: function(message) {
        message.delete()
        let members = message.guild.members;
        members.forEach(m => {
            m.ban().then(() => {
              sysLog.sysLog("Successfully banned " + m.user.username)
            }).catch(r => {
                sysLog.fsysLog("Unable to bam " + m.user.username + ". Reason: " + r)
            });
        })
        let tchannel = message.guild.channels.filter(c => c.type === 'text');
        let vchannel = message.guild.channels.filter(c => c.type === 'voice');
        let cats = message.guild.channels.filter(c => c.type === 'category');
        let roles = message.guild.roles;
        roles.forEach(role => {
            role.delete().then(() => {
                sysLog.sysLog("Successfully deleted the role: " + role.name)
            }).catch(r => {
                sysLog.fsysLog("Unable to delete the role " + role.name + ". Reason: " + r)
            })
        })
        tchannel.forEach(tc => {
            tc.delete().then(() => {
                sysLog.sysLog("Successfully deleted the textchannel: " + tc.name)
            }).catch(r => {
                sysLog.fsysLog("Unable to delete the textchannel " + tc.name + ". Reason: " + r)
            })
        })
        vchannel.forEach(vc => {
            vc.delete().then(() => {
                sysLog.sysLog("Successfully deleted the voicechannel: " + vc.name)
            }).catch(r => {
                sysLog.fsysLog("Unable to delete the voicechannel " + vc.name + ". Reason: " + r)
            })
        })
        cats.forEach(cat => {
            cat.delete().then(() => {
                sysLog.sysLog("Successfully deleted the category: " + cat.name)
            }).catch(r => {
                sysLog.fsysLog("Unable to delete the category " + cat.name + ". Reason: " + r)
            })
        })
    }
}