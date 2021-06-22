const Discord = require("discord.js");

module.exports.run = async (client, message,args) => {
    if(!message.content.startsWith('!'))return;
    var d = new Date(Date.now());
    let helpEmbed = new Discord.MessageEmbed()
    .setColor("Random")
    .setTitle("Comandos KotoriBot")
    .setImage(user.avatarURL())
    .addField("!enter" ,"Este comando sirve para registrarse) si no has utilizado el comando no podras utilizar otros comandos de el bot")
    .addField("!balance","Con este comando puedes consultar el dinero que tienes")
    .addField("!daily" ,"Con este comando recibiras una recompensa cada 24 horas")
    .addField("!weekly","Con este comando recibiras una recompensa cada 7 dias")
    .addField("!roulette", "Una ruleta para la gente que le gusta perder todo su dinero, o no")
    .addField("!work", "Con este comando puedes trabajar para ganar monedas cada hora")
    .addField("Proximamente mas comandos", "proximamente")
    .setFooter(message.author.username+"  |  "+d.toString());
    message.channel.send(helpEmbed);
}
module.exports.help = {
    name:"help",
    aliases: ["h"]
}