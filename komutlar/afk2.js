module.exports = {
  name:"$alwaysExecute",
  code:`
  $setUserVar[afksebep;;$authorID]
  $setUserVar[afk;no;$authorID]
  $channelSendMessage[$channelID;$getServerVar[tick] <@$authorID>, Artık AFK değilsin.]
  $onlyIf[$getUserVar[afksayı;$authorID]==2;]
  $setUserVar[afksayı;$sum[$getUserVar[afksayı;$authorID];1];$authorID]
  $onlyIf[$getUserVar[afk;$authorID]==yes;]
  `
  }