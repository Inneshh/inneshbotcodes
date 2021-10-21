module.exports = {
  name: "xgbb-ayarla",
  code: `Xg Bb Kanalı <#$mentionedChannels[1]> Olaraq Ayarlandı!
  $setServerVar[sayaçkanal;$mentionedChannels[1]]
  $argsCheck[>1;Bir kanal Etiketlə]
$onlyPerms[admin;Sadəcə Admin]`
}; 