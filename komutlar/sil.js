module.exports = {
  name: "sil",
  aliases: ["clear", "delete"],
  code: `
  $description[ \`$message[1]\` **Ədəd Mesajı Sildim!**]
  $color[ff000]
  
  $deletecommand
  $deleteIn[4s]
  $clear[$message[1]]
  $suppressErrors[{author:Xəta!}
  {description:**Bağışlayın,Discord APİ 14 Günden Çox Vaxtı Olan Mesajları Silməmə İcazə Vermir** ❌}
  {color:RED}]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;{author:Xəta!}
  {description:**Bunu Etmək Üçün** \`Mesajları İdarə Et \` **İcazəniz Olmalıdır** ❌}
  {color:RED}]
  $onlyBotPerms[managemessages;{author:Hata!}
  {description:**Bunu Etmək Üçün** \`Mesajları İdarə Et\` **İcazəm Olmalıdır** ❌}
  {color:RED}]
  $onlyIf[$message!=;{author:Hata!}
  {description:**Bir Rəqəm Yaz!** ❌}
{color:RED}]
  $onlyIf[$isNumber[$message[1]]!=false;{author:Hata!}
{description:**Sistemdə Xəta Yarandı Və Mesajları Silə Bilmədim Xahiş Edirik Yenidən Yoxlayın** ❌}
{color:RED}]
  $onlyIf[$message[1]>0;{author:Hata!}
  {description:**Yazdığın Rəqəm** \`1\`**in Altında Ola Bilməz!** ❌}
{color:RED}]
  $onlyIf[$message[1]<101;{author:Hata!}
  {description:**Yazdığın Rəqəm** \`100\`**ün Üstündə Ola Bilməz** ❌}
 {color:RED}]  
`
};
