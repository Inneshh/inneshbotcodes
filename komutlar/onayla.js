module.exports = {
  name:"onayla",
  code:`
$sendDM[$message[1];$servername sunucusunda yapmış olduğun yetkili başvurusu kabul edildi.]
$channelSendMessage[$getServerVar[ylog];<@$message[1]>{description:**Başvurusu Onaylanan:** <@$message[1]> ( \`$message[1]\` )
**Başvuruyuru Onaylayan:** <@$authorID>}{color:GREEN}]
$changeNickname[$message[1];$getUserVar[yisim;$message[1]]]
$giveRole[$message[1];$getServerVar[yrol]]
$getServerVar[tick] <@$authorID>, Başarılı bir şekilde başvuru onaylandı.
$onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucunuzda böyle bir kullanıcı yok.]
$onlyIf[$isnumber[$message[1]]!=false;$getServerVar[cross] <@$authorID>, Lütfen başvuru yapan kişinin IDsini girniz]
$onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Lütfen başvuru yapan kişinin IDsini girniz]
$onlyPerms[manageserver;admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]  
  `
}