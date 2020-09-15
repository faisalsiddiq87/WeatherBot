var axios = require('axios');
var env = require('dotenv');
env.config();
var instance = axios.create();

instance.defaults.baseURL = process.env.API_URL;
instance.defaults.timeout = process.env.TIME_OUT;
//instance.defaults.headers.common['X-RapidAPI-Key'] = process.env.API_KEY;
module.exports = instance;