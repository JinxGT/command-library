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
		.setColor('RANDOM')
		.setTitle('KICKED')
		.setDescription("That user was kicked!")
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
    })
} else {
    const exampleEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('ERROR')
		.setDescription("Uknown User!")
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
}
    } else {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('ERROR')
		.setDescription("Please mention a user!")
		.setTimestamp()
			
		message.channel.send(exampleEmbed);
    }}})
