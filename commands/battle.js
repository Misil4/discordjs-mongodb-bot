const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args) => {
let Personaje = index.Personaje;
if (!message.content.startsWith("!"))return;
message.reply("Escoge un personaje");
Personaje.find({owner : message.author.id}).then(results =>{
console.log(results);
if (message.content.startsWith(results[0].name)) {
message.channel.send("Personaje escogido");
}
});
}
module.exports.help = {
    name: "battle",
    aliases: ["b"]
}