module.exports = {
        name: "lang",
        code: `$if[$message[1]==tr]
        $author[Botun Dili Türkçe Olarak Ayarlandı;$userAvatar[840446660759912449]]
        
        $color[#ff00f6]
        $setServerVar[lang;tr]
        $onlyIf[$getServerVar[lang]!=tr;Dil Zaten Türkçe]
        $endif
         $if[$message[1]==az]
         $author[Botun Dilini Azərbaycanca Ayarladınız;$userAvatar[840446660759912449]]
      $color[#ff00f6]
         $setServerVar[lang;az]
           $onlyIf[$getServerVar[lang]!=az;Onsuz Da Botun Dili Azərbaycancadır]
        $endif
        $if[$message[1]==en]
        $author[You have sethe Bot's language to English;$userAvatar[840446660759912449]]
        $color[#ff00f6]
        $setServerVar[lang;en]
        $onlyIf[$getServerVar[lang]!=en;Language Already English]
        $endif
        $if[$message[1]==]
         $author[Please Select System language;$userAvatar[840446660759912449]]
        $description[ 
        :flag_us: **English:** n!lang en
        :flag_tr: **Turkish:** n!lang tr
        :flag_az: **Azerbaijani:** n!lang az
        ]
        $color[#ff00f6]
        $endif
        $onlyPerms[admin;Bu Kommandı Sadəcə Adminlər İşlədə Bilər]
        `
}  
