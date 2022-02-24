const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code,
        aliases: command.aliases
    })
}
////////// STATUS \\\\\\\\\\
bot.status({
    text: "https:discord.gg/wuCZ92GbQ5",
    type: "PLAYING",
    status: "online",
    time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",
  banhammer:"938497922264363058",
  mutehammer:"938498084470665226",
  muterol:"933470691867652186",
  mute:"no",
  jailhammer:"938497924701224991",
  jailrol:"933470690861019176",
  jail:"no",
  abonehammer:"938499987170525196",
  abonerol:"934365645175414825",
  üyerol:"933350040125177856",
  tavsiyelog:"938511980539572254",
  vip:"933350040091652156",
  afk:"no",
  afksayı:"0",
  afksebep:"",
  öokategori:"933349179474980885",
  öokanal:"938508488567582720",
  özeloda:"no",
  özelodakurucu:"",
  ticket:"0",
  ticketk:"938509242036531210",
  ticketk2:"938509576326750288",
  tmesaj1:"-etiket-",
  tmesaj2:"-etiket- Bir yetkili gelip seninle ilgilenicek",
  yisim:"",
  yyaş:"",
  yaktiflik:"",
  ybsy:"",
  ykütüphane:"",
  durum1:"no",
  durum2:"no",
  durum3:"no",
  durum4:"no",
  ylog:"938508411732099152",
  ykategori:"938509576326750288",
  yrol:"938499992245653535",
  snipe1:"",
  snipe2:"",
  snipe3:"",
  cross:"<:cross:933357317263609877>",
  tick:"<:tick:933357259092820048>"
  })

////////// COMMANDS \\\\\\\\\\

//Dm all
bot.awaitedCommand({
  name:"parzi",
  code:`
  $sendDM[$authorID;__$customEmoji[announcement] Bu bir duyurudur, reklam değil!__
  
$message]
$suppressErrors
  `
  })


//Ses afk
bot.readyCommand({
channel:"parzi",
code:`
$log[Ses kanalına başarıyla girdim.]
$wait[1s]
$log[$userTag[$clientID] adıyla aktifim.]
$djsEval[client.channels.cache.get("938512307246473216").join()]
`
}) 


//Hoşgeldin
bot.joinCommand({
  channel:"parzi",
  code:`
  $if[$sub[$datestamp;$creationdate[$authorID;ms]]<$multi[$multi[$multi[$multi[7;24];60];60];1000]]
  $sendDM[$authorID;**$serverName** sunucusundan " Yeni Hesap " sebebinden otomatik banlandın.]
  $ban[$authorID;Yeni hesap - ( $authorID )]
  $else
  $channelSendMessage[933354233372221500;<@$authorID>{delete:5s}]
  $channelSendMessage[933371867836850228;<@$authorID>{delete:5s}]
  $giveRoles[$authorID;$getServerVar[üyerol]]
  $endif
  $onlyIf[$getUserVar[jail;$authorID]!=yes;{execute:jail}]
  $onlyIf[$getUserVar[mute;$authorID]!=yes;{execute:mute}]
  $onlyIf[$isBot[$authorID]==false;]
  `
  })

bot.awaitedCommand({
  name:"jail",
  code:`
  $giveRoles[$authorID;$getServerVar[jailrol]]
  `
  })

bot.awaitedCommand({
  name:"mute",
  code:`
  $giveRoles[$authorID;$getServerVar[muterol]]
  `
  })

////////// GUARD \\\\\\\\\\

//Reklam engel
bot.command({
name:"$alwaysExecute",
code:`
$author[$userTag uyarıldı!;$authorAvatar]
$description[<@$authorID> Bu sunucuda link yasak]
$color[BLACK]
$thumbnail[$authorAvatar]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];https://;discord.gg/;.gg/;gg/]==true;]
$onlyIf[$hasPerms[$authorID;admin]==false;]
`
})

