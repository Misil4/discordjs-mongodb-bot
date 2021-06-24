const Discord = require('discord.js')
const index = require("./../index.js");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;  
    let Personaje = index.Personaje;
    function ShowUser() {
      return Personaje.findOne({name: "Alon"});
    }
    ShowUser().then(results => {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Tienda de KotoriBot**\n\n"+"**Ticket**\n"+"Puedes utilizarlo para intentar spawnear un personaje (hay pocas probabilidades porque hay pocos personajes actualmente")
      .setColor("#FFFFFF")
      .setImage("https://s1.zerochan.net/Ticket.600.7137.jpg")
      .setTimestamp()
      .addField("Precio:", 1000);
      message.channel.send(embed);
      let embed1 = new Discord.MessageEmbed()
      .setDescription("**"+results.name+results.surname+"**\n"+results.description)
      .setColor("Random")
      .setImage(results.picture)
      .setTimestamp()
      .addField("Precio:", 4000000);
      message.channel.send(embed1);
  });
}
  
  module.exports.help = {
    name:"tienda",
    aliases: ["t"]
  }