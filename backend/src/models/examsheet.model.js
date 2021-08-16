const mongoose = require('mongoose');

const ExamsheetSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Question',
    },
    time: {
        type: Date,
        default: new Date(),
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Examsheet', ExamsheetSchema);
