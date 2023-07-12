export function showMessageInCorrectLangWinner(lang) {
  switch (lang) {
    case "fr":
      return "message fr tout nouveau";
      break;
    case "es":
      return "message es";
      break;
    case "ko":
      return "message ko";
      break;
    default:
      return "message en";
  }
}

export function showMessageInCorrectLangEndStreamSoon(lang) {
  switch (lang) {
    case "fr":
      return "message fr : fin bientot";
      break;
    case "es":
      return "message es :fin bientot";
      break;
    case "ko":
      return "message ko :fin bientot";
      break;
    default:
      return "message en :fin bientot";
  }
}

export function sendMessageWhenParticipate(lang) {
  switch (lang) {
    case "fr":
      return "message FR DE PARTICIPATION";
      break;
    case "es":
      return "message ES DE PARTICIPATION";
      break;
    case "ko":
      return "message KO DE PARTICIPATION";
      break;
    default:
      return "message EN DE PARTICIPATION";
  }
}
