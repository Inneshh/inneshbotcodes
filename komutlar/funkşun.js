module.exports = ({
    name:"function",
    code:`
$title[$message;https://dbd.leref.ga/functions/usd$toLowercase[$replaceText[$get[msg];$;;-1]]]
$let[msg;$filterMessage[$message;$]]
$description[\`\`\`html
$jsonRequest[https://dbdjs.leref.ga/functions/$message;description]
\`\`\`
$addField[Düzgün İşlətmək Üsulu:;\`\`\`kt
$jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]

\`\`\`]]
$thumbnail[https://cdn.discordapp.com/attachments/825539441539678208/829233986010087434/981f79673563f7268f4e6a88f1091787.webp]
$color[0099FF]
$onlyif[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;Xəta! Kommand Tapıla Bilmədi]`
}) 
