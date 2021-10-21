module.exports = {
    name: "oxut",
    code: `$color[00ff51]
$author[▶️ Mahnı Oxudulur]
$description[ İndi Oxudulan Mahnı:**$songInfo[title]**
Mahnı Uzunluğu **$songInfo[duration]** Saniyədir.

🔗 Mahnı Linki $songInfo[url]
▶️ Sıradakı Mahnı Sayısı: $queueLength]
$footer[Mahnını Oxudan: $username;$authorAvatar]
$playSong[$message;Belə Mahnı Tapa Bilmədim Yenidən Yoxla]
$onlyIf[$voiceID!=;<a:rdt:838820107026694154> Səs Kanalında Olmalısan]
$onlyIf[$message!=;<a:rdt:838820107026694154> Bir Mahnı Adı Yaz]
`
}