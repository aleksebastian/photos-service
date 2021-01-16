require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const mongo = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb://localhost/spacework';
mongoose.connect(mongo, { useUnifiedTopology: true, useNewUrlParser: true });

const photoSchema = mongoose.Schema({
  _id: Number,
  workspaceId: Number,
  description: String,
  url: String,
});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  Photo,
};
