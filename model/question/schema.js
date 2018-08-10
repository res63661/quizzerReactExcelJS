const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: false },
  subject: {type: String, required: false}
});


module.exports = mongoose.model('Question', questionSchema);
