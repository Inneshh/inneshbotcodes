module.exports = {
  name:"invite-mesaj-ayarla",
  code:`
  $channelSendMessage[$channelID;{color:RANDOM}{description:$customEmoji[tick] Giriş Mesajı Başarıyla \`\ $message \`\ Olarak Ayarlandı}]
  $onlyIf[$checkContains[$tolowerCase[$message];-inviter-;-invitee-;-toplamÜyeSayısı-;-realİnvite-;-fakeİnvite-]==true;{color:RANDOM}{description:$customEmoji[yasak] Lütfen Bir Argüman Gir : -inviter-;-invitee-;-toplamÜyeSayısı;-realİnvite-;-fakeİnvite-}{thumbnail:$userAvatar[$clientID]}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[siyah_kurucu] Üzgünüm Ama Admin Yetkin Yok}]
  $setServerVar[gmesaj;$message]
  
  
  `} 
