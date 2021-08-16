const User = require('../../models/user.model');

exports.create = personData => {
    const person = new User(personData);
    return person.save();
};

exports.findAll = () => User.find();

exports.findOne = id => User.findById(id);

exports.update = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => User.findByIdAndRemove(id);
