module.exports = {
  name:"unmute",
  code:`
  $sendDM[$mentioned[1];**$serverName** sunucusunda mute süren bitmiştir. Tekrardan kanallara yazabilirsin.]
  $author[Üye jailden çıkarıldı!;$userAvatar[$mentioned[1]]]
  $description[<@$mentioned[1]> adlı üye  muteden çıkarıldı ve <@&$getServerVar[üyerol]> rolü verildi]
  $color[BLACK]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $giveRoles[$mentioned[1];$getServerVar[üyerol]]
  $takeRoles[$mentioned[1];$getServerVar[muterol]]
  $setUserVar[mute;no;$mentioned[1]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[muterol]]==true;$getServerVar[cross] <@$authorID>, Üye zaten mutede değil.]
  $onlyIf[$mentioned[1]!=;$getServervar[cross] <@$authorID>, Kimi jailden çıkarmalıyım?]
  $onlyForRoles[$getServerVar[mutehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }