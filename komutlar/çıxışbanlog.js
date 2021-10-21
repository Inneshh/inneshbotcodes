module.exports = {
  name:"çıxışban-log",
  aliases:['çıxış-ban-log'],
  code:`
 $If[$message[1]==ayarla]
 $channelSendMessage[$channelID;{color:RANDOM}{description:Çıxış-ban Log Kanalı <#$mentionedChannels[1]> Olaraq Ayarlandı.Bağlamaq Üçün, n!çıxışban-bağla, Ban Log Kanalını Sıfırlamaq Üçün n!çıxışban-log sıfırla}]
 $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Bu Kommandı Sadəcə Adminlər İşlədə Bilər!}]
 $setServerVar[çıxışbanlog;$mentionedChannels[1]]
 $onlyIf[$mentionedChannels[1]!={color:RANDOM}{description:Bir Kanal Etiketlə!}]
 $endif
 $if[$message[1]==sıfırla]
 $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Bu Kommandı Sadəcə Adminlər İşlədə Bilər!}]
 $resetServerVar[çıxışbanlog]
 $endif
  `
  } 