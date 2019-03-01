module.exports = {
    name: 'ping',
    description: 'Ping the bot.',
    execute(msg) {
        msg.channel.send('Pong!');
    },
};