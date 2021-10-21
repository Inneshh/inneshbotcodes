module.exports = {
  name:"mute",
  code:`
   :iMic: <@$mentioned[1]> Adlı Üzvün Mutesi Açıldı!
   $takeRole[$mentioned[1];$getServerVar[mrol]]
$wait[$nomentionmessage[1]]
  $onlyPerms[admin;]
  $onlyIf[$getServerVar[mrol]!=yok;]
  $onlyIf[$message[2]!=;]
  `
}