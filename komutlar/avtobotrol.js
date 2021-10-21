module.exports = {
    name: "avtorol-bot",
    code: `
$description[  <:iVerifedServer:853560958886608946>  Bot Üçün Avtorol Rolu <@&$mentionedRoles[1]> Olaraq Ayarlandı]
$setServerVar[otorolbot;$mentionedRoles[1]]
$color[PINK]
$onlyIf[$getServerVar[otorole]==yes;<:iXeta:853541993044115476>  İlk Əvvəl Avtorol Kanalı Ayarla!]
`
}