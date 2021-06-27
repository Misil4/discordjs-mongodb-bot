const Discord = require("discord.js");
const index = require("./../index.js");

module.exports.run = async (client, message, args) => {
    if (!message.content.startsWith("!"))return;
    let Personaje = index.Personaje;
    function ShowCharacter() {
        return Personaje.findOne({name: args[0]});
    }
    ShowCharacter().then(results => {
        if (!results) {
            message.channel.send("No hay informacion o has escrito mal el nombre");
        }
        else {
            if (!isNaN(results.surname)) {results.surname = "";}
            let embed = new Discord.MessageEmbed()
            .setTitle(results.name+" "+results.surname)
            .addField("Edad",results.age)
            .addField("Genero",results.genre)
            .addField("Anime",results.series)
            .addField("Stats:","Ataque: "+results.atributtes.attack+"\nDefensa: "+results.atributtes.defense+"\nVelocidad: "+results.atributtes.speed+"\nSalud: "+results.atributtes.salud)
            .addField("Ataque especial",results.special1.name)
            .addField("Descripción",results.special1.description)
            .addField("Dueño:",results.owner)
            .setImage(results.picture)
            .setColor("Random")
            .setTimestamp()
            .setFooter(results.description);
            message.channel.send(embed);
        }
    });
}
module.exports.help = {
    name: "mostrar",
    aliases: ["m"]
}