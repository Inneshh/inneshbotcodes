module.exports = ({
    name:"tövsiyə",
    code:`
    $useChannel[$getServerVar[tknal]]
    $color[GREEN]
    $author[Tövsiyə Gəldi!]
    $description[Tövsiyə Edənin ID: $authorID
    Tövsiyə Edən: $userTag[$authorID]
    **Tövsiyəsi:**
    \` $message\`   
    $footer[Tövsiyyələriniz Bizim Üçün Dəyərlidir]
    $onlyIf[$getServerVar[tayar]==ayarli;<a:rdt:838820107026694154> Töviyə kanalı ayarlanmayıb]
   $onlyIf[$message!=;<a:rdt:838820107026694154> Tövsiyəni Yaz]

    `
}) 
