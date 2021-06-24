const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client , message , args) => {
if (!message.content.startsWith("!"))return;
let Usuario = index.Usuario;
function ShowUser() {
    return Usuario.findOne({id: message.author.id});
}
ShowUser().then(results => {
if (!results) {
    message.channel.send("No te has registrado");
}
console.log(args[0]);
if (args[0]== "Ticket") {
    Usuario.updateOne({id:message.author.id},{$inc: {money:-1000} }, function(err, res) {});
    Usuario.updateOne({id:message.author.id},{$inc: {tickets:+1}}, function(err, res){});
    message.channel.send(":white_check_mark: Ticket agregado correctamente");
}
else {
    message.channel.send("El articulo no existe");
}
});
}

module.exports.help = {
    name:"comprar",
    aliases:["c"]
}