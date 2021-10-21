module.exports = {
  name: "$alwaysExecute",
  code: ` <:iMic:853542552590745650> Etiketlədiyiniz Üzv  \`$getGlobalUserVar[afks;$mentioned[1]]\` Səbəbi İlə Afk Dir
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
$suppressErrors
`
};
