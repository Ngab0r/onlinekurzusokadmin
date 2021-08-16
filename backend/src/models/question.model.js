const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: [Number],
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  attachment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attachment'
    }
  ],
  active: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);
