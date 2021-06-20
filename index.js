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
  daily: Number
});
const Usuario = mongoose.model('Usuarios', User);
let prefix = "!";
client.on('ready', () => {
   console.log(`Estoy listo!`);
});
module.exports = {Usuario};

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
)})

client.login('NjUzMDQ0MTYyODY5OTg1Mjgw.XexQxQ.vT0K3FK0Smm4JIbh_dxit5Pg1tU');