module.exports = {
  name:"səviyyə-sistemi",
  code:`
  <a:OnaylamakGif:838820103708737628> Səviyyə Sistemi $replaceText[$replaceText[$message[1];aç;Açıldı.Səviyə Log Kanalını Ayarlamaq Üçün !səviyyə-log #kanal yaza bilərsən;-1];bağla;Bağlandı.Açmaq İstəyirsəniz !səviyyə-sistemi aç Yazın;-1]
  $setServerVar[levelsistemi;$replaceText[$replaceText[$message[1];aç;Açıq;-1];kapat;Bağlı;-1]]
  $replaceText[$replaceText[$message[1];aç;;-1];bağla;$resetServerVar[levellog];-1]
  $onlyIf[$checkContains[$message[1];aç;bağla]!=false;<a:rdt:838820107026694154> Səhv Yazdınız: !səviyyə-sistemi aç/bağla]
   $onlyIf[$message!=;<a:rdt:838820107026694154> Səhv İşlətdiniz: !səviyyə-sistemi aç/bağla]
  `
}