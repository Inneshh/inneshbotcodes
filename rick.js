const rick = require("aoi.js");
const bot = new rick.Bot({
  token: process.env["token"],
  prefix: "?",
  fetchInvites: true
});

bot.loadCommands("./komutlar");

bot.onMessage();
bot.onJoined();
bot.onLeave();

bot.variables({
  çmesaj:"📤 -invitee- Sunucumuzdan Ayrıldı Onu -inviter- Davet Etti.Gerçek Davet Sayısı \`\-realİnvite-\`\ Sahte Davet Sayısı \`\-fakeİnvite-\`\.\`\-toplamÜyeSayısı-\`\ Kişi Olduk",
  gmesaj:"-invitee- Serverə Qatıldı! -inviter- Tərəfindən Dəvət Edildi.-realİnvite- Dəvəti Oldu.",
  invitekanal:""
}) 

bot.readyCommand({
  channel:"",
  code:`
  $log[$userTag[$clientID] İsmiyle Giriş Yapıldı
  `
  })



bot.status({
  text: "Rick Code https://discord.gg/5hTJHwtUYd",
  type: "COMPETING",
  status: "dnd",
  time: 12
});

bot.status({
  text: "Rick-Code",
  type: "COMPETING",
  status: "dnd",
  time: 12
});


bot.awaitedCommand({
  name:"invitesil",
  code:`
  $replaceText[$resetInvites[$guildID;$authorID;true;;-1];false;;-1]
  
  `
  }) 




bot.joinCommand({
  channel:"$getServerVar[invitekanal]",
  code:`
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getSferverVar[gmeaj];-invitee-;<@$authorID>;-1];-inviter-;$username[$userInfo[inviter]];-1];-toplamÜyeSayısı-;$membersCount;-1];-realİnvite-;$userInfo[real;$userInfo[inviter]];-1];-fakeİnvite-;$userInfo[fake;$userInfo[inviter]];-1];-toplamDavet-;$math[$userInfo[fake;$userInfo[inviter]]+$userInfo[real;$userInfo[inviter]]];-1]
  $suppressErrors[<@$authorID> Serverə Qatıldı Ama Kim Dəvət Etdiyini Tapa Bilmirəm!]`
  })

bot.leaveCommand({
  channel:"$getServerVar[invitekanal]",
  code:`
  
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[çmesaj];-invitee-;$userTag[$authorID];-1];-inviter-;$username[$userInfo[inviter]];-1];-toplamÜyeSayısı-;$membersCount;-1];-realİnvite-;$userInfo[real;$userInfo[inviter]];-1];-fakeİnvite-;$userInfo[fake;$userInfo[inviter]];-1]-toplamDavet-;$math[$userInfo[fake;$userInfo[inviter]]+$userInfo[real;$userInfo[inviter]]];-1]
  $suppressErrors[Üzgünum $userTag[$authorID] Ama Seni Kimin Davet Ettiğini Bulamıyorum]
  `
  }) 
