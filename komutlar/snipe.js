module.exports = {
  name:"snipe",
  code:`
  $author[$userTag;$authorAvatar]
  $addField[Silinen Mesaj;\`\`\`js
$getServerVar[snipe3]\`\`\`]
  $addField[Silindiği Kanal;<#$getServerVar[snipe2]> - ( \`$getServerVar[snipe2]\` )]
  $addField[Silen Kullanıcı;<@$getServerVar[snipe1]> - ( \`$getServerVar[snipe1]\` )]
  $color[BLACK]
  $thumbnail[$authorAvatar]
  $onlyPerms[admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }