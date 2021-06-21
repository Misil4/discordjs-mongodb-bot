const Discord = require("discord.js");
const index = require("./../index.js");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let Usuario =index.Usuario;
  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
function ShowUser() {
  return Usuario.findOne({id: user.id});
}
ShowUser().then(results => {
let moneydb = results.money;

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`<:pepeke:624744464405102592>  Especifica cantidad | .ruleta *<color>* <amount>`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`<:takagi:621512195800563723> Estas apostando mas de lo que tienes`);

let colorbad = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`<:pepesunglassa:615363068716908554> Especifica un color | Rojo [1.5x] Negro [2x] Verde [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("negro")) colour = 0;
    else if (colour == "r" || colour.includes("rojo")) colour = 1;
    else if (colour == "g" || colour.includes("verde")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Verde
        money *= 15
        Usuario.updateOne({ id:user.id},{$inc: {money:+money}}, function(err, res) {
    });
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:shidatulaif:615963632039231580>  Has ganado ${money} monedas\n\nMultiplicador: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Ha ganado ${money} en el verde`)
    } else if (isOdd(random) && colour == 1) { // Rojo
        money = parseInt(money * 1.5)
        Usuario.updateOne({ id:user.id},{$inc: {money:+money}}, function(err, res) {
        });
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:shidatulaif:615963632039231580>  Has ganado ${money} monedas\n\nMultiplicador: 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Negro
        money = parseInt(money * 2)
        Usuario.updateOne({ id:user.id},{$inc: {money:+money}}, function(err, res) {
        });
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:shidatulaif:615963632039231580> Has ganado ${money} monedas\n\nMultiplicador: 2x`);
        message.channel.send(moneyEmbed3)
    } else { // Wrong
      Usuario.updateOne({ id:user.id},{$inc: {money:-money}}, function(err, res) {
      });
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:yo_no_saber:615375645966467102> Has perdido ${money} monedas\n\nMultiplicador: 0x`);
        message.channel.send(moneyEmbed4)
    }
  });
}

  
  module.exports.help = {
    name:"roulette",
    aliases: ["rl"]
  }