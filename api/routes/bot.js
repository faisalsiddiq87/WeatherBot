
var express = require('express');
var router = express.Router();
const dfff = require('dialogflow-fulfillment');
var axios  = require('../helpers/axios');
var helper  = require('../helpers/common');

router.post('/', (req, res, next) => {
   const agent = new dfff.WebhookClient({
      request: req,
      response: res
   });

   async function demo (agent) {
      const result = req.body.queryResult;
      console.log(result);
      const response = await axios.get('weather', {params: {
         'q': result.parameters['geo-city'],
         'APPID': process.env.API_KEY
      }});   

      var resp = response.data;
      var temp = helper.convertTempratureToCelsius(resp.main.temp);
      var desc = resp.weather[0].description;
      var phrase = "Weather in " + result.parameters['geo-city'] + " is like " + temp + "℃ with " + desc;
      agent.add(phrase);
   }

   var intentMap = new Map();
   intentMap.set('WeatherBot', demo);
   agent.handleRequest(intentMap);
});

module.exports = router;