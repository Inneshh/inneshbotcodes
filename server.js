const Aoijs = require("aoi.js");
const bot = new Aoijs.Bot({
  mobile: false,
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix", "n!"],
  fetchInvites: true
});

//callbackler
bot.onPresenceUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onLeave();
bot.onJoined();
bot.onBanAdd();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onMessage({
  respondToBots: true
});
bot.loadCommands(`./komutlar/`);

bot.status({
  text: "Innesh Bot by: $userTag[779961995322851328]",
  type: "STREAMING",
  status: "idle",
  time: "12"
});

bot.status({
  text: "discord.gg/ejDw8Zne3H",
  type: "STREAMING",
  status: "idle",
  time: "12"
});

bot.variables({
  //Variableler
  prefix: "n?",
  snipe: "",
  snipek: "",
  snipekk: "",
  otorol: "",
  mrol: "yok",
  dil: "tr",
  level: "0",
  rank: "",
  xp: "0",
  sxp: "500",
  sonrakixp: "500",
  levelsistemi: "bağlı",
  levellog: "",
  xpdeğer: "1",
  ID: "",
  reportk: "",
  saas: "bagli",
  afks: "",
  afk: "hayır",
  afkc: "0",
  umsg: "0",
  gkanal: "",
  çkanal: "",
  pul: "0",
  is: "issiz",
  afket: "0",
  tkat: "",
  tknal: "",
  tayar: "",
  tkat: "",
  saasacq: "",
  saas: "",
  otoroluye: "",
  otorolbot: "",
  otorole: "",
  otorolkanal: "",
  sayaçkanal: "0",
  dil: "tr",
  aid: "",
  bid: "",
  srvr: "",
  online: "",
  caps: "kapalı",
  capsyüzde: "",
  capslog: "",
  capsmuaf: "",
  capsmuafsayı: "0",
  link: "kapalı",
  levelacq: "yox",
  modlog: "",
  girmesaj:"",
  çıxışban:"bağlı",
  çıxışbanlog:"",
  lang:"az",
  color:"#ff00f6",
  help:""
  

});


bot.command({
  name:"prefix",
  code:`
  $if[$getServerVar[lang]==tr]
  $argsCheck[1;<:iKilidli:853542775265558548> Prefixi Değişmek Için: $getServerVar[prefix]prefix <yeniprefix>
    $setServerVar[prefix;$noMentionMessage]
     <:iVerifedServer:853560958886608946>  Artık Prefixim $noMentionMessage tir 
    $onlyPerms[admin;<:iKilidli:853542775265558548>  Sadece Admin]
    $onlyIf[$message!=;<:iKilidli:853542775265558548>  Bir Prefix Gir]
 $endif
 $if[$getServerVar[lang]==en]
  $argsCheck[1;<:iKilidli:853542775265558548> Do These To Change Prefix $getServerVar[prefix]prefix <newprefix>]
    $setServerVar[prefix;$noMentionMessage]
     <:iVerifedServer:853560958886608946> You Have Changed My prefix to $noMentionMessage
    $onlyPerms[admin;<:iKilidli:853542775265558548>  Only Admin]
    $onlyIf[$message!=;<:iKilidli:853542775265558548>  Type Prefix]
 $endif
 $if[$getServerVar[lang]==az]
      $argsCheck[1;<:iKilidli:853542775265558548>  Prefix Dəyişmək Üçün $getServerVar[prefix]prefix <yeniprefix>]
    $setServerVar[prefix;$noMentionMessage]
     <:iVerifedServer:853560958886608946>  Artıq Prefixim $noMentionMessage dır 
    $onlyPerms[admin;<:iKilidli:853542775265558548>  Sadəcə Admin]
    $onlyIf[$message!=;<:iKilidli:853542775265558548>  Bir Prefix yaz]
 $endif
  `
})  

bot.command({
  name: "ping",
  code: `
  <:iStatus:853562463601295360> Ping: $pingms`
});

bot.readyCommand({
  channel: "$840628883681181706",
  code: `
$log[Bot Aktivləşdirilir...]
$wait[1s]
$log[Varilablelər Yüklənir]
$wait[1s]
$log[Məlumatlar Yükləndi]
$wait[1s]
$log[Kommandlar Hazırlandı]
$wait[1s]
$log[Kommandalar Yüklənir]
$wait[1s]
$log[$username[$clientID] Bot Açıldı]
$wait[1s]`
});

