const { Double } = require("bson");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: false});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Misil470:Mikelsilva0@cluster0.pgzic.gcp.mongodb.net/prueba?retryWrites=true&w=majority');
  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
const User = new mongoose.Schema({
  id: String,
  name: String,
  money: Number
});
const Usuario = mongoose.model('prueba', User);
const prefix = "!";
client.on('ready', () => {
   console.log(`Estoy listo!`);
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      client.aliases.set(alias, props.help.name);
  
  });
});
})
client.on('message', (message) => {
  if(message.author.bot) return;
if (message.content.startsWith(prefix+"enter")) {
  if (Usuario.find({ id: message.author.id} == message.author.id)){
    message.reply("Usuario ya registrado")
  } else {
  const Nuevo = new Usuario({ id: message.author.id,name: message.author.username,money: 0 });
Nuevo.save(function (err, Nuevo) {
  if (err) return console.error(err);
  message.reply("Usuario Registrado correctamente");
});
}
}

  if(message.content.startsWith('ping')) {
    message.channel.send(`pong 🏓!!`);
  }
  if (message.content.startsWith(prefix+"add"))
    Usuario.updateOne({ name:message.author.username},{money:+500}, function(err, res) {
    });
    const bal = Usuario.find({money: {name: message.author.username}});
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Añadidas ${500} monedas\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    console.log(bal);

});
client.login('NjUzMDQ0MTYyODY5OTg1Mjgw.XexQxQ.TiiRxg6shKDfjt5vr41aravX6jw');