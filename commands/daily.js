const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args) => {
  let Usuario = index.Usuario;
  if(!message.content.startsWith('!'))return;  

  let user = message.author;

  let timeout = 86400000;
  let amount = Math.floor(Math.random() * 600) + 1;
  
  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:pepemolesto:615354020290101258> Ya has reclamado tu recompensa diaria\n\nVuelve a reclamarla en ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:shidatulaif:615963632039231580> Has conseguido ${amount} monedas`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"daily",
  aliases: ["day"]
}