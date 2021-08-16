const Payment = require('../../models/payment.model');

exports.create = paymentData => {
    const payment = new Payment(paymentData);
    return payment.save();
};

exports.findAll = () => Payment.find().populate('posts');

exports.findOne = id => Payment.findById(id).populate('posts');

exports.update = (id, updateData) => Payment.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Payment.findByIdAndRemove(id);
