module.exports = {
  name:"özel-oda-sil",
  aliases:"özel-oda-kapat",
  code:`
  $getServerVar[tick] <@$authorID>, Özel odanız kapatıldı!
  $deleteChannels[$voiceID]
  $onlyForIDs[$getChannelVar[özelodakurucu;$voiceID];$getServerVar[cross] <@$authorID>, Bu özel odayı sen kurmamışsın silemezsinde.]
  $onlyIf[$getChannelVar[özeloda;$voiceID]!=no;$getServerVar[cross] <@$authorID>, Olduğunuz sesli kanal özel oda kanalı olarak tanımlanmamış.]
  `
  }