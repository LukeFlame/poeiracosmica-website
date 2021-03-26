const mongoose = require('mongoose');

const serverinfo = new mongoose.Schema({
  serverID: String,
  medails: Array,
  memberCount: Number,
});

module.exports = mongoose.models.serverinfo || mongoose.model('serverinfo', serverinfo);
