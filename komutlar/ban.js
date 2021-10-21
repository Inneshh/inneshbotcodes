module.exports = {
  name:"ban",
  code:`
  $ban[$mentioned[1];$noMentionMessage]
  
  <:AdaletPng:838820191642583040> $username[$mentioned[1]]#$discriminator[$mentioned[1]] Adlı Üzv Serverdən $noMentionMessage Səbəbi İlə Banlandı
  $onlyIf[$hasPerms[$authorID;ban]!=false;Üzgünüm Yetkin Yetmiyor !]
  $onlyIf[$message[2]!=;Səhv İşlətdiniz: $getServerVar[prefix]ban @etiket Səbəb]
  `
}