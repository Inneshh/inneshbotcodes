module.exports = {
  name:"mute",
  code:`
 :iMicBagli: <@$mentioned[1]> Adlı Üzv $message Müddəti İlə Muteləndi
   $giveRole[$mentioned[1];$getServerVar[mrol]]
  $onlyPerms[admin;Sadəcə Admin]
  `
}