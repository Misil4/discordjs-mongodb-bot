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
console.log(user);
  if (bal === null) bal = 0;
  var d = new Date(Date.now());
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setImage(user.avatarURL())
  .setDescription(`**${results.name} Balance**\n\nDinero: ${bal}`)
  .setFooter(message.author.username+"  |  "+d.toString());
  message.channel.send(moneyEmbed)
});
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}