bot.command({
  name: "cihaz",
  code: `<:iKomp:853562084541333524>  $username[$mentioned[1;yes]] Adlı İstifədəçi Discord a 
  $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;Telefon'dan;-1];desktop;Pc'dən;-1];none;Etiketlədiyiniz Adam Aktiv Deyil;-1];web;Brauzer'dən;-1] Girir`
});

bot.deletedCommand({
  channel: "$channelID",
  code: `
$setServerVar[snipek;$channelUsed]
$setServerVar[snipe;$message]
$setServerVar[snipekk;$authorID]
`
});

 bot.command({
  name: "snipe",
  code: `$if[$getServerVar[lang]==tr]
    $color[#ff00f6]
  $description[
 <:iMessage:853563406409400330> En Son Silinen Mesaj: $getServerVar[snipe]
  
 <:iOxSag:826405471287771176> Kanal : <#$getServerVar[snipek]>
  
 <:iOxSag:826405471287771176> kişi : <@$getServerVar[snipekk]> $username[$getServerVar[snipekk]]#$discriminator[$getServerVar[snipekk]]
  ]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Sadece Admin]
 $endif
 $if[$getServerVar[lang]==en]
    $color[#ff00f6]
  $description[
 <:iMessage:853563406409400330> The Last Deleted Message : $getServerVar[snipe]
  
 <:iOxSag:826405471287771176> Channel: <#$getServerVar[snipek]>
  
 <:iOxSag:826405471287771176> User: <@$getServerVar[snipekk]> $username[$getServerVar[snipekk]]#$discriminator[$getServerVar[snipekk]]
  ]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Only Admin]
 $endif
 $if[$getServerVar[lang]==az]
  $color[#ff00f6]
  $description[
 <:iMessage:853563406409400330> Ən Son Silinən Mesaj : $getServerVar[snipe]
  
 <:iOxSag:826405471287771176> Kanal: <#$getServerVar[snipek]>
  
 <:iOxSag:826405471287771176> Silən: <@$getServerVar[snipekk]> $username[$getServerVar[snipekk]]#$discriminator[$getServerVar[snipekk]]
  ]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Sadəcə Admin]
 $endif`})
 


bot.command({
  name: "$alwaysExecute",
  code: `$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getUserVar[xpdeğer;$authorID]];$authorID]
  $onlyIf[$getServerVar[levelsistemi]!=bağlı;]`
});
bot.command({
  name: "$alwaysExecute",
  code: `
   <a:icekilis:826404502269067285> Səviyə Keçildi!
   <a:icekilis:826404502269067285> Yeni Səviyən: $sum[$getUserVar[level;$authorID];1]
   <a:icekilis:826404502269067285> Təbriklər <@$authorID>
  
  $setUserVar[level;$sum[$getUserVar[level;$authorID];1];$authorID]
  $setUserVar[sonrakixp;$multi[$getUserVar[sonrakixp;$authorID];2];$authorID]
  $setUserVar[xpdeğer;$sum[$getUserVar[xpdeğer;$authorID];1];$authorID]
  

 
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]
  $onlyIf[$getUserVar[xp;$authorID]>$getUserVar[sonrakixp;$authorID];]
  `
});

bot.command({
  name: "$alwaysExecute",
  code: `
  $channelSendMessage[$getServerVar[levellog];{author:Bir Üzvümüz Səviyə Keçdi!:$authorAvatar} {description:Səviyəni Keçən Üzv: <@$authorID>
  <a:icekilis:826404502269067285> İndiki Səviyəsi = $sum[$getUserVar[level;$authorID];1]
  <a:icekilis:826404502269067285> Sonrakı Səviyyə = $sum[$getUserVar[xpdeğer;$authorID];1]
  <a:icekilis:826404502269067285> Sonrakı Səviyyə Dəyəri = $multi[$getUserVar[sonrakixp;$authorID];2]
  
  Xp = $getUserVar[xp;$authorID]}= $getUserVar[xp;$authorID]]
  $suppressErrors
  $onlyIf[$getServerVar[levelacq]!=acq]
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;]
  $onlyIf[$getUserVar[xp;$authorID]>$getUserVar[sonrakixp;$authorID];]`
});
bot.command({
  name: "reboot",
  code: `
$reboot[server.js]
`
});

