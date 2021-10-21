module.exports = {
  name:"səviyyə-log",
  code:`
<a:OnaylamakGif:838820103708737628>  Səviyə Log Kanalı \`\`$channelName[$mentionedChannels[1]]\`\` Olaraq Ayarlandı.
  $setServerVar[levellog;$mentionedChannels[1]]
  
  
  $suppressErrors[<a:rdt:838820107026694154> Belə Bir Kanal Tapa Bilmədim Yenidən Yoxlayın]
  $setServerVar[levelacq;acq]
  $onlyIf[$message!=;<a:rdt:838820107026694154> Bir Kanal Etiketlə]
  $onlyIf[$getServerVar[levelsistemi]!=kapalı;<a:rdt:838820107026694154> Log Kanalını Ayarlamaq Üçün Səviyə Sistemi Açıq Olmalıdır Düzgün Kommandalarım Üçün $getServerVar[prefix]kömək Yazın]
  `
}