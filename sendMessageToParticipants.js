import sql from "./db.js";

let previousParticipants = [];

export async function getParticipants() {
  //GPT Prompt, sorry :(
  const users = await sql`
  SELECT *
  FROM public."User"
  WHERE "createdAt" >= date_trunc('hour', CURRENT_TIMESTAMP)
    AND "createdAt" < date_trunc('hour', CURRENT_TIMESTAMP) + INTERVAL '1 hour'
    AND "createdAt" >= date_trunc('day', CURRENT_TIMESTAMP)
    AND "createdAt" < date_trunc('day', CURRENT_TIMESTAMP) + INTERVAL '1 day';
  `;
  return users;
}

export async function compareParticipants() {
  const currentParticipants = await getParticipants();
  const newParticipants = currentParticipants.filter((participant) => {
    return !previousParticipants.some(
      (prevParticipant) => prevParticipant.id === participant.id
    );
  });

  previousParticipants = currentParticipants;
  return newParticipants;
}
