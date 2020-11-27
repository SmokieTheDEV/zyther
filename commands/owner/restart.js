const { BOT_OWNER, BOT_TOKEN, BOT_PREFIX } = process.env;

module.exports = {
	name: 'restart',
	category: 'owner',
	description: 'Restarts the bot.',
	aliases: ['reload'],
	usage: 'restart',
	run: async (client, message, args) => {
		if(message.author.id !== BOT_OWNER) {
			return message.channel.send(
				':x: You must have the following permissions to use that: Bot Owner.',
			);
		}
		else{
			try {
				message.channel.send('Restarting...').then(msg => msg.delete({ timeout: 300 }))
					.then(() => client.destroy())
					.then(() => client.login(BOT_TOKEN))
					.then(() => client.user.setActivity(`${BOT_PREFIX}help | ${client.commands.size} Commands`, { type: 'PLAYING' }))
					.then(() => message.channel.send('Restart Successful'));
			}
			catch(e) {
				message.channel.send(`ERROR: ${e.message}`);
			}
		}

	},
};