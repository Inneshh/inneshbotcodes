module.exports = {
  name:"tavsiye",
  code:`
  $channelSendMessage[$getServerVar[tavsiyelog];{author:Yeni bir tavsiye iletildi!:$authorAvatar}{field:Tavsiye veren:<@$authorID> (\`$authorID\`)}{field:Tavsiye kategorisi:$message[1]}{field:Verdiği tavsiye:$messageSlice[1]}{color:BLACK}{thumbnail:$authorAvatar}{reactions:$customEmoji[tokyo_tick],$customEmoji[tokyo_cross]}]
  $addCmdReactions[$getServerVar[tick]]
  $onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Tavsiyenizi belirtin.]
  $onlyIf[$checkContains[$toLowercase[$message[1]];bdfd;aoijs;djs;html;sunucu;d.js;aoi.js]==true;$getServerVar[cross] <@$authorID>, Tavsiye kategorisi belirtin. \`Örnek: .tavsiye $randomText[bdfd;aoijs;djs;html;sunucu] < tavsiyeniz >\`]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Tavsiye kategorisini belirtin. \`Örnek: .tavsiye $randomText[bdfd;aoijs;djs;html;sunucu] < tavsiyeniz >\`]
  `
  }