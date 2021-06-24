const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args) => {
    let Usuario = index.Usuario;
    let Personaje = index.Personaje;
    let random = Math.random(0, 10);
if (!message.content.startsWith("!"))return;
Usuario.findOne({id:message.author.id}).then(results =>{
if (results.tickets < 1){message.channel.send("No tienes suficientes tickets");}
});
if (args[0] = "Ticket") {
    Usuario.updateOne({id: message.author.id},{$inc: {tickets:-1}},function(err, res){});
    Personaje.countDocuments().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
      
        // Again query all users but only fetch one offset by our random #
        Personaje.findOne().skip(random).then(
         results => {
            // Tada! random user
            console.log(results) 
            let embed = new Discord.MessageEmbed()
      .setDescription(results.name+" "+results.surname)
      .setColor("Random")
      .setImage(results.picture)
      .setTimestamp()        
      .setFooter(results.description);
        if (random == 1){
            message.channel.send("Has conseguido a\n\n"+embed);
            Personaje.updateOne({name:results.name},{owner:message.author.id},function(err, res){});
        }
        else {
            Usuario.updateOne({id: message.author.id},{$inc:{money:+500}},function (err, res){});
            message.channel.send("Has ganado 500 monedas");
        }
    })
    });
}
else {
    message.channel.send("El articulo no existe");
}
}
module.exports.help = {
    name: "usar",
    aliases: ["u"]

}