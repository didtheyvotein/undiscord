let token = 'YOUR TOKEN'
let prefix = "BACK US UP"
let history = 300000

const Discord = require("discord.js"),
backup = require("discord-backup"),
client = new Discord.Client()

backup.setStorageFolder(__dirname);
client.on("ready", () => {
  console.log("Ready.");
})

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;
  
  console.log("Backing up...");
  backup.create(message.guild, {jsonSave: true, jsonBeautify: true, saveImages: "base64", maxMessagesPerChannel: history}).then((backupData) => {
	message.author.send("The backup has been created! ID: " +backupData.id);
    message.channel.send(":white_check_mark: Backup successfully created.");
    console.log(backupData.id);
  });
});
client.login(token)
