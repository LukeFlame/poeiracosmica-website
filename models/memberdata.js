const mongoose = require('mongoose');

const memberdata = new mongoose.Schema({
  userID: String,
  xp: Number,
  level: String,
  atoms: Number,
  votes: Number,
  medails: Array,
  nickColor: {
    colors: Array,
    base: Array,
    selected: String,
  },
  profileColor: {
    colors: Array,
    base: Array,
    selected: String,
  },
  bg: {
    link: String,
    aval: String,
    value: String,
  },
  vip: {
    plan: String,
    time: String,
    duration: String,
  },
  boost: {
    xp: {
      plan: String,
      time: String,
      duration: String,
    },
    atom: {
      plan: String,
      time: String,
      duration: String,
    },
  },
  messages: {
    day1: Number,
    day2: Number,
    day3: Number,
    day4: Number,
    day5: Number,
    day6: Number,
    day7: Number,
  },
  lastProducts: Array,
});

module.exports = mongoose.models.memberdata || mongoose.model('memberdata', memberdata);
