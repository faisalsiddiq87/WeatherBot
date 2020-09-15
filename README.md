# Project Title

Weather ForeCast ChatBot

### Prerequisites

* Git, Node must be installed on your machine.
* Add a project on google dialogflow platform.
* Signup on openweathermap.org to get your API Key.
* Create a mongo db either on your machine or host remotely on any cloud platform.
* Get your Google service account key from https://cloud.google.com/docs/authentication/getting-started and keep it under `api/bundle` folder with name as `service-account.json`.
* Use Ngrok to configure your localhost url for public access and for getting URL for Dialogflow webhook. 

## Installation

* Clone the repository to your Machine.
* Execute the `npm install` command in root folder to install node dependencies for Frontend.
* Execute the `npm install` command in api folder to install dependencies for Backend.
* In the API directory copy `.env.example` and rename it to `.env` and keep on same level.
* Add all necessary values to .env varaiables as per your configurations.

## About The Implementation

* The BackEnd Implementation is done via `Node JS Express Framework`.
* The FrontEnd is Implemented via `React JS`.
* Weather Foreacast is fetched via `openweathermap` APIs.
* NLP is done via Google `DialogFlow` platform.
* `Mongo DB` is used for saving all the chat logs.