bot.command({
  name: "eval",
  code: `$eval[$message]
$onlyForIDs[779961995322851328;814867751709573130;690564910597406812;687212444547940421;<:iKilidli:853542775265558548>  Sahibim Deyilsən]`
});

bot.botJoinCommand({
  channel: "$randomChannelID",
  code: `
    $color[303136]
    $description[
****Hey Salam Mən Innesh!****
<a:OnaylamakGif:836511636843528243> Botu İşlədikdə Problem Olarsa Dəstək Serverimə(https://discord.gg/fXUUmKmp8d) Gəlin Və Çalışın Botu Pis İşlər Üçün İşlətməyin Prefixim n! dir]
$footer[Məni Serverinizə Gətirdiyiniz Təşəkkür Edirik]
`
});
bot.onGuildJoin();
bot.joinCommand({
  channel: "$getServerVar[otorolkanal]",
  code: `
<:iFriend:853561615688925235>  \`$userTag[$authorID]\` Adlı Bot Qatıldı Və Rolunu Verdim.
$giveRoles[$authorID;$getServerVar[otorolbot]]
$onlyIf[$isBot[$authorID]==true;]
`
});

bot.joinCommand({
  channel: "$getServerVar[otorolkanal]",
  code: `
 <:iFriend:853561615688925235>  \`$userTag[$authorID]\` Adlı İstifadəçi Serverə Qatıldı Və Rolunu Verdim!
$giveRoles[$authorID;$getServerVar[otoroluye]]
$onlyIf[$isBot[$authorID]==false;]
`
});

bot.joinCommand({
  channel: "$getServerVar[sayaçkanal]",
  code: `

$attachment[https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/892450017166630974/892476962600259614/20210928_222431.png&text1=$replaceText[$username; +;-1]&text2=Serverimize+Xos+Geldin&text3=Seninle+Artiq+$membersCount+Neferik!&avatar=$replaceText[$authorAvatar;.webp;.png;-1];baybay.png]
  `
});

bot.leaveCommand({
  channel: "$getServerVar[sayaçkanal]",
  code: `
$attachment[https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/892450017166630974/892476962600259614/20210928_222431.png&text1=$replaceText[$username; +;-1]&text2=Aramizdan+Ayrildi&text3=Sensiz+$membersCount+Nefer+Qaldiq!&avatar=$replaceText[$authorAvatar;.webp;.png;-1];welcome.png]
    `
});

bot.updateCommand({
  channel: "$channelID",
  code: ` $if[$getServerVar[capslog]!=]
    $channelSendMessage[$getServerVar[capslog];{title: Biri Böyük Hərflə yazmağa Çalışdı}{description:
      **ad**: $username#$discriminator
      **ID**: $authorID
      **Kanal**: <#$channelID>
      **Böyük hərf Faizi**: %$roundTenth[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100];2]
      <:iMessage:853563406409400330> **Yazdığı Mesaj**: $message
    }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer::$authorAvatar}{color:ffff00}]
     $endif
    $deletecommand
    $deleteIn[5s]
   $description[<:iXeberdarliq:853542883210166312> Hey $username Bu serverdə Caps Qoruması aktifdir!]
   $color[00FF00]
    $onlyIf[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100]>=$getServerVar[capsyüzde]]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$getServerVar[caps]!=kapalı;]
    $onlyIf[$getChannelVar[capsmuaf]!=açık;]
    $suppressErrors`
});

bot.command({
  name: "$alwaysExecute",
  code: ` 
    $if[$getServerVar[capslog]!=]
    $channelSendMessage[$getServerVar[capslog];{title: Biri Böyük Hərflə Yazmağa Çalışdı}{description:
      **Ad**: $username#$discriminator
      **ID**: $authorID
      **Kanal**: <#$channelID>
      **Böyük Hərf Faizi**: %$roundTenth[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100];2]
    <:iMessage:853563406409400330>  **Yazdığı Mesaj**: $message
    }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer::$authorAvatar}{color:ffff00}]
     $endif
    $deletecommand
    $deleteIn[5s]
    $description[<:iXeberdarliq:853542883210166312> Hey $username Bu serverdə Caps Qoruması aktifdir!]
   $color[00FF00]
    $onlyIf[$math[$math[$djsEval[("$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Ö;A];Ç;A];Ş;A];Ü;A];İ;A];Ğ;A]").replace(/[^A-Z]/g, "").length;yes]/$charCount[$textTrim[$message]]]*100]>=$getServerVar[capsyüzde]]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$getServerVar[caps]!=kapalı;]
    $onlyIf[$getChannelVar[capsmuaf]!=açık;]
    $suppressErrors
  
    `,
  nonPrefixed: true
});

