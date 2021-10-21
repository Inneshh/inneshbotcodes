module.exports = {
  name:"muterol",
  code:`
  <:iAktiv:853561834912219137> Mute Rol \`$roleName[$mentionedRoles[1]]\` Olaraq Ayarlandı
  $suppressErrors[🧐 Bir Problem Oldu Yenidən Yoxlayın]
  $setServerVar[mrol;$mentionedRoles[1]]
  $onlyPerms[admin;Bunu Etmək Üçün Admin Olmalısan]
  $onlyIf[$message[1]!=;Bir Rol Etiketlə]
  `
}