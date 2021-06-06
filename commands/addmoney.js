const Discord = require("discord.js");
const index = require("./../index.js");


exports.run = async (bot, message, args) => { 
  

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    index.Usuario.updateOne({ name:user},{money:money+args[1]}, function(err, res) {
    });
    const bal = index.Usuario.find({money: {name: user}}, callback);
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Añadidas ${args[1]} monedas\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    message.reply("hecho");
};

module.exports.help = {
  name:"!add",
  aliases: ["am"]
}