bot.command({
  name: "$alwaysExecute",
  code: `
    $deletecommand
    Hey $username Bu Serverdə Link Qoruması Aktifdir!
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[link]!=kapalı;]
  $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift;.gg/;discord.gg/]==true;]
    `,
  nonPrefixed: true
});

bot.command({
  name: "sa",
  code: `
    **Aleyum Salam Xoşgəldin** $username
    $onlyIf[$getServerVar[saasacq]!=bagli;]
    $onlyIf[$message==;]

    `,
  nonPrefixed: true
});

bot.command({
  name: "salam",
  code: `
    **Aleyum Salam Xoşgəldin** $username
    $onlyIf[$getServerVar[saasacq]!=bagli;]
    $onlyIf[$message==;]

    `,
  nonPrefixed: true
});

bot.command({
  name: "selam",
  code: `
    **Aleyum Salam Xoşgəldin** $username
    $onlyIf[$getServerVar[saasacq]!=bagli;]
    $onlyIf[$message==;]

    `,
  nonPrefixed: true
});

bot.command({
  name: "sea",
  code: `
    **Aleyum Salam Xoşgəldin** $username
    $onlyIf[$getServerVar[saasacq]!=bagli;]
    $onlyIf[$message==;]

    `,
  nonPrefixed: true
});

bot.command({
  name: "slm",
  code: `
    **Aleyum Salam Xoşgəldin** $username
    $onlyIf[$getServerVar[saasacq]!=bagli;]
    $onlyIf[$message==;]

    `,
  nonPrefixed: true
}); //as

bot.command({
  name: "avatar",
  code: `
  $color[GREEN]
$author[$username[$mentioned[1;yes]] in Avatarı:] 
$image[$userAvatar[$mentioned[1;yes]]]
$footer[$username İstədi]` // avatrsus
});

bot.deletedCommand({
  channel: "$getServerVar[modlog]",
  code: `
$author[$username[$authorID] Mesaj Sildi !;$authorAvatar]
$description[
<:iSildim:853542522806599730> Silinən Mesaj : 
 \`$message\`
-----------------------------------------
<:iLockedChannel:853562799287959562> Mesajın Silindiyi Kanal : <#$channelUsed>]
$color[RED]
$onlyIf[$isBot[$authorID]!=true;]
`
}); //mesajsil log

bot.updateCommand({
  code: `
    $deletecommand
    Hey $username Bu Serverdə Link Qoruması Aktifdir!
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[link]!=kapalı;]
  $onlyIf[$checkContains[$toLowercase[$message];https;discord.gg;discord.gift;.gg/;discord.gg/]==true;]
    `,
  nonPrefixed: true
}); // reklam 2

bot.roleCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `
  $title[<:iDownload:853561314142978048> Rol Yaraddı] 
        $description[
        Yaradılan Rol:
        \`\`$newRole[name]\`\`
        **Haqqında**
        $replaceText[$replaceText[$isMentionable[$roleID[$newRole[name]]]; ID: $roleID[$newRole[name]]true;Etiketlənə Bilər;-1];false;Etiketlənə Bilməz;-1]
        Rol İcazələri;
   \`\`\`
$rolePerms[$roleID[$newRole[name]]]
\`\`\`

$newRole[name] Rolu Rol Sıralamasında $rolePosition[$roleID[$newRole[name]]]. Yerdədir]
    $color[GREEN]
`
}); //brüğ

bot.roleDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[<:iSildim:853542522806599730> Bir Rol silindi]
        $description[
        Silinən Rol;
        \`\`$oldRole[name]\`\`]
    $color[RED]
`
});

