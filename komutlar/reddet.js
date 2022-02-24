module.exports = {
  name:"reddet",
  code:`
$sendDM[$message[1];$servername sunucusunda yapmış olduğun yetkili başvurusu reddedildi. Sebebi \`$messageSlice[1]\`]
$channelSendMessage[$getServerVar[ylog];<@$message[1]>{description:**Başvurusu Reddedilen:** <@$message[1]> ( \`$message[1]\` )
**Başvuruyuru Reddeden: <@$authorID>
**Sebebi:** \`$messageSlice[1]\`}{color:RED}]
$getServerVar[tick] <@$authorID>, Başarılı bir şekilde başvuru reddedildi. Sebebi \`$messageSlice[1]\`
$onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Bir sebep girin.]
$onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
$onlyIf[$isnumber[$message[1]]!=false;$getServerVar[cross] <@$authorID>, Lütfen başvuru yapan kişinin IDsini girniz]
$onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Lütfen başvuru yapan kişinin IDsini girniz]
$onlyPerms[manageserver;admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]  
  `
}