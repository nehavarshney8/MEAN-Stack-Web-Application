const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongoose').Schema.ObjectId;

const attractionSchema = new Schema({
    destination_id: { type: Schema.Types.ObjectId, ref: 'destinations' },
    att_name: String,
    att_desc: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
    img_src: String
});

module.exports = mongoose.model('attractions', attractionSchema);