import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const GIF_URL = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRwa2QzeHYzYmdpeTRoMWVrOHpnNm9rNmViNmJ0bnFyOGk3Z3F0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q3lcEOKtY3c5plpImk/giphy.gif';

client.once('clientReady', () => [
  console.log("Ready!")
]);


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user)) {
    try {
      await message.reply(GIF_URL)
    } catch(error) {
      console.error("Error")
    }
    
  };

})

client.login(process.env.DISCORD_TOKEN);