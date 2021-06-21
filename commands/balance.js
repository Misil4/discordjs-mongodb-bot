const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args, utils) => {
  let Usuario = index.Usuario;
  if(!message.content.startsWith('!'))return;  
  let user = message.mentions.members.first() || message.author;
  function ShowUser() {
    return Usuario.findOne({id: user.id});
  }
  ShowUser().then(results => {
  let bal = results.money;

  if (bal === null) bal = 0;
  var d = new Date(Date.now());
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${results.name} Balance**\n\nDinero: ${bal}`)
  .setFooter(d.toString());
  message.channel.send(moneyEmbed)
});
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}