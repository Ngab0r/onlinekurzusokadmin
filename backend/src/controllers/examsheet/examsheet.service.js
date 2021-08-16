const Examsheet = require('../../models/examsheet.model');

exports.create = examsheetData => {
    const examsheet = new Examsheet(examsheetData);
    return examsheet.save();
};

exports.findAll = () => Examsheet.find().populate('user', 'questions');

exports.findOne = id => Examsheet.findById(id).populate('user', 'questions');

exports.update = (id, updateData) => Examsheet.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Examsheet.findByIdAndRemove(id);
