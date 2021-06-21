const Discord = require("discord.js");
const index = require("./../index.js");
module.exports.run = async (client, message, args) => {
let Usuario =index.Usuario;
 if(!message.content.startsWith('!'))return;  
 function ShowUser() {
  return Usuario.findOne({id: message.author.id});
}
ShowUser().then(results => {
  console.log(results);
    if (results.name == message.author.username){
      message.reply("Usuario ya registrado")
    } else {
      const Nuevo = new Usuario({ id: message.author.id,name: message.author.username,money: 0,daily: 0 });
      Nuevo.save(function (err, Nuevo) {
        if (err) return console.error(err);
        message.reply(":white_check_mark: Usuario Registrado correctamente");
      });
  }
});
}
  module.exports.help = {
    name:"enter",
    aliases: ["en"]
  }