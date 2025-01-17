# Event Planner Telegram Bot 🎉📅

A simple Telegram bot that allows users to schedule events and receive reminders. The bot is built using **Node.js**, **Telegraf** (Telegram Bot Framework), and **node-schedule** for scheduling reminders.

## Features 🌟

- **Create events**: Users can create events by providing the title, date, and time. 📝
- **List events**: Users can view a list of their upcoming events. 📅
- **Reminders**: The bot sends a reminder 30 minutes before each event. ⏰

## Prerequisites 📋

- **Node.js** installed on your system. 💻
- A **Telegram Bot token** (can be obtained by chatting with [BotFather](https://core.telegram.org/bots#botfather) on Telegram). 🤖

## Setup ⚙️

Follow these steps to run the Event Planner bot locally:

### 1. Clone the repository

```bash
git clone https://github.com/sohit-mishra/eventPlannerBot
cd Event_Planner_Bot
```

## 2. Install dependencies 📦
Make sure you have Node.js installed, then run:

```bash
npm install
```
## 3. Set up environment variables ⚙️  
Create a `.env` file in the root of your project directory and add your Telegram Bot Token:  

```
BOT_TOKEN=your-telegram-bot-token  
PORT=3000  
```

## You can get these keys from:

- **Telegram Bot Token**: [BotFather](https://web.telegram.org/k/#@BotFather) 🧑‍💻

## 4. Run the bot 🚀  
Start the bot by running:

```bash  
npm start  
```

Once the bot is running, it will start listening for messages on Telegram. 📲

### Example Interaction 💬  
**User:** `/new`  
**Bot:** "📌 Please enter the event title."  
**User:** "Team Meeting"  
**Bot:** "📅 Please enter the date of the event (e.g., YYYY-MM-DD)."  
**User:** "2024-11-20"  
**Bot:** "⏰ Please enter the time of the event (e.g., HH:MM)."  
**User:** "15:30"  
**Bot:** "🎉 Event created!  
📌 Title: Team Meeting  
📅 Date: 2024-11-20  
⏰ Time: 15:30"  

**30 minutes before the event:**  
**Bot:** "⏰ Reminder: The event *Team Meeting* is happening soon at *15:30* on *2024-11-20*! 🕒"

## 🌐 Visit Link  
If you are using this project via the live bot, click here to visit:

**Name**: SetEventBot  
🤖 [Bot Live Link](https://web.telegram.org/k/#@SetEventBot) 🌍

---

## 🤝 Like This Project? Connect With Me!  
If you like this project and want to create more Telegram bots, feel free to connect with me on LinkedIn:  
🔗 [Your LinkedIn Profile](https://www.linkedin.com/in/sohitmishra/) 💼
