const Discord = require("discord.js");
const index = require("./../index.js");
let admin = ["330402090327474178","617776655393357845"];
module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith('!'))return;  
    Personaje = index.Personaje;
    const Nuevo = new Personaje({name: args[0],surname: args[1],description: args[2] ,age: args[3],genre: args[4],series: args[5],picture: args[6],atributtes: {attack: args[7],defense: args[8],speed: args[9],salud: args[10]},special1: {name: args[11],description: args[12],power: args[13]}})
Nuevo.save(function (err, Nuevo) {
    if (err) return console.error(err);
    message.channel.send(":white_check_mark: Personaje agregado correctamente");
  });
}
module.exports.help = {
    name: "addc",
    aliases: ["ac"]
}
