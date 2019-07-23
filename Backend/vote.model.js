var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Vote = new Schema(
  {
    option: {type: String, required: true},
  },
        { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Votes', Vote);