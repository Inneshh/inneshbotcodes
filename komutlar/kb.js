module.exports = {
  name:"kullanıcı-bilgi",
  aliases:"kb",
  code:`
  $author[$serverName;$serverIcon]
  $addField[Rozetleri;> $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$message[1]];House Brilliance;$customEmoji[brilliance];-1];House Bravery;$customEmoji[bravery];-1];House Balance;$customEmoji[balance];-1];Early Supporter;$customEmoji[early];-1];Early Verified Developer;;-1];Verified Developer;$customEmoji[developer];-1];Partnered Server Owner;;-1];Discord Partner;$customEmoji[partner];-1];Nitro Classic;$customEmoji[nitro];-1];,;;-1];Discord Employee;$customEmoji[staff];-1];Bughunter Level 2;$customEmoji[bughunter2];-1];Bughunter Level 1;$customEmoji[bughunter1];-1];Hypesquad Events;$customEmoji[hypesquadevents];-1];none;Rozeti yok;-1]]
  $addField[Hesap kuruluş;> $creationDate[$message[1]]]
  $addField[Avatar;> [Tıkla]($userAvatar[$message[1]])]
  $addField[Botmu?;> $replaceText[$replaceText[$isBot[$message[1]];true;Evet;-1];false;Hayır;-1]]
  $addField[Sunucuda varmı?;> $replaceText[$replaceText[$memberExists[$message[1]];true;Evet;-1];false;Hayır;-1]]
  $addField[Kullanıcı ID;> $message[1]]
  $addField[Kullanıcı adı;> [$userTag[$message[1]]](https://discord.com/users/$message[1])]
  $color[BLACK]
  $thumbnail[$userAvatar[$message[1]]]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  `
  }