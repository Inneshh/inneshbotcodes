module.exports = {
    name: "avtorol-rol",
    code: `
$description[ <:iVerifedServer:853560958886608946> İstifadəçilər Üçün Avtorol Rolu <@&$mentionedRoles[1]> Olaraq Ayarlandı ]
$setServerVar[otoroluye;$mentionedRoles[1]]
$color[PINK]
$onlyIf[$getServerVar[otorole]==yes;<:iXeta:853541993044115476> Əvvəlcə Avtorol Kanalını Ayarla]
$onlyPerms[admin;<:iKilidli:853542775265558548> Sadəcə Admin]
    `
}