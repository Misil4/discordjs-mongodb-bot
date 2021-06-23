const Discord = require('discord.js')
const index = require("./../index.js");

module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith('!'))return;  
    let Usuario = index.Usuario;
    let user = message.mentions.members.first();
    if (user == undefined) {
      message.channel.send("tienes que pinear un usuario al que dar");
    }
    console.log(user.id);
    function ShowUser() {
      return Usuario.findOne({id: user.id});
    }
    ShowUser().then( results => {
      let author = results.money;
    if (author < args[1]) {
      message.channel.send("Estas dando mas de lo que tienes");
    }
    if (isNaN(args[1])) return;
    Usuario.updateOne({ id:user},{$inc: {money:+args[1]}}, function(err, res) {
    });
    Usuario.updateOne({ id:message.author},{$inc: {money:-args[1]}}, function(err, res) {
    });
       let embed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTimestamp()
        .setDescription(`Dinero dado correctamente balance: ${author}`)
        message.channel.send(embed)
  });
}
  
  module.exports.help = {
    name:"give",
    aliases: [""]
  }