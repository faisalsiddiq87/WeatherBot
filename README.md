# Project Title

Weather ForeCast ChatBot

![chat-bot](https://github.com/faisalsiddiq87/WeatherBot/blob/master/public/screenshots/bot.gif)

### Prerequisites

* Git, Node must be installed on your machine.
* Add a project on google `dialogflow` platform.
* Signup on `openweathermap.org` to get your API Key.
* Create a mongo database either on your machine or host remotely on any cloud platform.
* Get your Google service account key from https://cloud.google.com/docs/authentication/getting-started and keep it under `api/bundle` folder with name as `service-account.json`.
* Use Ngrok to configure your localhost url for public access and for getting URL for Dialogflow webhook. 

## Installation

* Clone the repository to your Machine.
* Execute the `npm install` command in root folder to install node dependencies for Frontend -> React JS.
* Execute the `npm install` command in api folder to install dependencies for Backend -> Node JS.
* For Front End: Add al the relevant environment values in the `.env.development` file of root directory. 
* For BackEnd: In the API directory copy `.env.example` and rename it to `.env` and keep on same level after replacing with relevant values as per your environment.
* Add all necessary values to .env varaiables as per your configurations.

## About The Implementation

* The BackEnd Implementation is done via `Node JS Express Framework`.
* The FrontEnd is Implemented via `React JS`.
* Weather Foreacast is fetched via `openweathermap` APIs.
* NLP is done via Google `DialogFlow` platform.
* `Mongo DB` is used for saving all the chat logs.

## Testing

* Execute the command `npm test` in the `api` folder to run all test cases.

## ScreenShots

* Please review [screenshots](https://github.com/faisalsiddiq87/WeatherBot/tree/master/public/screenshots) for chatbot, chat logs, testCases etc

