module.exports = {
  name:"abone",
  aliases:"a",
  code:`
  $if[$message[1]==ver]
  $addCmdReactions[$getServerVar[tick]]
  $giveRoles[$mentioned[1];$getServerVar[abonerol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[abonerol]]==false;$getServerVar[cross] <@$authorID>, Üyede zaten abone rolü var.]
  $endif
  $if[$message[1]==al]
  $addCmdReactions[$getServerVar[tick]]
  $takeRoles[$mentioned[1];$getServerVar[abonerol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[abonerol]]==true;$getServerVar[cross] <@$authorID>, Üyede zaten abone rolü yok.]
  $endif
  $onlyIf[$mentioned[1]!=;$getServerVar[cross] <@$authorID>, Üyeyi etiketleyin.]
  $onlyIf[$checkContains[$toLowercase[$message[1]];ver;al]==true;$getServerVar[cross] <@$authorID>, **ver** , **al** argumanlarını kullanın.]
  $onlyForRoles[$getServerVar[abonehammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }