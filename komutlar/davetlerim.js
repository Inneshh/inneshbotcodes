module.exports = {
  name:"davetlerim",
  code:`
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $addTimestamp
  $title[**$userTag[$authorID] Kişisinin Davet Bilgileri**]
  $description[
 
 Gerçek Davet Sayısı **$userInfo[real] \**
Sahte Davet Sayısı **$userInfo[fake]**
 Topam Davet Sayısı **$math[$userInfo[real]+$userInfo[fake]]**
  
  ]
  
  `} 
