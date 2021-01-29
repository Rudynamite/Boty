	}
  if (message.content == "b!amongus-start") {
		message.channel.send("Player online: "+message.guild?.memberCount+"/10").then(
			message.channel.send("Starting in 10").then(amongUS => {
				setTimeout(() => {
					amongUS.edit("Starting in 9")
				}, 1000)
				setTimeout(() => {
					amongUS.edit("Starting in 8")
				}, 2000)
				setTimeout(() => {
					amongUS.edit("Starting in 7")
				}, 3000)
				setTimeout(() => {
					amongUS.edit("Starting in 6")
				}, 4000)
				setTimeout(() => {
					amongUS.edit("Starting in 5")
				}, 5000)
				setTimeout(() => {
					amongUS.edit("Starting in 4")
				}, 6000)
				setTimeout(() => {
					amongUS.edit("Starting in 3")
				}, 7000)
				setTimeout(() => {
					amongUS.edit("Starting in 2")
				}, 8000)
				setTimeout(() => {
					amongUS.edit("Starting in 1")
				}, 9000)
			})
		).then(
			setTimeout(() => {
				const embed = new Discord.MessageEmbed()
				.setTitle("Shhhhhhh!")
				.setImage("https://external-preview.redd.it/4HFjIVKcPb4zfsEGpkoOnpIvMY4erBqi0W0gv3V1LG8.png?auto=webp&s=3df38d127ac8009892ba0aabd6c970288ba65b4c")
				
				message.channel.send(embed);
			}, 11000)
		).then(
			setTimeout(() => {
				message.author.send("You are: "+among[Math.floor(Math.random() * among.length)]).then(message.channel.send("Check your role in DM!"))
			}, 13000)
		)

		
	}