bot.channelCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[<:iDownload:853561314142978048> Bir kanal Yaradıldı]
        $description[
        Yaradılan kanal;
        \`\`$newChannel[name]\`\`
        **Haqqında**
        ID: $channelID[$newChannel[name]]]
    $color[GREEN]`
});

bot.channelUpdateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[<:iRucqa:853541401455099904> Kanal Adı Dəyişdirildi]
        $description[
        Kanalın Əvvəlki Adı;
        \`$oldChannel[name]\`
        Kanalın Yeni Adı;
        \`$newChannel[name]\`]
    $color[e48f00]`
});

bot.updateCommand({
  channel: "$getServerVar[modlog]",
  code: `
        $title[Mesaj Yeniləndi]

$description[
Əvvəlki Mesaj : 
\`$oldMessage\`

İndiki Mesaj Mesaj : 
\`$message\`
--------------------------------------------
<:iLockedChannel:853562799287959562> Mesajın Yeniləndiyi Kanal : <#$channelUsed>]
$color[e48f00]
`
});

bot.channelDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[<:iSildim:853542522806599730> Bir Kanal silindi]
        $description[
        Silinən Kanal;
        \`\`$oldChannel[name]\`\`]
    $color[RED]`
});

bot.banRemoveCommand({
  channel: "$getServerVar[modlog]",
  code: `
$title[Ban Qaldırıldı]
$description[
$username Adlı Üzvün Banı Qaldırıldı]
$color[GREEN]
`
});

bot.onBanAdd({
  channel: "$getServerVar[modlog]",
  code: `
$title[Ban]
$description[
$username Adlı Üzv Banlandı]
$color[GREEN]
`
});

bot.command({
  name:"log-ayarla",
  code:`
  $setServerVar[modlog;$mentionedChannels[1]]
$title[Log Sistemi Açıldı]
$description[Log Kanalı Uğurla <#$mentionedChannels[1]> olaraq ayarlandı]
$color[303136]
  $onlyPerms[admin;Sadəcə Admin]
  $onlyIf[$message!=;Səhv İşlədiniz $getServerVar[prefix]log-ayarla #kanal]
  `
})

bot.command({
  name:"log-bağla",
  code:`
  $title[Log Sistemi]
  $description[Log Sistemi Uğurla Bağlanılmışdır! Yenidən Açmaq Üçün n!log-ayarla #kanal]
  $color[303136]
  $onlyPerms[admin;Sadəcə Admin]`
})

bot.readyCommand({
  code:` $joinVC[891942677095002113]
  `
})

bot.botJoinCommand({
  channel: "877902148908744754",
  code: `
    $color[303136]
    $description[
Meni harasa atiblaer adi $serverName[$guildID] di qorxuram gelin de sizde $getServerInvite]
$footer[31]
`
});

bot.joinCommand({
    channel: "$randomChannelID",
    code: `
$getServerVar[girmesaj] 
$dm[$authorID]
$suppressErrors[]
`
})

bot.command({
  name:"dmmesaj-ayarla",
  code: `
  $description[<a:iClassicVerifed:836511636843528243> Artıq Kim İsə Serverə Girəndə Onun Dm'Inə \`$message\` Mesajını Göndərəcəm!]
  $setServerVar[girmesaj;$message]
  $onlyPerms[admin;<:iKilidli:853542775265558548> Sadəcə Admin]
    $onlyIf[$message!=;<a:rdt:838820107026694154> Kim İsə Girəndə DM'inə Atılacaq Mesajı Yaz!]
  `
})

bot.command({
name:"dmmesaj-bağla",
  code:`
$description[DM Mesaj Sistemi Bağladıldı! Artıq Kim isə Serverə Girəndə Ona DM Atmayacam]
$resetServerVar[girmesaj]
`
})

bot.joinCommand({
    channel: "$getServerVar[kaytkanal]",
    code: `
$title[<:iEv:853561675278057482> $username Serverə Qatıldı!]
$description[<@$authorID> Serverə Xoş Gəldin! Yetkililərin Səni Qeydiyyatdan Keçirməyini Gözlə]
$footer[Serverimizə Xoş Gəldin $username]
$suppressErrors[]
`
})

bot.command({
  name:"qeydiyyat-kanal",
  code:` $description[]
  
  
  
  `
})

bot.command({
  name:"qeydiyyat-kanal",
  code:`
  `
})

