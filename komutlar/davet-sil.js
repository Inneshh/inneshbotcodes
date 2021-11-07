module.exports = {
  name:"davet-sil",
  code:`
  $color[Blue]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  <@$mentioned[1]> Kişisinin Tüm Davetleri Silindi]
  $replaceText[$replaceText[$resetInvites[$guildID;$mentioned[1]];true;;-1];false;;-1]
  $onlyIf[$mentioned[1]!=;{color:RANDOM}{description:Lütfen bir üye etiketleyin}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[Yasakland] Üzgünüm Ama Admin Yetkin Yok}]
  `
} 
