const Discord = require("discord.js");
const index = require("./../index.js");
const ms = require("parse-ms");
module.exports.run = async (client, message, args) => {
  let Usuario = index.Usuario;
  if(!message.content.startsWith('!'))return;  

  let user = message.author;

  let timeout = 86400000;
  let amount = Math.floor(Math.random() * 600) + 1;
  function ShowUser() {
    return Usuario.findOne({id: message.author.id});
  }
  ShowUser().then(results => {
    let daily = results.daily;

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTimestamp()
    .setDescription(`<:pepemolesto:615354020290101258> Ya has reclamado tu recompensa diaria\n\nVuelve a reclamarla en ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:shidatulaif:615963632039231580> Has conseguido ${amount} monedas`);
  message.channel.send(moneyEmbed)
  Usuario.updateOne({ id:message.author.id},{$inc: {money:+amount}}, function(err, res) {
  });
  Usuario.updateOne({id:message.author.id},{daily:Date.now()}, function(err, res){});


  }
  });
};


module.exports.help = {
  name:"daily",
  aliases: ["day"]
}