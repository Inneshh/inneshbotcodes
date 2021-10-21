module.exports = {
    name: "avtorol-kanal",
    code: `
$description[Avtorol Kanalı
<#$mentionedChannels[1]>
Olaraq Ayarlandı!]
$setServerVar[otorole;yes]
$setServerVar[otorolkanal;$mentionedChannels[1]]
$argsCheck[>1;<:iXeta:853541993044115476>  Kanal Etiketlə]
$color[PINK]
$onlyPerms[admin;<:iKilidli:853542775265558548> Sadəcə Admin]
`
}