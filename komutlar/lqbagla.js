module.exports = ({
    name:"link-qoruma-bağla",
    code: `
    $onlyPerms[admin;Sadəcə admin] 
    $resetServerVar[link;kapalı]
    $onlyIf[$getServerVar[link]!=kapalı;Bu Sistem Onsuz da Bağlıdır]
   Link Qoruma Sistemi Bağlatıldı
 Açmaq Üçün !link-qoruma-aç
    `
    })