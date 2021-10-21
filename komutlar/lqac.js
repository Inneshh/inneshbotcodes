module.exports = ({
    name:"link-qoruma-aç",
    code: `
    $onlyPerms[admin;Sadəcə admin] 
  $setServerVar[link;açık]
    $onlyIf[$getServerVar[link]!=açık;Bu Sistem Onsuz da Açıqdır]
   Link Qoruma Sistemi Açıldı
 Bağlamaq Üçün !link-qoruma-bağla
    `
    })