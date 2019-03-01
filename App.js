// Require Packages
const discord = require('discord.js');
const client = new discord.Client();
const { token } = require('./config.json');
const fs = require('fs');

// Import Commands
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Variables
const prefix = '!'; // Command Prefix

client.login(token);

client.on('ready', () => {
    client.user.setActivity('My Developer', { type: 'LISTENING' }); // Set Client Status
    console.log('Connecting as ' + client.user.tag + ' in ' + client.guilds.size + ' server(s)');
});

client.on('message', msg => {
    if (msg.author.bot) return; // Ignores Messages From Other Bots
    
    // Define Command Args
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    // Commands
    if (command === 'ping') { // Pings the bot
        client.commands.get('ping').execute(msg);
    }
});