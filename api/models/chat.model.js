const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    session_id: {type: String, required: true},
    query: {type: String, required: true},
    reply: {type: String, required: true},
});

ChatSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('Chat', ChatSchema);