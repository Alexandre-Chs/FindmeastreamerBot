import sql from "./db.js";

import "dotenv/config";
import {
  showMessageInCorrectLangWinner,
  showMessageInCorrectLangEndStreamSoon,
  sendMessageWhenParticipate,
} from "./message.js";
import cron from "node-cron";
import client from "./client.js";
import { compareParticipants } from "./sendMessageToParticipants.js";

async function getWinners() {
  //GPT Prompt, sorry :(
  const users = await sql`
  SELECT *
  FROM public."Winner"
  WHERE "createdAt" >= date_trunc('hour', CURRENT_TIMESTAMP)
    AND "createdAt" < date_trunc('hour', CURRENT_TIMESTAMP) + INTERVAL '1 hour'
    AND "createdAt" >= date_trunc('day', CURRENT_TIMESTAMP)
    AND "createdAt" < date_trunc('day', CURRENT_TIMESTAMP) + INTERVAL '1 day';
  `;
  return users;
}

async function sendMessageToWinners() {
  const getAllCurrentWinners = await getWinners();
  if (getAllCurrentWinners.length > 0) {
    getAllCurrentWinners.map((winner) => {
      const messageInCorrectLang = showMessageInCorrectLangWinner(winner.lang);
      client.say(winner.name, messageInCorrectLang);
    });
  }
}

async function sendMessageToWinnersEndSoon() {
  const getAllCurrentWinners = await getWinners();
  if (getAllCurrentWinners.length > 0) {
    getAllCurrentWinners.map((winner) => {
      const messageInCorrectLang = showMessageInCorrectLangEndStreamSoon(
        winner.lang
      );
      client.say(winner.name, messageInCorrectLang);
    });
  }
}

async function sendMessageToParticipants() {
  const getCurrentParticipants = await compareParticipants();
  if (getCurrentParticipants.length > 0) {
    getCurrentParticipants.map((participant) => {
      const messageInCorrectLang = sendMessageWhenParticipate(participant.lang);
      client.say(participant.name, messageInCorrectLang);
    });
  }
}

client.connect().then(() => {
  cron.schedule("1 * * * *", () => {
    sendMessageToWinners();
  });
  cron.schedule("55 * * * *", () => {
    sendMessageToWinnersEndSoon();
  });
  cron.schedule("* * * * *", () => {
    sendMessageToParticipants();
  });
});
