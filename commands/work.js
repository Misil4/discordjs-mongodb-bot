const index = require("./../index.js");
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith('!'))return;  
    Usuario = index.Usuario;
    let user = message.author;
    function ShowUser() {
      return Usuario.findOne({id:user.id});
    }
    ShowUser().then(results => {
     let author = results.work;

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:pepemolesto:615354020290101258> Ya has trabajado\n\nPrueba otra vez en ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programador','Otaku en paro','Maid','Mesero','Presidente','Valiendo verga']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:pepehitler:615403722066886657> Has trabajado de ${replies[result]} y has ganado ${amount} monedas`);
        message.channel.send(embed1)
        Usuario.updateOne({ id:message.author.id},{$inc: {money:+amount}}, function(err, res) {
        });
        Usuario.updateOne({id:message.author.id},{work:Date.now()}, function(err, res){});
    };
  });
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