bot.updateCommand({
channel:"$channelID",
code:`
$author[$userTag uyarıldı!;$authorAvatar]
$description[<@$authorID> Bu sunucuda link yasak]
$color[BLACK]
$thumbnail[$authorAvatar]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];https://;discord.gg/;.gg/;gg/]==true;]
$onlyIf[$hasPerms[$authorID;admin]==false;]
`
}) 

//Raid engel
bot.command({
  name:"$alwaysExecute",
  code:`
  $onlyIf[$mentionedUsersCount<=5;{execute:raid}]
  $onlyIf[$mentioned[1]!=;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  `
  })

bot.awaitedCommand({
  name:"raid",
  code:`
  $setUserVar[jail;yes;$authorID]
  $setRoles[$authorID;$getServerVar[jailrol]]
  $channelSendMessage[$channelID;{author:Üye jaile atıldı!:$authorAvatar}{description:<@$authorID> adlı üye 5'den fazla etiket attığı için otomatik jaile atıldı}{color:BLACK}{thumbnail:$authorAvatar}]
  $clear[10]
  `
  })


////////// LOG \\\\\\\\\\

//Üye log
bot.joinCommand({
  channel:"933378353359122432",
  code:`
 $author[$userTag;$authorAvatar]
 $description[📥 <@$authorID> Sunucuya katıldı.]
 $footer[ID: $authorID $addTimestamp]
 $thumbnail[$authorAvatar]
 $color[BLACK]
 `
  })
bot.onJoined()

bot.leaveCommand({
  channel:"933378353359122432",
  code:`
  $author[$userTag;$authorAvatar]
  $description[📤 <@$authorID> Sunucudan ayrıldı.]
  $footer[ID: $authorID $addTimestamp]
  $thumbnail[$authorAvatar]
  $color[BLACK]
  `
  })
bot.onLeave()

//Ban log
bot.banAddCommand({
  channel:"933355390404530277",
  code:`
  $author[$userTag;$authorAvatar]
  $description[🔒 <@$authorID> Sunucudan yasaklandı.
  
Sebep: **$getBanReason[$authorID]**]
  $footer[ID: $authorID $addTimestamp]
  $thumbnail[$authorAvatar]
  $color[BLACK]
  `
  })
bot.onBanAdd()

bot.banRemoveCommand({
  channel:"933355390404530277",
  code:`
  $sendDM[$authorID;**$serverName** sunucusundan banın açıldı. https://discord.gg/FSFxzCXRFs]
  $author[$userTag;$authorAvatar]
  $description[🔓 <@$authorID> Yasağı kaldırıldı.]
  $footer[ID: $authorID $addTimestamp]
  $thumbnail[$authorAvatar]
  $color[BLACK]
  `
  })
bot.onBanRemove()

//Mesaj log
bot.deletedCommand({
  channel:"933355219818008696",
  code:`
  $setServerVar[snipe3;$message]
  $setServerVar[snipe2;$channelUsed]
  $setServerVar[snipe1;$authorID]
  $author[$userTag;$authorAvatar]
  $description[🗑️ <@$authorID> Bir mesaj sildi.
  
Silinen Mesaj: **$message**]
$footer[ID: $authorID $addTimestamp]
$thumbnail[$authorAvatar]
$color[BLACK]
$onlyIf[$isBot[$authorID]==false;]
`
  })
bot.onMessageDelete()

bot.updateCommand({
  channel:"933355219818008696",
  code:`
  $author[$userTag;$authorAvatar]
  $description[✍🏻 <@$authorID> Bir mesajı düzenledi.
  
Eski mesaj: **$oldMessage**
Yeni Mesaj: **$message**]
$footer[ID: $authorID $addTimestamp]
$thumbnail[$authorAvatar]
$color[BLACK]
  `
  })
bot.onMessageUpdate()

////////// TİCKET \\\\\\\\\\

