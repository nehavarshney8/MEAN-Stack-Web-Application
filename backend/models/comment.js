const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongoose').Schema.ObjectId;

const commentSchema = new Schema({
    attraction_id: { type: Schema.Types.ObjectId, ref: 'attractions' },
    comment_content: String
});

module.exports = mongoose.model('comments',commentSchema);