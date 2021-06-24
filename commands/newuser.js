const Discord = require("discord.js");
const index = require("./../index.js");
module.exports.run = async (client, message, args) => {
  let user = message.author;
let Usuario =index.Usuario;
 if(!message.content.startsWith('!'))return;  
 function ShowUser() {
  return Usuario.findOne({id: user.id});
}
ShowUser().then(results => {
  if (!results) {
      const Nuevo = new Usuario({ id: message.author.id,name: message.author.username,money: 0,daily: 0,weekly:0,work: 0,tickets: 0 });
      Nuevo.save(function (err, Nuevo) {
        if (err) return console.error(err);
        message.reply(":white_check_mark: Usuario Registrado correctamente");
      });
  }
  else if(results.name == message.author.username){
    message.reply("Usuario ya registrado")
  }
});
}
  module.exports.help = {
    name:"enter",
    aliases: ["en"]
  }