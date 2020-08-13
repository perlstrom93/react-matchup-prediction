const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: false,
  },
  losses: {
    type: Number,
    required: false,
  },
  role: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('User', userSchema);