const Discord = require("discord.js");
const index = require("./../index.js");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let Usuario = index.Usuario;
  let user = message.author;
  let timeout = 604800000;
  let amount = Math.floor(Math.random() * 1200) + 1;
  function ShowUser() {
    return Usuario.findOne({id: message.author.id});
  }
  ShowUser().then(results => {
    let weekly = results.weekly;

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:pepemolesto:615354020290101258>  Ya has recogido tu recompensa semanal\n\nrecogela otra vez en ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:shidatulaif:615963632039231580> Has conseguido ${amount} monedas`);
  message.channel.send(moneyEmbed)
  Usuario.updateOne({ id:message.author.id},{$inc: {money:+amount}}, function(err, res) {
  });
  Usuario.updateOne({id:message.author.id},{weekly:Date.now()}, function(err, res){});


  }
  });
};



module.exports.help = {
  name:"weekly",
  aliases: ["week"]
}