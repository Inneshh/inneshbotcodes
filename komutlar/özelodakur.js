module.exports = {
  name:"özel-oda-kur",
  code:`
  $getServerVar[tick] <@$authorID>, Sana özel bir oda kuruldu!
  $setChannelVar[özelodakurucu;$authorID;$get[kanal]]
  $setChannelVar[özeloda;yes;$get[kanal]]
  $moveUser[$authorID;$get[kanal]]
  $modifyChannelPerms[$get[kanal];+connect;+speak;$authorID]
  $modifyChannelPerms[$get[kanal];-connect;$guildID]
  $let[kanal;$createChannel[$message;voice;yes;$getServerVar[öokategori]]]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Özel odanızın adını girin.]
  $onlyIf[$voiceID==$getServerVar[öokanal];$getServerVar[cross] <@$authorID>, <#$getServerVar[öokanal]> Adlı ses kanalına girip tekrar dene.]
  `
  }