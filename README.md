# TheSportsRoom

**TheSportsRoom** is a real-time live chat web app where sports enthusiasts can dive into discussions about the latest sports news. Users can click on sports news headlines from various sports leagues and teams, and chat in real-time with other fans, sharing opinions, insights, and reactions.

## Features

- **Real-Time Chat**: Users can participate in live conversations about the latest sports news, powered by Firebase for real-time messaging.
- **Sports News**: Get the latest sports news headlines from ESPN's API and join the conversation.
- **Unique User Identification**: Users are automatically assigned a unique ID and stored in local storage, so they can easily return and continue chatting in future sessions.
- **No Account Required**: No need for a sign-up or login – users can jump right into the conversation.

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **Firebase**: Used for real-time chat functionality.
- **ESPN API**: Fetches live sports news headlines for users to discuss.
- **Local Storage**: To persist unique user IDs for each session.

## Demonstration

You can try the app live by clicking the link below:

[View Demo](https://thesportsroom.netlify.app/)

## Watch a Demo

Here's a short demo video showcasing how **TheSportsRoom** works. It's about 1:40 long and demonstrates the core features of the app:

[Watch Demo](https://youtu.be/Sz_-Z8AYB1o)

## How It Works

1. **Sports News Headlines**: The app fetches live sports news from the ESPN API and displays the headlines in the app.
2. **Real-Time Chat**: When a user clicks on a sports headline, a live chat room is created specifically for that topic. Users can chat in real-time using Firebase as the backend for message handling.
3. **User Identification**: On their first visit, users are assigned a unique ID stored in their browser's local storage. If they return to the app, they will continue using the same ID.
4. **Chat UI**: The chat UI is dynamic and updates instantly as new messages come in.

## Acknowledgements

- **Firebase**: For enabling real-time communication in the chat.
- **ESPN API**: For providing live sports news headlines.
- **React**: For the powerful and flexible frontend.
