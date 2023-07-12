export function showMessageInCorrectLangWinner(lang) {
  switch (lang) {
    case "fr":
      return "🎉 Félicitations ! Tu as remporté la loterie sur Findmeastreamer(.)com ! À partir de maintenant, tu seras mis en avant dans la room FR pendant une heure ! 🎉";
      break;
    case "es":
      return "🎉 ¡Felicitaciones! ¡Has ganado la lotería en Findmeastreamer(.)com! A partir de ahora, serás destacado en la sala ES durante una hora. 🎉";
      break;
    case "ko":
      return "🎉 축하합니다! Findmeastreamer(.)com에서 복권에 당첨되었습니다! 이제부터 1시간 동안 KO 룸에서 홍보될 예정입니다! 🎉";
      break;
    default:
      return "🎉 Congratulations! You have won the lottery on Findmeastreamer(.)com! From now on, you will be featured in the EN room for one hour! 🎉";
  }
}

export function showMessageInCorrectLangEndStreamSoon(lang) {
  switch (lang) {
    case "fr":
      return "⏰ Il ne te reste que 5 minutes avant de ne plus être mis en avant ! N'oublie pas de participer à nouveau sur Findmeastreamer(.)com! ⏰";
      break;
    case "es":
      return "⏰ You only have 5 minutes left before you are no longer featured! Don't forget to participate again on Findmeastreamer(.)com! ⏰";
      break;
    case "ko":
      return "⏰ 당신은 더 이상 특별하게 소개되지 않을 때까지 5분밖에 남지 않았습니다 ! Findmeastreamer(.)com에서 다시 참여하는 것을 잊지 마세요 ! ⏰";
      break;
    default:
      return "⏰ ¡Solo tienes 5 minutos antes de dejar de ser destacado/a ! ¡No olvides participar nuevamente en Findmeastreamer(.)com ! ⏰";
  }
}

export function sendMessageWhenParticipate(lang) {
  switch (lang) {
    case "fr":
      return "🙌 Merci d'avoir participé à Findmeastreamer(.)com ! Le tirage au sort 🎲 se fera à la fin de l'heure. Le bot te préviendra si tu as gagné ! 🎉";
      break;
    case "es":
      return "🙌 ¡Gracias por participar en Findmeastreamer(.)com! El sorteo 🎲 se realizará al final de la hora. ¡El bot te notificará si has ganado! 🎉";
      break;
    case "ko":
      return "🙌 Findmeastreamer(.)com에 참여해 주셔서 감사합니다! 추첨 🎲은 시간이 끝날 때 진행됩니다. 봇이 당첨 여부를 알려드립니다! 🎉";
      break;
    default:
      return "🙌 Thank you for participating in Findmeastreamer(.)com! The draw 🎲 will take place at the end of the hour. The bot will notify you if you have won! 🎉";
  }
}