bot.command({
  name:"$alwaysExecute",
  code:`
  $useChannel[$get[ticket]]
  $clear[1]
  $wait[1s]
  $setServerVar[ticket;$sum[$getServerVar[ticket];1]]
  $reactionCollector[$get[kapat];everyone;24d;$getServerVar[cross];eminmisin;yes]
  $pinMessage[$get[ticket];$get[kapat]]
  $let[kapat;$channelSendMessage[$get[ticket];$replaceText[$getServerVar[tmesaj1];-etiket-;<@$authorID>;-1]{description:
**$replaceText[$getServerVar[tmesaj2];-etiket-;<@$authorID>;-1]**

**Ticket'ı açarken şu mesajı girdin:** $message

**Ticket'ı kapatmak için aşşağıdaki $getServerVar[cross] tepkisine basınız ya da \`.ticket-kapat\` kodunu giriniz.**}{color:BLACK};yes]]
  $modifyChannelPerms[$get[ticket];-viewchannel;$guildID]
  $let[ticket;$newTicket[・newticket・$sum[$getServerVar[ticket];1];.{delete:1s};$getServerVar[ticketk2];yes;$getServerVar[cross] **!!HATA!!**]]

  $wait[1s]
  $deletecommand     
  $onlyForChannels[$getServerVar[ticketk];]
`
})

bot.awaitedCommand({
  name: "eminmisin",
  code: `
  $reactionCollector[$get[id];$authorID;24d;$getServerVar[tick],$getServerVar[cross];evet,hayır;yes]
  $let[id;$channelSendMessage[$channelID;{description:
**Eğer Kapatmak İstiyorsanız $getServerVar[tick] Tepkisine Basınız.**
 
**Eğer Kapatmak İstemiyorsanız $getServerVar[cross] Tepkisine Basınız.**}{color:BLACK};yes]]
 `
})

bot.awaitedCommand({
  name: "evet",
  code: `
  $channelSendMessage[$channelID;🔒 **Sayın Yetkililer Ticket Kullanıcıya Kapatılmıştır Lütfen \`.ticket-sil\` komudunu kullanın.**]
  $wait[1s]
  $modifyChannelPerms[$channelID;-viewchannel;-sendmessages;$authorID]
  $wait[3s]
  $channelSendMessage[$channelID;$getServerVar[tick] Ticket 3 saniye içerisinde kullanıcıya kapanacak!;no]
 `
})

bot.awaitedCommand({
  name: "hayır",
  code: `
  $channelSendMessage[$channelID;$getServerVar[tick] İşlem iptal edildi.;no]
 `
}) 

bot.command({
  name:"ticket-sil",
  code:`
  $closeTicket[$getServerVar[cross] Hata! Ticket'ı Kapatamadım!]
  $wait[3s]
  $channelSendMessage[$channelID;$getServerVar[tick] <@$authorID>, Ticket 3 saniye içerisinde silinicek!;no]
  $onlyIf[$hasPerms[$authorID;admin]!=false;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  $onlyIf[$isTicket[$channelID]!=false;$getServerVar[cross] <@$authorID>, Burası ticket kanalı değil.]
`
})

bot.command({
  name:"ticket-kapat",
  code:`
  $reactionCollector[$get[id];$authorID;24d;$getServerVar[tick],$getServerVar[cross];evet1,hayır1;yes]
  $let[id;$channelSendMessage[$channelID;{description:
**Eğer Kapatmak İstiyorsanız $getServerVar[tick] Tepkisine Basınız.**
 
**Eğer Kapatmak İstemiyorsanız $getServerVar[cross] Tepkisine Basınız.**}{color:BLACK};yes]]
 `
})

bot.awaitedCommand({
  name: "evet1",
  code: `
  $channelSendMessage[$channelID;🔒 **Sayın Yetkililer Ticket Kullanıcıya Kapatılmıştır Lütfen \`.ticket-sil\` komudunu kullanın.**]
  $wait[1s]
  $modifyChannelPerms[$channelID;-viewchannel;-sendmessages;$authorID]
  $wait[3s]
  $channelSendMessage[$channelID;$getServerVar[tick] Ticket 3 saniye içerisinde kapanacak!;no]
 `
})

bot.awaitedCommand({
  name: "hayır1",
  code: `
  $channelSendMessage[$channelID;$getServerVar[tick] İşlem iptal edildi.;no]
 `
}) 
