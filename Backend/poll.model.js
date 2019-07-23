const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Poll = new Schema(
{
    question: {type: String},
    option1: {type: String},
    option2: {type: String},
    option3: {type: String}
},
    {timestamps: { createdAt: 'created_at' }},
);

module.exports = mongoose.model('Polls', Poll);