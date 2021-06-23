var http = require("http");

function startKeepAlive() {
  setInterval( function() {
    var options = {
      host:'https://kotoribot13.herokuapp.com',
      port: 80,
      path: '/'
    };
    http.get(options, function(res) {
      res.on('data', function(chunk) {
      try {
        console.log("HEROKU RESPONSE: " + chunk);
      } catch (err) {
        console.log(err.message);
      }
    });
  }).on('error', function(err) {
    console.log("Error: " + err.message);
  });
},20 * 60 * 1000);
}
startKeepAlive();

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(request, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});
const { Double } = require("bson");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: false});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Misil470:mikelsilva0@cluster0.pgzic.gcp.mongodb.net/Primera?retryWrites=true&w=majority');
  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
const User = new mongoose.Schema({
  id: String,
  name: String,
  money: Number,
  daily: Number,
  weekly: Number,
  work: Number
});
const character = new mongoose.Schema({
  name: String,
  surname: String,
  description: String,
  age: Number,
  genre: String,
  series: String,
  picture: String,
  atributtes: {attack: Number, defense: Number, speed: Number, salud: Number},
  special1: {name: String, description: String, power: Number}
});
const Personaje = mongoose.model('Personaje', character);
const Usuario = mongoose.model('Usuarios', User);
let prefix = "!";
client.on('ready', () => {
   console.log(`Estoy listo!`);
   client.user.setPresence({
    game: { name: 'Alpha 1 !help para comandos' },
    status: 'online',
   });
});
module.exports = {Usuario, Personaje};

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
client.on('message', (message) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let commandfile;

  if (client.commands.has(cmd)) {
    commandfile = client.commands.get(cmd);
} else if (client.aliases.has(cmd)) {
  commandfile = client.commands.get(client.aliases.get(cmd));
}

    if (!message.content.startsWith(prefix)) return;

        
try {
  commandfile.run(client, message, args);

} catch (e) {
}}
)
})
client.login('NjQ4MjU3MjIwNTI5ODgxMDg5.XdrmlQ.3JWFT-1LmWtt8PydcGpDZgTkNBw');