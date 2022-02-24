module.exports = {
  name:"at",
  code:`
  $getServerVar[tick] <@$authorID>, **$userTag[$mentioned[1]]** adlı üye <#$voiceID> adlı kanaldan atıldı.
  $moveUser[$mentioned[1];$getServerVar[öokanal]]
  $onlyIf[$voiceID[$mentioned[1]]==$voiceID;$getServerVar[cross] <@$authorID>, Atmak istediğin üye seninle aynı odada değil.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Atmak istediğin üyeyi etiketle.]
  $onlyIf[$authorID==$getChannelVar[özelodakurucu;$voiceID];$getServerVar[cross] <@$authorID> Bu özel odayı sen kurmamışsın üyeleri odadan atamazsın.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]==yes;$getServerVar[cross] <@$authorID> Olduğunuz sesli kanal özel oda olarak tanımlanmamış.]
  $onlyIf[$voiceID!=;$getServerVar[cross] <@$authorID>, Özel odana girerek tekrar dene.]
  `
  }