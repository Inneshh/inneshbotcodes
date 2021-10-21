module.exports = ({
name:"nuke",
code:`$editChannel[$get[kanal];$get[kat];$get[ad];$get[pz];$get[nsfw];$defualt;$default;yes;Nuke]
$wait[1s]
$channelSendMessage[$get[kanal];$userTag[$authorid] Tərəfindən Kanal Nukelənmişdir.{attachment:nuke.gif:https://i.pinimg.com/originals/6c/48/5e/6c485efad8b910e5289fc7968ea1d22f.gif};no]
$setChannelTopic[$get[kanal];$get[topic]]
$wait[1s]
$let[kanal;$createChannel[$get[ad];text;yes;$get[kat]]]
$deleteChannels[$channelID]
$wait[1s]
$let[nsfw;$replaceText[$replaceText[$channelNSFW;true;yes;-1];false;no;-1]]
$let[topic;$channelTopic[$channelID]]
$let[ad;$channel[$channelID;name]]
$let[kat;$channelCategoryID[$channelID]]
$let[pz;$channel[$channelID;rawposition]]
$onlyBotPerms[managechannels;<a:rdt:838820107026694154> Bu Kommandı Etmək Üçün **Kanalları İdarə Et** İcazəm Yoxdur.Xahiş Edirəm Ayarlardan Mənə **Kanalları İdarə Et** İcazəsini Verin]
$onlyPerms[managechannels;<a:rdt:838820107026694154> Bu Kommandı İşlətmək Üçün **Kanalları İdarə Et** İcazəniz Olmalıdır]`
})     