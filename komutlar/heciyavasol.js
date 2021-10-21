module.exports = {
  name:"yavaşmod",
  code:`
$color[PİNK]
$description[
 <a:OnaylamakGif:838820103708737628> $username <#$channelID>  Kanalı Üçün Yavaş Modu \`$message\` Saniyə Olaraq Ayarladı!]
$slowmode[$channelID;$messages] $onlyIf[$hasPerms[$authorID;managechannels]==true;<a:rdt:838820107026694154> Bu Kommandı Ancaq \`\`Kanalları İdarə Et\`\` İcazəsi Olanlar İşlətə Bilər]

  $onlyIf[$isNumber[$message]==true;<a:rdt:838820107026694154> Bir Rəqəm Yaz]
  $onlyIf[$message[1]>=0;<a:rdt:838820107026694154> Yazdığın Rəqəm 0 In altında Ola Bilməz ]
  $onlyIf[$message!=;<a:rdt:838820107026694154> Bir Rəqəm Yaz]
  `
}