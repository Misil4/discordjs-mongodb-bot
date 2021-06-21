const Discord = require("discord.js");
const index = require("./../index.js");
module.exports.run = async (client, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let Usuario =index.Usuario;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    Usuario.updateOne({$inc: {money: -args[1]}}, function(err, res){
    });
    function ShowUser() {
      return Usuario.findOne({id:user.id});
    }
    ShowUser().then(result => {
      let bal = result.money;
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:white_check_mark: Eliminados ${args[1]} monedas\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    });
};


module.exports.help = {
  name:"removemoney",
  aliases: ["rme"]
}
