const Discord = require("discord.js");
const index = require("./../index.js");
let Personaje = index.Personaje;
class Character {
    constructor(attack1,defense1,speed1,life1,power1) {
        this.attack = attack1;
        this.defense = defense1;
        this.speed = speed1;
        this.life = life1;
        this.power = power1;
    }
}
module.exports.run = async (client, message, args) => {
if (!message.content.startsWith("!"))return;
Personaje.findOne({name : args[0]}).then(results =>{
    if (!results)message.reply("el personaje no existe");
if (results.owner != message.author.id)message.reply("Ese personaje no es tuyo");
personaje = new Character(results.atributtes.attack,results.atributtes.defense,results.atributtes.speed,results.atributtes.salud,results.special1.power);
Personaje.countDocuments().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
  
    // Again query all users but only fetch one offset by our random #
    Personaje.findOne().skip(random).then(
     results1 => {
        personaje1 = new Character(results1.atributtes.attack,results1.atributtes.defense,results1.atributtes.speed,results1.atributtes.salud,results1.special1.power);
         let embed = new Discord.MessageEmbed()
    .setDescription(results.name+" "+results.surname)
    .setColor("Random")
    .setImage(results.picture)
    .addField("Atributos","Ataque:"+personaje.attack+"\nDefensa:"+personaje.defense+"\nVelocidad:"+personaje.speed+"\nSalud:"+personaje.life)
    .setTimestamp()
    .setFooter(results.description);
    let embed1 = new Discord.MessageEmbed()
    .setDescription(results1.name+" "+results1.surname)
    .setColor("Random")
    .setImage(results1.picture)
    .addField("Atributos","Ataque:"+personaje1.attack+"\nDefensa:"+personaje1.defense+"\nVelocidad:"+personaje1.speed+"\nSalud:"+personaje1.life)
    .setTimestamp()
    .setFooter(results1.description);
    message.channel.send(embed);
    message.channel.send("**VS**");
    message.channel.send(embed1);
    message.channel.send("**COMENZANDO BATALLA**");
    let turno = 0;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    let random;
    let random1;
    let daño = personaje.attack-personaje1.defense;
    let daño1 = personaje1.attack-personaje.defense;
    let critico = daño*2;
    let critico1 = daño1*2;
    console.log(critico);
    while (personaje.life >1 || personaje1.life >1) {
        turno++;
        daño = personaje.attack-personaje1.defense;
        daño1 = personaje1.attack-personaje.defense;
        random = getRandomInt(0, 5);
        random1 =getRandomInt(0, 5);
        if (personaje.life<0 || personaje1.life<0)break;
        console.log(turno);
        if (personaje.speed > personaje1.speed) {
            if (random ==1){
                daño = critico;
            message.channel.send("**CRITICO** de "+results.name)}
            else if(random == 2) {
                daño = 0;
                message.channel.send("ataque de "+results1.name+" **EVITADO**")
            }
            if ( random1 ==1) {
                daño1 = critico1;
                message.channel.send("**CRITICO** de "+results1.name)}
            else if(random1 == 2) {
                daño1 = 0;
                message.channel.send("ataque de "+results.name+" **EVITADO**")
            }
            console.log(daño);
            message.channel.send("**Turno** "+turno+"\n"+results.name+" ha hecho "+daño+" a "+results1.name+"\nVida restante: "+personaje1.life);
            personaje1.life-=daño;
            message.channel.send("**Turno** "+turno+"\n"+results1.name+" ha hecho "+daño1+" a "+results.name+"\nVida restante: "+personaje.life);
            personaje.life-=daño1;
    }
        else {
            if (random ==1){
                daño = critico;
            message.channel.send("**CRITICO** de "+results.name)}
            else if(random == 2) {
                daño = 0;
                message.channel.send("ataque de "+results1.name+" **EVITADO**")
            }
            if ( random1 ==1) {
                daño1 = critico1;
                message.channel.send("**CRITICO** de "+results1.name)}
            else if(random1 == 2) {
                daño1 = 0;
                message.channel.send("ataque de "+results.name+" **EVITADO**")
            }
            console.log(daño);
            message.channel.send("**Turno** "+turno+"\n"+results1.name+" ha hecho "+daño1+" a "+results.name+"\nVida restante: "+personaje.life);
            personaje.life-=daño1;
            message.channel.send("**Turno** "+turno+"\n"+results.name+" ha hecho "+daño+" a "+results1.name+"\nVida restante: "+personaje1.life);
            personaje1.life-=daño;
        }
    }
        if (personaje.life<1 && personaje1.life>1) {
            message.channel.send("**ENHORABUENA** Ha ganado "+results1.name);
        }
        else if (personaje1.life<1 && personaje.life >1) {
            message.channel.send("**ENHORABUENA** Ha ganado "+results.name);
        }
     });
    });
    });
}
module.exports.help = {
    name: "battle",
    aliases: ["b"]
}