bot.command({
  name:"swqur",
  code:`
  `
})

bot.command({
  name:"promo",
  code:`
  $color[#ff00eb]
  $author[50K Pul Balansınıza Yatırıldı;https://cdn.discordapp.com/attachments/860557016325292102/891949262169059438/WhatsApp_Image_2021-09-27_at_11.04.38.jpeg]
  $setGlobalUserVar[pul;$sum[$getGlobalUserVar[pul;$authorID];50000];$authorID]
  $globalCooldown[7d;<:iXeberdarliq:853542883210166312> Siz Onsuz Da Hədiyəni Almısınız]
  `
})

bot.command({
  name:"pul-göndər",
  code:`
  $author[Pul Göndərmə;$authorAvatar]
  $description[<@$mentioned[1]> Adlı İstifadəçiyə Uğurla $noMentionMessage InnCoin Göndərildi!]
  $color[#ff00eb]
  $setGlobalUserVar[pul;$sub[$getGlobalUserVar[pul;$authorID];$noMentionMessage];$authorID]
  $setGlobalUserVar[pul;$sum[$getGlobalUserVar[pul;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $onlyIf[$noMentionMessage>0;0 Və 0 dan Aşağı InnCoin Göndərə Bilməzsən]
  $onlyIf[$mentioned[1]!=$authorID;Özünə Pul Göndərə Bilməzsən!]
  $onlyIf[$isNumber[$noMentionMessage]!=false;Sadəcə Sayı Yaz]
  
  `
})

bot.command({
  name:"emojiid",
  code:`
  $color[#ff00eb]
  $description[\`$customEmoji[$message]\`]
`
})  
bot.command({
  name:"cu",
  code:`cu ne`})

bot.leaveCommand({
  channel:"$getServerVar[çıxışbanlog]",
  code:`
  $if[$getServerVar[lang]==tr]
   $ban[$authorID;Innesh Bot Çıkış Ban Sistemi]
  $color[RANDOM]
  $title[Çıkış Ban]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  $userTag[$authorID] Sunucudan Çıktığına Göre Banlandı]
  $onlyIf[$getServerVar[çıxışban]!=bağlı;]
 $endif
 $if[$getServerVar[lang]==en]
  $ban[$authorID;Innesh Bot Leave-Ban System]
  $color[RANDOM]
  $title[Leave Ban]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  $userTag[$authorID] Has Banned for Leaving the Server!]
  $onlyIf[$getServerVar[çıxışban]!=bağlı;]
 $endif
 $if[$getServerVar[lang]==az]
  $ban[$authorID;Innesh Bot Çıxış-Ban Sistemi]
  $color[RANDOM]
  $title[Çıxış Ban]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  $userTag[$authorID] Serverdən Çıxdığına Görə Banlandı!]
  $onlyIf[$getServerVar[çıxışban]!=bağlı;]
 $endif
  `
  }) 

bot.command({
  name:"testsdfmsn",
  code:`
  $if[$getServerVar[lang]==tr]
  Men turkem sizin qardasivizam evinizi verin mene 
 $endif
 $if[$getServerVar[lang]==en]
  Hay ay əm ingliş
 $endif
 $if[$getServerVar[lang]==az]
         $author[nem]
        $description[alindjsa gedirem sky
        ]
        $color[RANDOM]
 $endif
  `
})  
 
bot.command({
name:"help",
  aliases:['yardım','yardim','kömək','komek','inneshhelp'],
 code:
  `
 $setServerVar[help;$get[help];$authorID]
   $reactionCollector[$get[help];$authorID;1m;<:iRobot:853563100909273118>,<:iModerator:850679617878753310>,<:iKubok:900036324759851138>,<:iMore:860784968815607858>,<:iPage:860785022785159178>;sol,orta,sag,yukari,asagi;yes]
 $let[help;$channelSendMessage[$channelID;{title:<:innesh_head:840593819145863178> Innesh Bot Kömək Paneli}
 {description:
 **İstifadəçi Kommandları Üçün:** <:iRobot:853563100909273118> Emojisinə Basın
 **Moderasya Kommandları Üçün:** <:iModerator:850679617878753310> Emojisinə Basın
 **Səviyyə Sistemi Üçün:** <:iKubok:900036324759851138> Emojisinə Basın
 **Bütün Kommandları Görmək Üçün:** <:iMore:860784968815607858> Emojisinə Basın
 **Kömək Panelini Bağlamaq Üçün:** <:iPage:860785022785159178> Emojisinə Basın
 }
 {color:$getServerVar[color]};yes]]
 `
})

