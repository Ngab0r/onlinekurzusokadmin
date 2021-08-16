const Attachment = require('../../models/attachment.model');

exports.create = attachmentData => {
    const attachment = new Attachment(attachmentData);
    return attachment.save();
};

exports.findAll = () => Attachment.find().populate('posts');

exports.findOne = id => Attachment.findById(id).populate('posts');

exports.update = (id, updateData) => Attachment.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Attachment.findByIdAndRemove(id);
