module.exports = {
  name:"yazdır",
  code:`
 $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$noMentionMessage]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1]];$userAvatar[$mentioned[1]];yes];/]
$argsCheck[>1;Birini etiketle kankam]
$argsCheck[>2;Bir mesaj gir kankam]
 $onlyIf[$checkContains[$toLowercase[$message];<;https;discord.gg;.gg;bit.ly;.net;.org;.com]==false;Bak attım.]`
  }