const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

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

PaymentSchema.plugin(idValidator);

module.exports = mongoose.model('Payment', PaymentSchema);
