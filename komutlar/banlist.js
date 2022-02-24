module.exports = {
name:"banlist",
code:`
$author[$banCount Banlı üye bulunmakta;$authorAvatar]
$description[$replaceText[$djsEval[message.guild.fetchBans() .then(x => x.map(member => member.user.tag + " " + "|" + " " +member.user.id).join("NJOİNN"));yes];NJOİNN;
;-1]]
$color[BLACK]
$thumbnail[$authorAvatar]
$onlyPerms[admin;❎ <@$authorID>, Bunu kullanamazsın.]
`
} 
