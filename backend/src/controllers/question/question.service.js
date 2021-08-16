const Question = require('../../models/question.model');

exports.create = questionData => {
    const question = new Question(questionData);
    return question.save();
};

exports.findAll = () => Question.find().populate('posts');

exports.findOne = id => Question.findById(id).populate('posts');

exports.update = (id, updateData) => Question.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Question.findByIdAndRemove(id);
