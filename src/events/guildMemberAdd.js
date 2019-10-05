const client = require('../singletons/client.js');
const db = require('../database/index.js');
const AutoModerationService = require('../services/AutoModerationService.js');

client.on('guildMemberAdd', async (member) => {
    (async () => {
        const dbGuild = await db.guildRepo.getGuild(member.guild.id);
        if (dbGuild.autoMod.antiad) {
            AutoModerationService.antiAdvertisingUsername(dbGuild, member, member.guild, member.user.username);
        }
    })().catch((err) => {
        console.log(err);
    })
});