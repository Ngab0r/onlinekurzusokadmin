const mongoose = require('mongoose');

const AttachmentSchema = mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
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
