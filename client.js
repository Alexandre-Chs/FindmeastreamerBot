import tmi from "tmi.js";

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.PRIVATE_USERNAME,
    password: process.env.PRIVATE_AUTH,
  },
});

export default client;
