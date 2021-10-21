module.exports = {
  name:"rank",
  code:`
 https://api.xzusfin.repl.co/rankcard?avatar=$replaceText[$authorAvatar;.webp;.png;-1]&name=$replaceText[$username; ;+;-1]&level=$getUserVar[level;$authorID]&exp=$getUserVar[xp;$authorID]&maxexp=$getUserVar[sxp;$authorID]&rank=$getUserVar[rank;$authorID]
  
  `}
  