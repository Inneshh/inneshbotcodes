module.exports = {
  name:"unjail",
  code:`
  $sendDM[$mentioned[1];**$serverName** sunucusumda jailden çıkarıldın.]
  $author[Üye jailden çıkarıldı!;$userAvatar[$mentioned[1]]]
  $description[<@$mentioned[1]> adlı üye jailden çıkarıldı ve <@&$getServerVar[üyerol]> rolü verildi]
  $color[BLACK]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $giveRoles[$mentioned[1];$getServerVar[üyerol]]
  $takeRoles[$mentioned[1];$getServerVar[jailrol]]
  $setUserVar[jail;no;$mentioned[1]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==true;$getServerVar[cross] <@$authorID>, Üye zaten jailde değil.]
  $onlyIf[$mentioned[1]!=;$getServervar[cross] <@$authorID>, Kimi jailden çıkarmalıyım?]
  $onlyForRoles[$getServerVar[jailhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }