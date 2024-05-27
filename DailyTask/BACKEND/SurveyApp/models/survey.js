const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  responses: { type: Map, of: String }
});

module.exports = mongoose.model('Survey', surveySchema);
