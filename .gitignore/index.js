const Discord = require('discord.js')
const bot = new Discord.Client()

const PREFIX = "^";

bot.on('ready', function () {
    bot.user.setGame('^help').catch(console.error)
    console.log("je suis prêt !")
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur the Devil ' + member.displayName);
    }).catch(console.error)
});

bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('Au revoir' + member.displayName + 'Tu va nous manquer');
    }).catch(console.error)
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^hello') {
            message.reply('hello !');

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^pub') {
            message.channel.send('₪₪₪₪₪₪₪[ The devil of the death]₪₪₪₪₪₪₪\n' +
                '\n' +
                '```The devil of the death est un serveur discord, basé sur l automatisme et l\'entente , réunissant une communauté autour de sujets divers et variés. Nous acceptons tout type de personne, peut importe son genre et son âge. Notre but est vraiment la création de liens et d’une convivialité sincère et durable, mettre en valeur chaque membres et les faires s entendre```\n' +
                '\n' +
                '__Voici les points forts de ce serveur :__\n' +
                '\n' +
                '``⇒  Une communauté grandissante``\n' +
                '``⇒  Divers salons pour tout types de personnes ``\n' +
                '``⇒  Différentes animations et plein d\'idée à apporter ``\n' +
                '``⇒  Une partie RP pour ceux qui aime sa ``\n' +
                '``⇒  Une équipe organisée, motivée et présente``\n' +
                '``⇒  Différents rôles ayant chacun une utilité qui lui est propre``\n' +
                '``⇒des bots configurer pour gèrer le serveur seul``\n' +
                '``⇒Son propre Bot``\n' +
                '------------------------------------------\n' +
                '__**le lien si tu souhaite nous rejoindre :**__\n' +
                'https://discord.gg/wPRQECs \n' +
                'Nous te conseillons de venir nous rejoindre et t\'ammuser avec nous !\n' +
                '------------------------------------------');

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^on') {
            message.channel.send('Je suis prêt !')
        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^skribbl.io') {
            message.channel.send('https://skribbl.io/')
        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^youtube') {
            message.channel.send('https://www.youtube.com/')
        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^vieltos4') {
            message.channel.send('Pris par la plus belle des filles **ne pas toucher**')
        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^clem') {
            message.channel.send('La meilleure des amies')
        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^help') {
            message.channel.send(' **mes commandes: ^citron,^ping,^on,^hello,^rank,^google,^lovecalc,^bonne nuit,^skribbl.io,^youtube,^sky,^pub**')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^ping') {
            message.channel.send(' **Pong!**');

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^citron') {
            message.reply('*Je toffre un citron !*')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^rank') {
            message.reply('**rank lvl mee6 :** https://mee6.xyz/leaderboard/419206726781370371')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^google') {
            message.reply('https://www.google.fr/')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^voltrod') {
            message.channel.send('C est le petit ami de sky !!' + ' et c est le plus moche des gars de la terre on se demande comment on peut l aimer')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^sky') {
            message.reply('__**Pas touche à elle!!**__ elle fait parti de la __TDP!!__')

        }
    }
});

bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^lovecalc') {
            message.channel.send('faites l amour pas la guerre ! Les capotes coûtent moins cher que les balles !')

        }
    }
});


bot.on('message', message => {
    if (message.content[0] === PREFIX) {
        if (message.content === '^bonne nuit') {
            message.reply('vas se coucher soutait lui bonne nuit @here !')

        }
    }
});

bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `^mute`) {

        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Joueur INTROUVABLE");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peux pas faire ça !");
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être mute !");

        if(kReason === null) {
            kReason = "none";
        }
        let kickEmbed = new Discord.RichEmbed()
            .setDescription("~Mute~")
            .setColor("#1142e5")
            .addField("Joueur Mute", `${kUser} with ID ${kUser.id}`)
            .addField("Mute par", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Mute dans", message.channel)
            .addField("Temps", message.createdAt)
            .addField("Raison", kReason);

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if (!kickChannel) return message.channel.send("Channel inconnu.");

        let role= message.guild.roles.find("name", "Muted");
        kUser.addRole(role).catch(console.error);
        return;
    }

});

bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `^unmute`) {

        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Joueur INTROUVABLE");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peux pas faire ça !");
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être unmute !");

        if(kReason === null) {
            kReason = "none";
        }
        let kickEmbed = new Discord.RichEmbed()
            .setDescription("~UnMute~")
            .setColor("#62e501")
            .addField("Joueur UnMute", `${kUser} with ID ${kUser.id}`)
            .addField("UnMute par", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("UnMute dans", message.channel)
            .addField("Temps", message.createdAt)
            .addField("Raison", kReason);

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if (!kickChannel) return message.channel.send("Channel inconnu.");

        let role= message.guild.roles.find("name", "Muted");
        kUser.removeRole(role).catch(console.error);
        return;
    }

});

bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `^kick`) {

        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Joueur INTROUVABLE CONNARD DE MERDE!");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peux pas faire ça FDP !");
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kick FDP");

        if(kReason === null) {
            kReason = "none";
        }
        let kickEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#e56b00")
            .addField("Joueur kick", `${kUser} with ID ${kUser.id}`)
            .addField("Kick par", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kick dans", message.channel)
            .addField("Temps", message.createdAt)
            .addField("Raison", kReason);

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if (!kickChannel) return message.channel.send("Channel inconnu.");

        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);

        return;
    }

    if (cmd === `^ban`) {

        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!bUser) return message.channel.send("Mec introuvable !");
        let bReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("TU PEUX PAS FAIRE SA !");
        if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être Ban !");

        if(bReason === null) {
            bReason = "none";
        }

        let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor("#bc0000")
            .addField("Joueur Banni", `${bUser} with ID ${bUser.id}`)
            .addField("Banni par", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banni dans", message.channel)
            .addField("Temps", message.createdAt)
            .addField("Raison", bReason);

        let incidentchannel = message.guild.channels.find(`name`, "logs");
        if (!incidentchannel) return message.channel.send("Channel inconnu.");

        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);

        return;
    }

});




bot.login('NDQ4MjEwMzg2NDIwODkxNjUw.DeXZAA.HXRgFveMXj-sr-U1_7fLIPlg0O8')




