module.exports = ({
name:"$alwaysExecute",
code:`$setGlobalUserVar[afk;hayır]
$setGlobalUserVar[afks;]
$color[GREEN]
$author[Dostlar $userTag[$authorID] Yeri Gəldi O Artıq Afk Deyil!]
$description[Afk Dən Çıxdınız <@$authorID>

$onlyIf[$getGlobalUserVar[afkc]==2;]
$setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
$onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
$suppressErrors
`
})