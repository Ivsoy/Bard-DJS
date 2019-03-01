// Require Packages
const discord = require('discord.js');
const client = new discord.Client();
const { token } = require('./config.json');

// Client Login
client.login(token);

// Client Startup Process
client.on('ready', () => {
    // Set Client Status
    client.user.setActivity('My Developer', { type: 'LISTENING' });
    console.log('Connecting as ' + client.user.tag + ' in ' + client.guilds.size + ' server(s)');
});

// Global Commands
client.on('message', msg => {
    // Ignore Commands From Bots
    if (msg.author.bot) return;
});