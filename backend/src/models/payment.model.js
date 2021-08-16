const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: new Date(),
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Payment', PaymentSchema);
