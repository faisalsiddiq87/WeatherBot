const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    session_id: {type: String, required: true},
    query: {type: String, required: true},
    reply: {type: String, required: true},
});

module.exports = mongoose.model('Chat', ChatSchema);