module.exports = {
  name: "invite-kanal",
  code: `
  $if[$message[1]==ayarla]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar[$clientID]}{description:invite Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı}]
  $setServerVar[invitekanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:RANDOM}{description: Lütfen Bir Kanal Etiketle}]
  $onlyPerms[admin;{color:RANDOM}{descripton:Üzgünum Ama Admin Yetkin Yok}]
  $endif
  $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{color:RANDOM}{description:$customEmoji[tick] İnvite Kanalı Başarıyla Sıfırlandı}{thumbnail:$userAvatar[$clientID]}]
  $resetServerVar[invitekanal]
  $onlyIf[$getServerVar[invitekanal]!=;{color:RANDOM}{description:$customEmoji[Zil_1] Zaten İnvite Kanalını Önceden Ayarlamamışsın}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgünum Ama Admin Yetkin Yok}]
  $endif
  $onlyIf[$checkContains[$tolowerCase[$message[1];ayarla;sıfırla]]==true;{color:RANDOM}{description:Lütfen Bir Arguman Girin : \`\ ayarla;sıfırla \`\}]
  `
}; 
