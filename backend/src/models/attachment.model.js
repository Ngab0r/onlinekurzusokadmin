const mongoose = require('mongoose');

const AttachmentSchema = mongoose.Schema({
    name: { type: String, required: true },
    url: String,
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timeStamps: true
});

module.exports = mongoose.model('Attachment', AttachmentSchema);
