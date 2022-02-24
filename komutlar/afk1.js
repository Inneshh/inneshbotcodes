module.exports = {
  name:"afk",
  code:`
  $setUserVar[afksayı;0]
  $setUserVar[afksebep;$message;$authorID]
  $setUserVar[afk;yes;$authorID]
  $channelSendMessage[$channelID;$getServerVar[tick] <@$authorID>, Artık AFK'sın]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Afk sebebi girin.]
  $onlyIf[$getUserVar[afk;$authorID]==no;]
  `
  }