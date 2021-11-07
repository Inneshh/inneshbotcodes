module.exports = {
  name:"çıkış-mesaj-ayarla",
  code:`
  $channelSendMessage[$channelID;$color:RANDOM}{description:$customEmoji[tick] Çıkış Mesaj Basarıyla $message Olarak Ayalrandı}]
  $onlyIf[$checkContains[$tolowerCase[$message];-inviter-;-invitee-;-toplamÜyeSayısı-;-realİnvite-;-fakeİnvite-;-toplamDavet-]==true;{color:RANDOM}{description:$customEmoji[yasak] Lütfen Bir Argüman Gir : -inviter-;-invitee-;-toplamÜyeSayısı;-realİnvite-;-fakeİnvite-}{thumbnail:$userAvatar[$clientID]}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[siyah_kurucu] Üzgünüm Ama Admin Yetkin Yok}]
  $setServerVar[çmesaj;$message]
  
  `
  
  } 
