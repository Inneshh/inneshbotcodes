module.exports = {
  name:"çıxışban",
  aliases:['çıxış-ban'],
  code:`
 $if[$message[1]==aç]
 $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Çıxış Ban Sistemini Açdınız.Artıq Kim İsə Serverdən Çıxarsa Banlanacaq}]
 $onlyPerms[admin;{color:RANDOM}{description:Bu Kommandı Sadəcə Adminlər İşlədə Bilər!}]
 $setServerVar[çıxışban;acq]
 $endif
 $if[$message[1]==bağla]
 $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Çıxış ban Sistemini Bağladınız.Artıq Serverinizdən Kim isə Çıxsa, Banlanmayacaq.}]
 $onlyPerms[admin;{color:RANDOM}{description:Bu Kommandı Sadəcə Admin İşlədə Bilər!}]
 $setServerVar[çıxışban;bağlı]
 $endif
 
 `
  } 