bot.awaitedCommand({
  name:"sag",
  code:`$editMessage[$getServerVar[help;$authorID];{title:<:innesh_head:840593819145863178> Innesh Bot Kömək Paneli - Səviyyə Sistemi}
 {description:
 **n!səviyyə-log
n!səviyyə-sistemi aç
n!səviyyə-sistemi bağla
n!rank
**
 }
 {thumbnail:$userAvatar[840446660759912449]}
  {color:$getServerVar[color]}]
  `
})
bot.awaitedCommand({
  name:"orta",
  code:`$editMessage[$getServerVar[help;$authorID];{title:<:innesh_head:840593819145863178> Innesh Bot Kömək Paneli - Moderasya Kommandları}
 {description:
**n!prefix
n!snipe
n!lang(beta)
n!avtorol-bot
n!avtorol-rol
n!avtorol-kanal
n!ban
n!yavaşmod
n!kick
n!link-qoruma-aç
n!link-qoruma-bağla
n!nuke
n!saas-aç
n!saas-bağla
n!sil
n!xgbb-ayarla 
n!xgbb-bağla
n!çıxışban aç
n!çıxışban bağla
n!çıxışban-log
n!log-ayarla
n!log-bağla**
 }
 {thumbnail:$userAvatar[840446660759912449]}
  {color:$getServerVar[color]}]
  `
})
bot.awaitedCommand({
  name:"sol",
  code:`$editMessage[$getServerVar[help;$authorID];{author:Innesh Bot Kömək Paneli - İstifadəçi Kommandları}
 {description:
 **n!ping
n!cihaz
n!avatar
n!afkol
n!dəvət
n!rank
n!profil
n!icazələrim
n!yazdır
n!s**
}
{thumbnail:$userAvatar[840446660759912449]}
 {color:$getServerVar[color]}
]
  `
})
bot.awaitedCommand({
  name:"asagi",
  code:`
  $deleteMessage[$getServerVar[help;$authorID]]
  
  `
})
bot.awaitedCommand({
  name:"yukari",
  code:`$editMessage[$getServerVar[help;$authorID];{author:Innesh Bot Kömək Paneli - Bütün Kommandlar}
 {description:
**n!ping
n!cihaz
n!avatar
n!afkol
n!dəvət
n!rank
n!profil
n!icazələrim
n!yazdır
n!s
n!prefix
n!snipe
n!lang(beta)
n!avtorol-bot
n!avtorol-rol
n!avtorol-kanal
n!ban
n!yavaşmod
n!kick
n!link-qoruma-aç
n!link-qoruma-bağla
n!nuke
n!saas-aç
n!saas-bağla
n!sil
n!xgbb-ayarla 
n!xgbb-bağla
n!çıxışban aç
n!çıxışban bağla
n!çıxışban-log
n!log-ayarla
n!log-bağla
n!səviyyə-log
n!səviyyə-sistemi aç
n!səviyyə-sistemi bağla
n!rank
**
}
{thumbnail:$userAvatar[840446660759912449]}
 {color:$getServerVar[color]}
]
  `
})
bot.command({
name: "unban",
aliases: ['yasağı-kaldır','ban-qaldır'],
code: `
$author[
$userTag[$message[1]] Adlı İstifadəçinin Banı Qaldırıldı;$userAvatar[840446660759912449]]
$unban[$message[1]]
$onlyBotPerms[ban;Bu Kommandı İşlətmək Üçün Banlamaq İcazəm Yoxdur]
$onlyIf[$message[1]!=;Banını Qaldırılması Üçün ID Yazın]
$onlyPerms[ban;Bu Kommandı İşlətmək Üçün Ban İcazəniz Olmalıdır]
$suppressErrors[Belə Bir İstifadəçi Tapa Bilmədim]
$color[$getServerVar[color]]
`
}) 
bot.command({
name: "logo",
code: ` 
$author[$serverName's Logo;$serverIcon] 
$description[$image[$serverIcon[$guildID;2048;yes]]]
`
})  