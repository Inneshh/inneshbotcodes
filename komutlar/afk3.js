module.exports = {
  name:"$alwaysExecute",
  code:`
  $channelSendMessage[$channelID;{author:$userTag[$mentioned[1]] şuan AFK!:$userAvatar[$mentioned[1]]}{description:**Sebep:** \`$getUserVar[afksebep;$mentioned[1]]\`}{color:BLACK}{thumbnail:$userAvatar[$mentioned[1]]}{delete:7s}]
  $addCmdReactions[$getServerVar[cross]]
  $onlyIf[$getUserVar[afk;$mentioned[1]]==yes;]
  $onlyIf[$mentioned[1]!=;]
  `
  }