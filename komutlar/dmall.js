module.exports = {
  name:"dmall",
  aliases:"duyuru",
  code:`
  $forEachMember[parzi]
  $getServerVar[tick] <@$authorID>, Duyurunuz iletiliyor...
  $deleteCommand
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Duyurunuzu belirtin.]
  $onlyForIDs[$botOwnerID;]
  `
  }