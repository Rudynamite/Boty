	} if (message.content == "b!help") {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#1daadf')
			.setAuthor("Need help ?", "https://imgur.com/K4OQ2Eb.png")
			.setThumbnail('https://imgur.com/K4OQ2Eb.png')
			.addFields(
				{ name: 'Commands:', value: '`b!help commands`'},
				{ name: 'Moderations:', value: '`b!help moderations`'},
				{ name: 'Links:', value: '\n\n[Invite me](https://discordapp.com/api/oauth2/authorize?client_id=656884187151728671&permissions=1916267615&scope=bot)\n[Discord server](https://discord.gg/PM8XQrE)'},
			)

		message.channel.send(exampleEmbed);

	}
