const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671782387381698563")
setInterval(function() {
channel.send(`El.mystro el.mystro el.mystro el.mystro el.mystro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);