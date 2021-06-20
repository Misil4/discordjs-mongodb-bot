const Discord = require("discord.js");
const index = require("./../index.js");


exports.run = async (client, message, args) => { 
  let Usuario = index.Usuario;
  if(message.author.bot) return;
  if (!message.content.startsWith('!')) return;
  let user = message.mentions.members.first().username || message.author.username;
message.reply("hola");
    if (isNaN(args[1])) return;
    index.Usuario.updateOne({ name:user},{$inc: {money:+args[1]}}, function(err, res) {
    });
    function ShowMoney() {
      return index.Usuario.findOne({name:user});
    }
    ShowMoney().then(results => {
      console.log(results);
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Añadidas ${args[1]} monedas\n\nNew Balance: ${results.money}`);
    message.channel.send(moneyEmbed)
  });
};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}