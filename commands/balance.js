const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args, utils) => {
  let Usuario = index.Usuario;
  if(!message.content.startsWith('!'))return;  
  let user = message.mentions.users.first() || message.author;
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
  .setTimestamp()
  .setThumbnail(`${user.displayAvatarURL()}`)
  .setDescription(`**${results.name} Balance**\n\nDinero: ${bal}\nTickets : ${results.tickets}`)
  .setFooter(message.author.username);
  message.channel.send(moneyEmbed)
});
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}