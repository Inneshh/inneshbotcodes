module.exports = {
  name:"çek",
  code:`
  $getServerVar[tick] <@$authorID>, **$userTag[$mentioned[1]]** adlı üye <#$voiceID> adlı kanala çekildi.
  $moveUser[$mentioned[1];$voiceID]
  $onlyIf[$voiceID[$mentioned[1]]==$getServerVar[öokanal];$getServerVar[cross] <@$authorID>, **$userTag[$mentioned[1]]** adlı üyenin <#$getServerVar[öokanal]> adlı kanalda olması lazım.]
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Çekilmesini istediğin üyeyi etiketle.]
  $onlyIf[$authorID==$getChannelVar[özelodakurucu;$voiceID];$getServerVar[cross] <@$authorID>, Bu özel odayı sen kurmamışsın üyeleri odaya çekemezsin.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]==yes;$getServerVar[cross] <@$authorID>, Olduğunuz sesli kanal özel oda olarak tanımlanmamış.]
  $onlyIf[$voiceID!=;$getServerVar[cross] <@$authorID>, Özel odana girip tekrar dene]
 `
  }