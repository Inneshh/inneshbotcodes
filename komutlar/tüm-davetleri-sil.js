module.exports = {
  name:"tüm-davetleri-sıfırla",
  code:`
  $forEachMember[invitesil]
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  \`\$membersCount\`\ Kişinin Tüm Davetleri Sıfırlandı
  ]
  $onlyPerms[admin;{color:RANDOM}{description:Üzgünüm Admin Yetkin Yok}]
  `
  } 
