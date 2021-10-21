module.exports = ({
name:"profil",
code:`
$color[#E331E3]
$author[İstifadəçi Haqqında;https://cdn.discordapp.com/attachments/814867998765481985/848525045886222386/824356455343456308.png]
$description[
$addField[Rolları:;$userRoles[$mentioned[1;yes];mentions]]
$addField[Yüksək Rütbəsi:;<@&$highestRole[$mentioned[1;yes]]>
$addField[Hesab Yaradılma Tarixi;$creationDate[$mentioned[1;yes]];date]
$addField[Bot:;$replaceText[$replaceText[$isbot[$mentioned[1;yes]];false;Xeyr;-1];true;Bəli]
$addField[ID:;$mentioned[1;yes]]
$addField[Tag:; $userTag[$mentioned[1;yes]]
$addField[Ad:; <@$mentioned[1;yes]>]]
$footer[Innesh Bot | Profil]

`
})