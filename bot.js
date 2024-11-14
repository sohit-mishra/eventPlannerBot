const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const events = [];
const userSessions = {};

bot.start((ctx) => ctx.reply('Welcome to the Set Event Planner Bot! Use /new to create an event.'));

bot.command('new', (ctx) => {
  const userId = ctx.from.id;
  userSessions[userId] = { step: 1 };
  ctx.reply('Please enter the event title:');
});

bot.on('text', (ctx) => {
  const userId = ctx.from.id;

  if (userSessions[userId] && userSessions[userId].step === 1) {
    const title = ctx.message.text;
    userSessions[userId].title = title;
    userSessions[userId].step = 2;
    ctx.reply('Please enter the date of the event (e.g., YYYY-MM-DD):');
  } else if (userSessions[userId] && userSessions[userId].step === 2) {
    const date = ctx.message.text;
    userSessions[userId].date = date;
    userSessions[userId].step = 3;
    ctx.reply('Please enter the time of the event (e.g., HH:MM):');
  } else if (userSessions[userId] && userSessions[userId].step === 3) {
    const time = ctx.message.text;
    const { title, date } = userSessions[userId];
    const event = { title, date, time };
    events.push(event);

    delete userSessions[userId];

    ctx.reply(`Event created!\n\nTitle: *${event.title}*\nDate: *${event.date}*\nTime: *${event.time}*`, { parse_mode: 'Markdown' });
    scheduleReminder(event, ctx);
  }
});

bot.command('events', (ctx) => {
  if (events.length === 0) {
    ctx.reply('No events found.');
  } else {
    const eventList = events
      .map((event, index) => `${index + 1}. *${event.title}* - ${event.date} at ${event.time}`)
      .join('\n');
    ctx.reply(`Here are your events:\n${eventList}`, { parse_mode: 'Markdown' });
  }
});

function scheduleReminder(event, ctx) {
  const eventDateIST = new Date(`${event.date}T${event.time}:00+05:30`);
  const reminderDateIST = new Date(eventDateIST.getTime() - 30 * 60 * 1000);

  schedule.scheduleJob(reminderDateIST, () => {
    ctx.reply(`Reminder: The event "*${event.title}*" is happening soon at *${event.time}* on *${event.date}*!`, { parse_mode: 'Markdown' });
  });
}

bot.launch();
