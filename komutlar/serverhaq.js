module.exports = {
    name: "server",
    code: `$author[$serverName[$guildID] Adlı Server Haqqında;$serverIcon]
$color[RANDOM]
$description[Ad: $serverName[$guildID]
Server ID: $guildID
Server Sahibi: $ownerID / <@$ownerID>
Emoji Sayı: $emojiCount
Rol Sayısı: $guildRoles[mention]
Boost Səviyəsi: $guild[$guildID;boostlevel]
Boost Sayı: $guild[$guildID;boostcount]
`
}