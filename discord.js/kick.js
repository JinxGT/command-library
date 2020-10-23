bot.on('message', message => {
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = arguments.shift().toLowerCase();
if (message.content.startsWith(prefix) && commandName == "kick") {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission to do that!");
    const userKick = message.mentions.users.first();

    if (userKick) {
        var member = message.guild.member(userKick);

        if (member) {
            member.kick({
                reason: `This person was kicked using a bot's moderation system. We are so sorry if this caused problems.`
    }).then(() => {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('Kicked')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("That user was kicked!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    })
} else {
    const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Uknown user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
}
    } else {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Bendy', 'https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setDescription('https://discord.com/oauth2/authorize?client_id=750547209002680431&scope=bot')
		.setDescription("Please mention a user!")
		.setThumbnail('https://media.discordapp.net/attachments/750544950860447764/756916779791679599/bendy_regular.jpg?width=294&height=294')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }}})
