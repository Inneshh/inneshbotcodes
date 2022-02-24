module.exports = {
  name:"başla",
  aliases:["akinator","akinatör","aki","start"],
  code:`
  $djsEval[
  const akinator = require('discord.js-akinator');
  akinator(message, client, "tr");
  ]
  `
  }