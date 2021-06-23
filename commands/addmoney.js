const Discord = require("discord.js");
const index = require("./../index.js");


exports.run = async (client, message, args) => { 
  let Usuario = index.Usuario;
  if(message.author.bot) return;
  if (!message.content.startsWith('!')) return;
  let user = message.mentions.members.first() || message.author;
    if (isNaN(args[1])) return;
    Usuario.updateOne({ id:user.id},{$inc: {money:+args[1]}}, function(err, res) {
    });
    function ShowMoney() {
      return Usuario.findOne({id:user.id});
    }
    ShowMoney().then(results => {
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTimestamp()
    .setDescription(`:white_check_mark:  Añadidas ${args[1]} monedas\n\nNew Balance: ${results.money}`);
    message.channel.send(moneyEmbed)
  });
};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}