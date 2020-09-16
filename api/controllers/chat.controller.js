
const path = require("path");
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const Chat = require('../models/chat.model');
const dotenv = require('dotenv');
dotenv.config();

exports.chat_create = function (req, res, next) {
   let chat = new Chat({
      session_id: req.body.session_id,
      query: req.body.query,
      reply: req.body.reply,
    });

   chat.save(function (err) {
       if (err) {
           return next(err);
       }

       res.send('Chat Created successfully')
   });
};

exports.chat_details = function (req, res, next) {
    Chat.findById(req.params.id, function (err, chat) {
       if (err) return next(err);
       res.send(chat);
   })
};

exports.chat_all = function (req, res, next) {
    var page = 1;  
    const PAGE_SIZE = parseInt(process.env.PAGE_LIMIT);
    if (req.query.page != "undefined") {
      page = req.query.page;
    }
    
    var aggregateQuery = Chat.aggregate();

    Chat.aggregatePaginate(aggregateQuery, { page: page, limit: PAGE_SIZE,  sort:{_id: "descending"} }, function(err, chats) {
      if (err) {
        return next(err);
      } else {
        res.send(chats);
      }
    });
};

exports.chat_delete = function (req, res, next) {
    Chat.findByIdAndRemove(req.params.id, function (err) {
       if (err) return next(err);
       res.send('Chat deleted successfully!');
   });
};

exports.chat_bot = function (req, res, next) {
    async function runSample() {
        var projectId = process.env.ProjectId;
        const sessionId = uuid.v4(); 
        var filePath = path.resolve("./bundle/service-account.json");
        const sessionClient = new dialogflow.SessionsClient({
           "keyFilename": filePath
        });
        
        const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
        const request = {
          session: sessionPath,
          queryInput: {
            text: {
              text: req.query.q,
              languageCode: 'en-US',
            },
          },
        };
      
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Responsedd: ${result.fulfillmentText}`);
  
        if (result.intent) {
          console.log(`  Intent: ${result.intent.displayName}`);
        } else {
          console.log(` No intent matched.`);
        }

        let chat = new Chat({
            session_id: sessionId,
            query: req.query.q,
            reply: result.fulfillmentText,
        });
    
        chat.save(function (err) {
            if (err) {
                return next(err);
            }
        });
  
        return result.fulfillmentText;
      }
  
      (async function main() {
        const returnedData = await runSample();
        res.send(returnedData)
      })();
};