module.exports = {
  name:"kick",
  code:`
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;Səbəb Yazılmadı;-1]]
  $color[GREEN]
  $description[Atılan Üzv: $userTag[$mentioned[1]]
  
  Atılmaq Səbəbi: $replaceText[**$noMentionMessage**;****;Səbəb Yazılmadı!;-1]]
  
  $onlyIf[$hasPerms[kick;$authorID]!=false;<a:rdt:838820107026694154> Bunu Etmək Üçün Üzvləri At İcazəniz Olmalıdır! İcazələrinizə Baxmaq Üçün !icazələrim]
  $onlyIf[$message!=;<a:rdt:838820107026694154> Bir Nəfəri Etiketlə]
$onlyIf[$mentioned[1]!=; <a:rdt:838820107026694154> Bir Nəfəri Etiketlə]
  `
} 